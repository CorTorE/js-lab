const view = {
  logElement: document.getElementById("log"),
  storageContentElement: document.getElementById("storage-content"),

  log(message) {
    const timestamp = new Date().toLocaleTimeString();
    this.logElement.innerHTML += `[${timestamp}] ${message}<br>`;
    this.logElement.scrollTop = this.logElement.scrollHeight;
  },

  logStorageEvent(event) {
    this.log(`로컬스토리지 변경 감지!`);
    this.log(`키: ${event.key}`);
    this.log(`이전 값: ${event.oldValue}`);
    this.log(`새로운 값: ${event.newValue}`);
    this.log(`변경된 URL: ${event.url}`);
    this.log("-------------------");
    this.updateStorageContent();
  },

  showInitialMessage() {
    this.log("로컬스토리지 변경 감지 대기 중...");
    this.log("다른 탭에서 로컬스토리지를 변경해보세요!");
    this.log("-------------------");
    this.updateStorageContent();
  },

  updateStorageContent() {
    this.storageContentElement.innerHTML = "";

    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i));
    }

    keys.sort(); // 키를 알파벳 순으로 정렬

    // 정렬된 순서대로 항목 표시
    keys.forEach((key) => {
      const value = localStorage.getItem(key);
      const item = document.createElement("div");
      item.className = "storage-item";
      item.innerHTML = `
        <span class="storage-key">${key}:</span>
        <span class="storage-value">${value}</span>
      `;
      this.storageContentElement.appendChild(item);
    });
  },
};
