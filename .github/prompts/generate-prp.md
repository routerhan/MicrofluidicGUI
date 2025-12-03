# 建立 PRP 與細部工單拆解 (Create PRP & Rework Tickets)

## 輸入參數
Feature file: $ARGUMENTS (請讀取指定的 Feature 檔案或需求描述)

## 任務目標
生成一份包含詳盡研究的 PRP (Product Requirements Plan)，並基於該計畫將任務拆解為一系列細小、易於測試且可執行的 Markdown 工單 (Tickets)。

目標是透過提供完整的上下文 (Context) 給 AI Agent，實現**一次性通過 (One-pass implementation success)**。

---

## 第一階段：研究與分析 (Research Process)

在開始撰寫任何工單之前，請先執行以下研究步驟：

1.  **程式碼庫分析 (Codebase Analysis)**
    * 搜尋程式碼庫中相似的功能或模式 (Pattern)。
    * 識別需要參考的檔案和現有的命名/編碼規範。
    * 檢查現有的測試模式，以確定驗證策略。

2.  **外部研究 (External Research)**
    * 搜尋相關的 Library 文件 (必須包含具體 URL)。
    * 尋找 GitHub/StackOverflow 上的實作範例。
    * 確認最佳實踐 (Best practices) 與常見陷阱 (Common pitfalls)。

3.  **整合關鍵上下文 (Critical Context Integration)**
    * **文件**: 相關技術文件的具體章節 URL。
    * **程式碼範例**: 來自現有程式碼庫的真實片段。
    * **注意事項 (Gotchas)**: 庫的怪癖、版本問題等。

---

## 第二階段：策略規劃 (Strategy & Blueprint)

***** CRITICAL: 在研究完成後，請先進行深度思考 (Ultrathink) 規劃整體架構，再開始生成工單。 *****

你需要規劃：
1.  **實作藍圖**: 使用虛擬碼 (Pseudocode) 展示核心邏輯。
2.  **錯誤處理策略**: 定義如何處理邊緣情況。
3.  **驗證閘門 (Validation Gates)**: 定義全域的測試指令 (如 Python 的 `ruff`, `pytest` 等)。

---

## 第三階段：工單生成 (Ticket Generation)

基於上述研究，將任務拆解為位於 `rework/tickets/` 資料夾中的多個 Markdown 檔案。
**原則**: 每個 Ticket 必須是「小的 (Small)」、「易於測試的 (Easy-to-test)」且「可執行的 (Actionable)」。

### 每個 Ticket 必須包含以下 8 點結構：

1.  **Summary (摘要)**: 簡述此 Ticket 要完成的任務。
2.  **Why (原因)**: 為何需要做這個？與大目標的關聯為何？
3.  **Scope (範圍)**: 明確定義要做什麼。
4.  **Out-of-Scope (範圍外)**: 明確定義**不**做什麼（避免 Scope Creep）。
5.  **Acceptance Criteria (驗收標準)**: 完成的具體條件。
6.  **Implementation Steps (實作步驟)**: 詳細的步驟清單。
7.  **Test/Validation (測試/驗證)**: 
    * 具體可執行的指令 (例如: `uv run pytest tests/specific_test.py`)。
    * 如果是 UI，描述如何視覺驗證。
8.  **Git Commit Message**: 少於 15 個字的 Commit 訊息。

---

## 輸出要求 (Output)

1.  **PRP 總表**: 存為 `PRPs/{feature-name}.md`，包含研究摘要、上下文與相應的 Ticket 工單列表。
2.  **工單檔案**: 存為 `rework/tickets/01_task_name.md`, `rework/tickets/02_task_name.md` 等順序檔案。

## 品質檢查清單 (Quality Checklist)
- [ ] 是否包含所有必要的上下文與文件連結？
- [ ] 驗證閘門 (Validation Gates) 是否是 AI 可直接執行的指令？
- [ ] 是否參考了現有的程式碼模式？
- [ ] 每個 Ticket 是否夠小且獨立？
- [ ] 錯誤處理是否已定義？

最後，請以 1-10 分為這份計畫評分（基於 AI Agent 一次性成功實作的信心程度）。