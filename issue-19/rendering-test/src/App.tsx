import { useState } from "react";
import AdvancedRenderingTest from "./components/AdvancedRenderingTest";
import RenderingTest from "./components/RenderingTest";

const modes = ["MODE_SETUP", "RENDERING_TEST", "ADVANCED_RENDERING_TEST"];

function App() {
  const [mode, setMode] = useState(modes[0]);

  return (
    <div className="app">
      <h1>React 리렌더링 실험</h1>
      <p>React 컴포넌트의 리렌더링 메커니즘을 실험해보세요!</p>

      <div>
        <button onClick={() => setMode(modes[0])}>모드 설정</button>
        <button onClick={() => setMode(modes[1])}>기본 실험</button>
        <button onClick={() => setMode(modes[2])}>고급 실험</button>
      </div>
      <hr style={{ margin: "40px 0", border: "1px solid #ddd" }} />
      {mode === "RENDERING_TEST" && <RenderingTest />}
      {mode === "ADVANCED_RENDERING_TEST" && <AdvancedRenderingTest />}
    </div>
  );
}

export default App;
