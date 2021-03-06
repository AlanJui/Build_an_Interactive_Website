# 專案摘要說明

本專案以 `Code School` 的 Screencasts 教程 [《Build an Interactive Website》](https://www.codeschool.com/screencasts/build-an-interactive-website-part-1) 為基底，進行實作。

對於課程中的 jQuery Scripts 實作，添加與「JSPM」之整合運用，嚐試練習 JSPM 在「開發」與「發行」之各種操作。

## 準備式

作業的平台須先完成以下軟體安裝：

 * git
 * node
 * npm
 * npm 模組 - http-server (以「Global」模式安裝)
 
## 開發作業

 1. 自 GitHub 下載及安裝作業
 
    ```
    $ git clone git@github.com:AlanJui/Build_an_Interactive_Website.git
    
    $ cd Build_an_Interactive_Website
    
    $ npm install
    
    $ jspm install
    
    ```
     
 2. 執行作業
 
    (1) 啟動 Web Server
    
    ```
    $ npm start
    ```  
    
    (2) 瀏覽輸出結果 
    
    使用瀏覽器器，以 URL： http://localhost:3000/ 觀看網頁輸出。
    
## 發行作業

 1. 將 JavaScript 檔案打包
 
    將 jQuery.js 檔案，本專案產出的： lib/bootstrap.js, app.js 包裝成一個單獨的 `build.js` 檔案，並放入 `./dist` 目錄之中。  
 
    ```
    $ mkdir dist
    
    $ npm run dist
    ```    
    
    **【註】**： 若是執行 **npm run dist-min** 指令，則輸出的 build.js 檔案，會對其 JavaScript 進行壓縮（minify）。
    
 2. 包裝首頁檔案及樣式檔案
 
    將專案的 index.hml, normalize.css, main.css 檔案，複製到 `./dist` 目錄之中。
 
    ```
    $ cp index.html *.css dist/    
    ```    
    
 3. 變更首頁須載入的 JavaScript 檔案
 
    變更 `./dist/index.html` 檔案的內容，使其 JavaScript 僅只載入 `build.js` 檔案。
 
    (1) 原 index.html 以下的內容，標示成註解（亦可將之刪除）：
    
    ```
    <!-- Development -->
    <script src="jspm_packages/system.js"></script>
    <script src="config.js"></script>
    <script>
      System.import('app.js');
    </script>
    <!-- Development End -->
    ```
    
    (2) 如下所示之內容，將： `<!--<script src="build.js"></script>-->` 這行的註解去除。

    ```    
    <!-- Production -->
    <!--<script src="build.js"></script>-->
    <!-- Production End -->    
    ```
    
    變更最終的結果：
    
    ```
    <!-- Development -->
    <!--<script src="jspm_packages/system.js"></script>-->
    <!--<script src="config.js"></script>-->
    <!--<script>-->
    <!--  System.import('app.js');-->
    <!--</script>-->
    <!-- Development End -->
    
    <!-- Production -->
    <script src="build.js"></script>
    <!-- Production End -->
    ```
    
 4. 試行及驗證結果
 
    「發行作業」中的第 1 至 第 3 步驟，屬「打包作業」。
    
    當「打包作業」完成後，在 `dist` 目錄中，應有如下檔案：
    
     * index.html (只載入：build.js)
     * build.js
     * normalize.css
     * main.css 
 
    (1) 啟動 Web Server
    
    ```
    $ npm run dist
    ```  
    
    (2) 瀏覽輸出結果
    
    使用瀏覽器器，以 URL： http://localhost:8080/ 觀看網頁輸出。
 
       
    
## 參考資訊

### Code School 原始程式範例

https://github.com/codeschool/FrontEndNewsScreencast    