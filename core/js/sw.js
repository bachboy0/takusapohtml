// PWAとして認識させるための最低限のService Worker
self.addEventListener("fetch", function (event) {
  // ここにオフラインキャッシュ処理などを記述できますが、
  // 「アプリをインストール」を表示させるだけなら、空のfetchリスナーがあれば動作します。
});
