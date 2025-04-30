/**
 * React에서 DOM 이벤트 리스너를 등록하고 해제하는 전통적인 방식의 한계 실험
 */

// 1. 단일 이벤트 리스너 등록 및 해제
function setupSingleEventListener() {
  const button = document.createElement("button");
  button.textContent = "Click Me (Single EventListener)";
  document.body.appendChild(button);

  const handleClick = () => {
    console.log("Button clicked!");
  };

  button.addEventListener("click", handleClick);

  // cleanup
  return () => {
    button.removeEventListener("click", handleClick);
    document.body.removeChild(button);
  };
}

// 2. 여러 이벤트 리스너 등록 및 해제
function setupMultipleEventListeners() {
  const div = document.createElement("div");
  div.style.width = "200px";
  div.style.height = "200px";
  div.style.backgroundColor = "lightblue";
  div.textContent = "Hover and Click Me (Multiple EventListener)";
  document.body.appendChild(div);

  // 이벤트 핸들러 정의
  const handleClick = () => {
    console.log("Div clicked!");
  };

  const handleMouseEnter = () => {
    console.log("Mouse entered!");
    div.style.backgroundColor = "red";
  };

  const handleMouseLeave = () => {
    console.log("Mouse left!");
    div.style.backgroundColor = "lightblue";
  };

  const handleKeyDown = (e) => {
    console.log("Key pressed:", e.key);
  };

  // 이벤트 리스너 등록
  div.addEventListener("click", handleClick);
  div.addEventListener("mouseenter", handleMouseEnter);
  div.addEventListener("mouseleave", handleMouseLeave);
  document.addEventListener("keydown", handleKeyDown);

  // cleanup
  return () => {
    div.removeEventListener("click", handleClick);
    div.removeEventListener("mouseenter", handleMouseEnter);
    div.removeEventListener("mouseleave", handleMouseLeave);
    document.removeEventListener("keydown", handleKeyDown);
    document.body.removeChild(div);
  };
}

console.log("=== 단일 이벤트 리스너 실험 ===");
const cleanupSingle = setupSingleEventListener();
setTimeout(() => {
  cleanupSingle();
  console.log("단일 이벤트 리스너 정리 완료");
}, 2000);

console.log("\n=== 여러 이벤트 리스너 실험 ===");
const cleanupMultiple = setupMultipleEventListeners();
setTimeout(() => {
  cleanupMultiple();
  console.log("여러 이벤트 리스너 정리 완료");
}, 4000);
