# PRP：Tkinter Microfluidic GUI → FastAPI + 原生 JS Web App 遷移

## Feature 概述
- 目標：把 `MicrofluidicGUI_v4.py` 的 9x3 點選、流道預覽、12 組性質預測、3D Mesh 產生/預覽/存檔等全套交互，100% 等效遷移到 Web（後端 Python/FastAPI，前端原生 HTML/JS/CSS，版面/互動規則/配色需一致）。
- 成果：可啟動的 FastAPI 服務與靜態前端，支援點選→流道圖→預測→3D Mesh 生成功能，並提供對應 API、測試與操作文件。

## 研究摘要
- 既有邏輯
  - 圖形/預測核心：`iGenerator` 會據點位計算流道圖、轉模型輸入並產出 12 項預測（`iGenerator.py:39-174`）。通道寬/距影響 `LSpace` 與 `LWidth`，並透過 `Repository` 模型/Scaler 完成推論。
  - GUI 邏輯：點選/順序/輸入/按鈕組織在 `MicrofluidicGUI_v4.py:520-1075`，含參數校驗、訊息彈窗、流道圖刷新、預測填值、3D Mesh 生成與保存。
  - 3D Mesh：`MeshGenerator3D` 以影像切片生成 STL，支援 inlet/outlet 座標與邊框處理（`MeshGenerator.py:1-200`）；目前同檔包含 Vispy/Tk 相關匯入，需在 Web 端避免 GUI 依賴。
- 模式/規範
  - 版面：1600x900、左輸入右輸出、白/灰背景，按鈕用綠/藍/黃區分動作。
  - 邏輯：必須自下而上選點、每列最多 2 點；未選點不可生成流道，未生成流道不可預測；3D Mesh 若無流道可 fallback 模板。
- 缺口
  - 無 Web/HTTP 邏輯、無 CORS/靜態檔配置。
  - Matplotlib/Vispy 目前假設有顯示環境，需 headless 後端處理。
  - 無自動化測試與 API 規格文件。

## 外部參考
- FastAPI 官方指南（路由、依賴、CORS、中介）：https://fastapi.tiangolo.com/
- Uvicorn 伺服器啟動參數與熱重載：https://www.uvicorn.org/
- Matplotlib 非互動後端設定（Agg）：https://matplotlib.org/stable/users/explain/backends.html#non-interactive-backends
- Fetch API 與 FormData 送檔/JSON（MDN）：https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- STL/mesh MIME 下載建議（`application/vnd.ms-pki.stl`）：https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types

## 關鍵上下文（程式碼對照）
- 點選網格配置與選點狀態管理 `MicrofluidicGUI_v4.py:594-660`；按鈕與 3D 預覽區 `MicrofluidicGUI_v4.py:520-587`。
- 流道生成：參數校驗 → `iGenerator` 初始化 → 繪圖 → 緩衝更新 `MicrofluidicGUI_v4.py:841-890`。
- 預測：若無流道則阻擋，必要時重算流道，推論後填 12 欄位 `MicrofluidicGUI_v4.py:940-999`。
- 3D Mesh：依流道或模板產生，允許 inlet/outlet 座標，存 STL `MicrofluidicGUI_v4.py:1002-1084`；切片/遮罩與孔位邏輯 `MeshGenerator.py:37-200`。
- 模型與通道計算：`iGenerator.py:39-106` 決定 `LSpace/LWidth` 及點集；`iGenerator.py:117-174` 完成模型推論。

## 實作藍圖（Pseudo-code）
```
# backend/main.py
set matplotlib to "Agg"
app = FastAPI()
igen_cache = {}

def get_igen(cdepth,cwidth,cspace):
    key = (cdepth,cwidth,cspace)
    return cached iGenerator

@post("/api/flow/generate")
payload: {points:[{row:int,col:str}], params:{cdepth,cwidth,cspace}}
-> validate order & max 2 per row
-> compute xbasic/ybasic via iGenerator.calc_variables / cnums_lookup
-> map row/col to coords via Repository.pointinterpreter or custom map
-> img_buf, coords = plot_flow_path(...)
-> return {image_base64, coords}

@post("/api/predict")
requires generated coords
-> predictions = igen.get_prediction(coords, [cdepth,cwidth,cspace])
-> return {predictions[], image_base64, coords}

@post("/api/mesh")
payload: {use_template:bool, inlet_outlet?:coords, middle_image?:upload/base64}
-> mesh = MeshGenerator3D(...).generate_mesh(...)
-> return {stl_base64 or download_url, meta:{volume}}

Static files: serve /static with index.html + main.js + styles.css

# frontend main.js
render 9x3 grid on canvas; enforce order (row asc) & <=2 points/row
handle Generate -> call /api/flow/generate, show flow image
handle Predict -> call /api/predict, fill 12 labels
handle Mesh -> call /api/mesh, offer STL download link
```

## 錯誤處理策略
- 參數/選點驗證：API 層檢查 row 升序、每列 ≤2 點、必填 params；回傳 400 JSON 錯誤碼。
- 模型/檔案依賴：缺少模型或切片檔回傳 500 並提示檔名；後端記錄 exception trace。
- 圖片/mesh 生成：headless 模式強制 `matplotlib.use("Agg")`，Vispy 相關行為隔離到純計算路徑；遇到 None 中斷並回報。
- 安全：限制上傳大小、避免 `eval` 注入（改用預定義映射），回應中不暴露敏感路徑。

## 驗證閘門
- 靜態分析：`python -m compileall .`（確保無語法錯誤）
- 後端單元/API 測試（將新增）：`python -m pytest tests/api`
- 端到端手動檢查：`uvicorn backend.main:app --reload` → 瀏覽 `http://127.0.0.1:8000/`，依 GUI 規則操作三流程（流道/預測/mesh）確認顏色與排版。
- 格式/品質（如採用）：`ruff .` 或 `black backend`（若專案允許新增工具）。

## Ticket 清單
1. `rework/tickets/01_backend_scaffold.md`
2. `rework/tickets/02_flow_and_predict_api.md`
3. `rework/tickets/03_mesh_api_and_assets.md`
4. `rework/tickets/04_frontend_web_ui.md`
5. `rework/tickets/05_integration_validation.md`

## 信心指數
- 7.5/10（模型/Vispy 在無顯示環境與檔案缺失上仍需驗證；需確認 STL 產生耗時與部署環境 GPU/CPU 差異）。
