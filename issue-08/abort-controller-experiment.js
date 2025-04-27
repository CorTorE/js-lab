/**
 * AbortController를 이용한 signal 기반 구독 해제 방식 실험
 */

// 1. 단일 이벤트 리스너 등록 및 해제
function setupSingleEventListenerWithAbortController() {
  const button = document.createElement("button");
  button.textContent = "Click Me (AbortController)";
  document.body.appendChild(button);

  const controller = new AbortController();
  const { signal } = controller;

  const handleClick = () => {
    console.log("Button clicked (AbortController)!");
  };

  button.addEventListener("click", handleClick, { signal });

  // cleanup
  return () => {
    controller.abort();
    document.body.removeChild(button);
  };
}

// 2. 여러 이벤트 리스너 등록 및 해제
function setupMultipleEventListenersWithAbortController() {
  const div = document.createElement("div");
  div.style.width = "200px";
  div.style.height = "200px";
  div.style.backgroundColor = "lightblue";
  div.textContent = "Hover and Click Me (AbortController)";
  document.body.appendChild(div);

  const controller = new AbortController();
  const { signal } = controller;

  // 이벤트 핸들러 정의
  const handleClick = () => {
    console.log("Div clicked (AbortController)!");
  };

  const handleMouseEnter = () => {
    console.log("Mouse entered (AbortController)!");
    div.style.backgroundColor = "red";
  };

  const handleMouseLeave = () => {
    console.log("Mouse left (AbortController)!");
    div.style.backgroundColor = "lightblue";
  };

  const handleKeyDown = (e) => {
    console.log("Key pressed (AbortController):", e.key);
  };

  // 이벤트 리스너 등록 (signal 옵션 사용)
  div.addEventListener("click", handleClick, { signal });
  div.addEventListener("mouseenter", handleMouseEnter, { signal });
  div.addEventListener("mouseleave", handleMouseLeave, { signal });
  document.addEventListener("keydown", handleKeyDown, { signal });

  // cleanup
  return () => {
    controller.abort();
    document.body.removeChild(div);
  };
}

// 실험 실행
console.log("=== AbortController를 이용한 단일 이벤트 리스너 실험 ===");
const cleanupSingleAbort = setupSingleEventListenerWithAbortController();
setTimeout(() => {
  cleanupSingleAbort();
  console.log("단일 이벤트 리스너 정리 완료 (AbortController)");
}, 2000);

console.log("\n=== AbortController를 이용한 여러 이벤트 리스너 실험 ===");
const cleanupMultipleAbort = setupMultipleEventListenersWithAbortController();
setTimeout(() => {
  cleanupMultipleAbort();
  console.log("여러 이벤트 리스너 정리 완료 (AbortController)");
}, 4000);
