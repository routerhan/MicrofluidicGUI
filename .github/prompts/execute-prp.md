# Execute PRP & Rework Tickets (執行 PRP 與工單)

## 輸入參數
PRP File: $ARGUMENTS (指定要執行的 PRP 檔案路徑，例如 `PRPs/feature-name.md`)

## 執行流程 (Execution Process)

### 第一階段：加載與上下文構建 (Load & Context)
1.  **讀取 PRP 主檔**: 詳讀指定的 PRP 檔案，理解全域架構、技術選型、文件連結與驗證閘門 (Validation Gates)。
2.  **掃描工單 (Scan Tickets)**: 讀取 `rework/tickets/` 目錄下的所有 Markdown 檔案，確認執行順序 (01, 02, 03...)。
3.  **補強研究 (Extend Research)**: 如果 PRP 中的 Context 不足以支持實作，請立即進行額外的 Web Search 或程式碼庫檢索，確保在寫扣之前已具備完整知識。

### 第二階段：順序執行工單 (Sequential Ticket Execution)

**請依照檔案順序，對每一個 Ticket 執行以下循環：**

1.  **讀取工單詳情**:
    * 確認 **Scope (範圍)**：明確知道要做什麼。
    * 確認 **Out-of-Scope (範圍外)**：嚴格遵守，不要過度設計。
    * 確認 **Acceptance Criteria (驗收標準)**。

2.  **深度思考 (ULTRATHINK)**:
    * 在寫程式碼之前，先規劃針對此 Ticket 的改動路徑。
    * 參考 PRP 中提到的「現有程式碼模式 (Existing Patterns)」。
    * 利用 Todo 工具 (如 `TodoWrite` 或筆記) 記錄實作步驟。

3.  **實作 (Execute)**:
    * 編寫程式碼以滿足 Ticket 需求。
    * 嚴格遵守 PRP 定義的 Error Handling 策略。

4.  **驗證 (Validate)**:
    * 執行 Ticket 第 7 點定義的 **具體測試指令 (Test/Validation)**。
    * 如果失敗：修復錯誤 -> 重跑測試 (Loop)，直到通過。
    * *注意：如果遇到頑強錯誤，請回頭參考 PRP 中的 "Gotchas" 或進行針對性搜索。*

5.  **提交 (Commit)**:
    * 測試通過後，使用 Ticket 第 8 點定義的 **Git Commit Message** 進行提交。

### 第三階段：全域驗收 (Final Validation)

當所有 Tickets 都執行完畢後：

1.  **全域驗證閘門**: 執行 PRP 主檔中定義的 Validation Gates (例如 `ruff`, `mypy`, 全套 `pytest`)，確保個別工單的修改沒有破壞整體系統。
2.  **完整性檢查**: 重新閱讀 PRP 的 "Implementation Blueprint"，確認所有功能點都已落實。
3.  **報告完成**: 輸出最終報告，列出已完成的 Tickets 和最終測試結果。

---

## 執行守則 (Rules of Engagement)

* **單行道原則**: 不要跳過任何一個 Ticket，必須按順序完成。
* **遇到阻礙**: 如果某個 Ticket 技術上無法執行，請停止並回報，不要強行 Hack。
* **隨時回顧**: 在執行過程中，隨時可以回頭參考主 PRP 檔案以獲取架構層面的指引。

---

### 優化解析

這個版本針對「執行」做了以下優化：

1.  **迴圈式執行 (Loop Structure)**：
    將執行過程明確定義為 `Read -> Think -> Code -> Verify -> Commit` 的迴圈，針對每一個 Ticket 操作。這比 "一次寫完所有代碼" 穩定得多。

2.  **強制邊界檢查**：
    特別強調讀取 `Scope` 和 `Out-of-Scope`，防止 AI 在執行過程中自我發揮，導致 "Scope Creep" (範圍蔓延)。

3.  **原子化提交**：
    利用 Ticket 中預先寫好的 Commit Message，確保 Git log 乾淨且有條理，這對後續 Code Review 非常有幫助。

4.  **雙重驗證機制**：
    * **微觀驗證**：每個 Ticket 做完立刻跑該 Ticket 的特定測試。
    * **宏觀驗證**：全部做完後跑 PRP 的全域測