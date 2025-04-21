const controller = {
  init() {
    // 로컬스토리지 변경 이벤트 리스너 등록
    window.addEventListener("storage", (event) => {
      if (event.key === "theme") {
        // 테마 변경 감지
        const newTheme = event.newValue;
        document.documentElement.setAttribute("data-theme", newTheme);
        this.updateThemeButton(newTheme);
      } else {
        // 기타 로컬스토리지 변경 감지
        view.logStorageEvent(event);
      }
    });

    // 초기 테마 설정
    this.setInitialTheme();

    // 초기 메시지 표시
    view.showInitialMessage();
  },

  setInitialTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateThemeButton(savedTheme);
  },

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    // 테마 변경 및 저장
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    this.updateThemeButton(newTheme);
  },

  updateThemeButton(theme) {
    const button = document.querySelector(".theme-toggle");
    button.textContent = theme === "light" ? "🌙 다크모드" : "☀️ 라이트모드";
  },

  setStorage() {
    const key = model.getStorageKey();
    const value = model.getStorageValue();

    model.setItem(key, value);

    view.log(`현재 탭에서 설정: ${key} = ${value}`);
    view.updateStorageContent();
  },

  removeStorage() {
    const key = model.getStorageKey();

    model.removeItem(key);

    view.log(`현재 탭에서 삭제: ${key}`);
    view.updateStorageContent();
  },
};
