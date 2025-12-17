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
    // トグルボタンのテキスト
    const texts = {
      open: "🚅 新幹線運行情報",
      close: "🚅 新幹線運行情報",
    };

    // ブラウザのローカルストレージから新幹線バナーの表示状態を取得
    // ローカルストレージに "shinkansenBanner" が "false" として保存されていない場合、バナーは表示状態（true）
    let isOpen = localStorage.getItem("shinkansenBanner") !== "false";

    // 状態更新を一元化
    const updateState = () => {
      content.style.maxHeight = isOpen ? content.scrollHeight + "px" : "0";
      btn.innerHTML = isOpen ? texts.open : texts.close;
      localStorage.setItem("shinkansenBanner", isOpen);
    };

    updateState(); // 初期状態を反映

    btn.addEventListener("click", () => {
      isOpen = !isOpen;
      updateState();
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
