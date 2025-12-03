## Summary
實作用戶點選/流道生成與 12 項性質預測 API，封裝 `iGenerator`，回傳圖片 base64、點座標與預測數值並落實輸入驗證。

## Why
Web 前端需透過 HTTP 取得流道圖與預測結果；複用既有演算法的同時加入嚴格驗證與 headless 支援，才能保持行為一致。

## Scope
- 定義 Pydantic 模型：點選輸入（row/col）、通道參數（cdepth/cwidth/cspace）。
- 實作 `/api/flow/generate`：驗證 row 升序、每列 ≤2 點；以 `Repository.pointinterpreter` 映射座標，產出流道圖 base64 與點座標。
- 實作 `/api/predict`：重用/快取 `iGenerator`，輸入流道座標與參數，回傳 12 項預測與最新流道圖 base64。
- 錯誤處理：輸入錯誤回 400；模型/檔案缺失回 500 並含訊息。
- 新增對應 API 單元/整合測試（TestClient）。

## Out-of-Scope
- 3D mesh 相關 API。
- 前端 UI 串接與樣式。
- 模型/檔案下載或管理。

## Acceptance Criteria
- `/api/flow/generate` 在合法點選下回傳 200，內容含 base64 PNG 與點座標陣列。
- `/api/flow/generate` 對「逆序 row」或「同列超過 2 點」回 400 並含錯誤訊息。
- `/api/predict` 回傳 12 筆數值、最新 base64 流道圖；無流道輸入時回 400。
- 測試檔可用 `python -m pytest tests/api/test_flow_predict.py` 跑通。

## Implementation Steps
1. 在 `backend/main.py` 或子模組定義 Pydantic schema（Points/Params/PredictRequest/Responses）。
2. 建立共用 `get_igen(cdepth,cwidth,cspace)` 快取函式，確保 Matplotlib headless。
3. 以安全映射替代 `eval`：重用 `Repository.pointinterpreter` 或新建 row/col→座標函式，生成選點座標清單。
4. `/api/flow/generate`：驗證規則→生成座標→呼叫 `iGenerator.plot_flow_path`→回傳 base64 影像 + 座標。
5. `/api/predict`：驗證已含座標/參數→呼叫 `iGenerator.get_prediction`→回傳 12 項數值與影像。
6. 新增測試：合法流程成功、順序/每列限制失敗、缺少模型檔時訊息清晰（可 mock）。

## Test/Validation
- `python -m pytest tests/api/test_flow_predict.py`

## Git Commit Message
Add flow and predict APIs
