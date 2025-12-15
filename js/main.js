// 新幹線トグルロジック & Iframeリサイザー & 画像フォールバック
document.addEventListener("DOMContentLoaded", () => {
  // Iframeのスケーリングロジック
  function resizeIframe() {
    const e = document.getElementById("shinkansen-iframe");
    if (e) {
      const t = e.parentElement;
      const s = t?.clientWidth || 700;
      const n = Math.min(s / 700, 1);
      e.style.transform = `scale(${n})`;
      e.style.transformOrigin = "top center";
      if (t) t.style.height = `${1400 * n}px`;
    }
  }

  // トグルロジック
  const btn = document.getElementById("toggle-btn");
  const content = document.getElementById("shinkansen-content");

  if (btn && content) {
    let isOpen = false;

    btn.addEventListener("click", () => {
      isOpen = !isOpen;
      // 三項演算子によるボタンテキストとコンテンツの表示を切替
      btn.innerHTML = isOpen
        ? "🚅 新幹線運行情報<br>（タップで閉じる）"
        : "🚅 新幹線運行情報<br>（タップで開く）";
      content.style.maxHeight = isOpen ? content.scrollHeight + "px" : "0";
    });

    resizeIframe();
    window.addEventListener("resize", resizeIframe);
  }

  // 画像フォールバックロジック
  document.querySelectorAll("img[data-fallback]").forEach((img) => {
    img.addEventListener("error", function () {
      this.src = this.dataset.fallback;
    });
  });

  // ビュー切り替えロジック
  const listBtn = document.getElementById("view-toggle-list");
  const gridBtn = document.getElementById("view-toggle-grid");
  const cameraGrid = document.querySelector(".camera-grid");

  if (listBtn && gridBtn && cameraGrid) {
    // 初期状態をlocalStorageから復元
    const savedViewMode = localStorage.getItem("cameraViewMode") || "list";
    applyViewMode(savedViewMode);

    // ボタンクリックハンドラ
    listBtn.addEventListener("click", () => {
      applyViewMode("list");
      localStorage.setItem("cameraViewMode", "list");
    });

    gridBtn.addEventListener("click", () => {
      applyViewMode("grid");
      localStorage.setItem("cameraViewMode", "grid");
    });
  }

  function applyViewMode(mode) {
    if (mode === "list") {
      cameraGrid.classList.remove("grid-mode");
      listBtn.classList.add("view-toggle-active");
      gridBtn.classList.remove("view-toggle-active");
    } else if (mode === "grid") {
      cameraGrid.classList.add("grid-mode");
      listBtn.classList.remove("view-toggle-active");
      gridBtn.classList.add("view-toggle-active");
    }
  }
});
