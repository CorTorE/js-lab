import React, { useState, useMemo } from "react";
import RenderCounter from "./RenderCounter";

// 메모이제이션된 컴포넌트
const MemoizedMessage = React.memo(() => {
  return (
    <RenderCounter name="MemoizedMessage 컴포넌트">
      <p>저는 React.memo로 메모이제이션된 컴포넌트입니다!</p>
    </RenderCounter>
  );
});

// 일반 컴포넌트
const RegularMessage = () => {
  return (
    <RenderCounter name="RegularMessage 컴포넌트">
      <p>저는 일반 컴포넌트입니다.</p>
    </RenderCounter>
  );
};

// props를 받는 컴포넌트
const PropsMessage = React.memo(({ message }: { message: string }) => {
  return (
    <RenderCounter name="PropsMessage 컴포넌트">
      <p>메시지: {message}</p>
    </RenderCounter>
  );
});

const AdvancedRenderingTest: React.FC = () => {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  // useMemo로 메모이제이션된 값
  const memoizedValue = useMemo(() => {
    console.log("메모이제이션된 값 계산");
    return `계산된 값: ${count * 2}`;
  }, [count]);

  return (
    <RenderCounter name="AdvancedRenderingTest 컴포넌트">
      <>
        <h2>실험 2: 고급 리렌더링 최적화</h2>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="input2">텍스트 입력:</label>
          <input
            id="input2"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => setCount((c) => c + 1)}>
            카운트 증가: {count}
          </button>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <p>
            <strong>메모이제이션된 값:</strong> {memoizedValue}
          </p>
        </div>

        <h3>케이스 1: React.memo로 메모이제이션된 컴포넌트</h3>
        <MemoizedMessage />

        <h3>케이스 2: 일반 컴포넌트</h3>
        <RegularMessage />

        <h3>케이스 3: props를 받는 메모이제이션된 컴포넌트</h3>
        <PropsMessage message={value} />
      </>
    </RenderCounter>
  );
};

export default AdvancedRenderingTest;
