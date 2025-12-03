## Summary
建立原生 HTML/JS/CSS 前端，重現 Tkinter 版版面與互動（9x3 點選→流道預覽→預測結果→mesh 下載），串接已提供的 API。

## Why
需要可用的 Web 介面讓使用者完成完整流程並保持與舊 GUI 一致的體驗與配色。

## Scope
- 在 `static/` 建立 `index.html`, `styles.css`, `main.js`。
- 版面：左輸入（點選畫布、參數欄、按鈕）/右輸出（流道圖、12 個結果欄、3D mesh 行為列），顏色/比例遵循 INITIAL 描述。
- JS：畫布繪製 9x3 節點、拖曳/點擊選線，前端驗證（自下而上、每列 ≤2 點），狀態儲存。
- API 串接：Generate→顯示流道圖；Predict→填入 12 欄位；Mesh→觸發下載或顯示成功訊息。
- 錯誤提示：以 toast/modal/區塊顯示 API 錯誤訊息。

## Out-of-Scope
- 使用前端框架或打包工具（React/Vite 等）。
- 真正 3D 互動檢視器（可僅提供下載連結/狀態）。
- 多語系切換。

## Acceptance Criteria
- 瀏覽 `http://127.0.0.1:8000/` 看到左右欄版面、按鈕配色與描述符合 INITIAL。
- 9x3 點選遵守順序與每列限制；違規會在前端提示且不送出。
- API 回應的流道圖能顯示；預測 12 值填入對應欄位；Mesh 呼叫後能下載或得到成功提示。
- 手機寬度下（<=768px）版面可縱向堆疊但仍可操作。

## Implementation Steps
1. 編寫 `index.html`：建立主要區塊（標題、左右欄、按鈕列、結果表格、mesh 按鈕/下載區）。
2. 撰寫 `styles.css`：設定背景 `#f5f5f5`、按鈕綠/藍/黃、輸入欄寬度、表格/字體等，加入響應式堆疊。
3. 撰寫 `main.js`：建立 canvas 9x3 點、線段繪製、拖曳預覽、限制判斷；維護 state。
4. 串接 API：`fetch` 呼叫 `/api/flow/generate`、`/api/predict`、`/api/mesh`；處理 base64 圖顯示與錯誤提示。
5. 增加 UI 提示（loading/錯誤/成功），確保操作順序（無流道不可預測，無 mesh 回應不可下載）。

## Test/Validation
- 手動：啟動 `uvicorn backend.main:app --reload`，完成一輪點選→生成→預測→mesh 下載，核對顏色/佈局/提示。
- 簡易瀏覽器檢查：F12 查看 JS 錯誤需為 0。

## Git Commit Message
Build web UI
