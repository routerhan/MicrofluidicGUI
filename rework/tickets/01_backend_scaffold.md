## Summary
建立 FastAPI 後端腳手架，設定靜態檔路由、CORS、健康檢查與 headless 視覺化設定，為後續流道/預測/mesh API 提供基礎。

## Why
Web 版需要 HTTP 服務與靜態資源託管；先鋪好結構與環境設定，後續功能可直接接入，降低耦合與部署風險。

## Scope
- 新增 `backend/` 模組與 `main.py`，掛載 FastAPI、健康檢查路由 `/health`。
- 掛載 `/static` 服務前端檔案（目前可放佔位 HTML/JS/CSS）。
- 加入 CORS 設定（暫開放本機/origin 白名單）。
- 設定 Matplotlib 為 `Agg`，避免無顯示環境錯誤。
- 更新需求清單（`requirements.txt` 或額外檔）含 `fastapi`, `uvicorn`.

## Out-of-Scope
- 不實作流道/預測/mesh 功能。
- 不處理模型檔/切片檔驗證。
- 不設計前端最終 UI（僅佔位）。

## Acceptance Criteria
- 可執行 `uvicorn backend.main:app --reload`；`/health` 回傳 200 JSON。
- `/static` 能回傳佔位頁面或資源。
- Matplotlib 後端在啟動時已切換至 Agg（無 GUI 環境不拋錯）。
- 新增依賴清單與目錄結構完成。

## Implementation Steps
1. 新增 `backend/`（含 `__init__.py`）與 `backend/main.py`，啟動時呼叫 `matplotlib.use("Agg")`。
2. 在 `main.py` 建立 FastAPI app，加入 CORS 中介（允許本機 origin）。
3. 掛載 `/health` GET 路由回傳 `{"status":"ok"}`。
4. 掛載靜態檔（如 `StaticFiles(directory="static")`），提供基本 `index.html` 佔位。
5. 更新 `requirements.txt`（或新檔）加入 `fastapi`, `uvicorn[standard]`。

## Test/Validation
- `python -m compileall backend`
- `uvicorn backend.main:app --reload` 後 `curl http://127.0.0.1:8000/health` 回 200。

## Git Commit Message
Setup FastAPI scaffold
