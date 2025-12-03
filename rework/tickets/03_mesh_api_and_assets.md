## Summary
提供 3D Mesh 生成與 STL 輸出 API，重用 `MeshGenerator3D`，並在無 GUI 環境下處理切片與孔位座標，回傳檔案或 base64。

## Why
Web 端需能直接下載/取得 STL；後端必須與 Tk/Vispy 解耦，確保 headless 可用並回應缺檔錯誤。

## Scope
- 建立 `/api/mesh`（POST）：輸入可含流道座標或模板旗標，選填 inlet/outlet 座標；回傳 STL（檔案下載或 base64）。
- 封裝 `MeshGenerator3D` 為服務：避免載入 GUI viewer；僅使用影像/voxel 路徑。
- 若無流道圖：允許使用模板切片；缺少必要檔回傳 500 並帶明確訊息。
- 測試覆蓋：使用假資料/暫存檔驗證成功路徑與缺檔錯誤。

## Out-of-Scope
- 前端 mesh 檢視器與樣式。
- 進階 STL 後處理/壓縮。
- 長時間任務排程/佇列。

## Acceptance Criteria
- `/api/mesh` 可在提供流道 base64 或指示使用模板時生成 STL，回傳下載路徑或 base64。
- 缺少模板檔或輸入錯誤時回 500/400 並含錯誤原因。
- Mesh 生成路徑不依賴 Tk/Vispy（headless 可執行）。
- 測試檔 `tests/api/test_mesh.py` 通過。

## Implementation Steps
1. 在後端新增 mesh 服務模組：包裝 `MeshGenerator3D`，確保不初始化 Vispy/Tk viewer。
2. 設計 `/api/mesh` 請求 schema（使用模板或 base64 圖；可含 inlet/outlet 坐標）。
3. 生成 mesh 後以 `StreamingResponse` 提供 STL 或回傳 base64 + metadata（體積等）。
4. 錯誤處理：缺檔、生成失敗、無效輸入皆回應明確訊息。
5. 新增測試：成功生成（可用簡化假圖）、缺檔時回錯、驗證回傳型態。

## Test/Validation
- `python -m pytest tests/api/test_mesh.py`

## Git Commit Message
Expose mesh generation API
