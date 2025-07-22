import { useState } from "react";
import RenderCounter from "./RenderCounter";
import Message from "./Message";

const RenderingTest: React.FC = () => {
  const [value, setValue] = useState("");

  return (
    <RenderCounter name="RenderingTest 컴포넌트">
      <>
        <h2>실험 1: 인라인 텍스트 vs 컴포넌트</h2>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="input1">텍스트 입력:</label>
          <input
            id="input1"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </div>

        <h3>케이스 1: 인라인 텍스트</h3>
        <RenderCounter name="인라인 p 태그">
          <p>안녕하세요! 저는 인라인 p 태그입니다.</p>
        </RenderCounter>

        <h3>케이스 2: Message 컴포넌트</h3>
        <Message />
      </>
    </RenderCounter>
  );
};

export default RenderingTest;
