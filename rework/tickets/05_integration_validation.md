## Summary
整合驗證與文件更新：跑完後端測試、手動端到端檢查、更新 README/操作說明與已知限制，確保遷移成果可重現。

## Why
完成功能後需有清晰的驗證流程與文件，方便後續維護與一次性交付。

## Scope
- 撰寫/更新 README 或 `docs/` 說明啟動命令、環境需求、API 概觀、前端使用步驟。
- 整理已知風險（模型檔缺失、GPU/CPU 差異、mesh 耗時）。
- 執行並記錄測試結果（pytest 通過、手動操作紀錄）。
- 若新增腳本（如 `make test` 或 `start.sh` 更新）則補充說明。

## Out-of-Scope
- 新增功能或 UI 變更。
- 部署到雲端/容器化（除非已有既定腳本）。

## Acceptance Criteria
- README/文件包含：啟動後端/前端指令、API 路徑與輸入說明、操作流程（點選→生成→預測→mesh）。
- 測試指令與結果列出；`python -m pytest tests/api` 成功。
- 手動檢查步驟記錄：點選順序、預測回應、mesh 下載成功。
- 已知限制/風險段落列出，涵蓋模型與 headless 需求。

## Implementation Steps
1. 更新 README（或新增文件）列出新啟動指令、API 摘要、前端操作流程與錯誤處理提示。
2. 執行 `python -m pytest tests/api`，記錄結果（含失敗時的備註）。
3. 手動跑一輪 UI（桌面瀏覽器）：截圖或文字記錄流程與結果。
4. 整理已知限制與後續建議，寫入文件。

## Test/Validation
- `python -m pytest tests/api`
- 手動 E2E 操作完成並記錄。

## Git Commit Message
Finalize integration validation
