// Service Worker 登録
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      /* Enable logging if needed
      .then((registration) => {
        console.log(
          "Service Worker 登録成功。スコープ:",
          registration.scope
        );
      })
      .catch((error) => {
        console.log("Service Worker 登録失敗:", error);
      });
      */
  });
}