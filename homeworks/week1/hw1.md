## 交作業流程

***


1. 新開一個 branch ： `git branch week1`
2. 切換到新的 branch ： `git checkout week1`
3. 開始寫作業
4. 將作業檔案加入版本控制 ： `git add .`
5. 建立一個新的版本 ： `git commit -am "week1 作業完成"`
6. 從本地上傳到 GitHub ： `git push origin week1`
7. 到 GitHub 之後，進入自己的 repository 發起 `pull request`
8. 到 [學習系統](https://learning.lidemy.com)，進入`作業列表`，點選 `新增作業`
9. 將 pull request 的連結貼上，確認訊息並且勾選後送出。
- [x] 確認已經檢查過作業，有完成需求
- [x] 確認已經看過當週的自我檢討並修正錯誤
10. 等待助教批改。
 > 等助教改完作業且 **merge** 後
11. 將本地 Git 切換到 master： `git checkout master`
12. 抓 github 上新的改動 ：`git pull origin master`
13. 刪除已被 merge 的 branch ： `git branch -d week1`