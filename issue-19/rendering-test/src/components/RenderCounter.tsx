import { useRef, useEffect } from "react";

interface RenderCounterProps {
  name: string;
  children: React.ReactNode;
}

const RenderCounter: React.FC<RenderCounterProps> = ({ name, children }) => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log(`🔄 ${name} 컴포넌트 렌더링 횟수: ${renderCount.current}`);
  });

  return (
    <div
      style={{
        border: "2px solid #007bff",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          color: "#007bff",
          marginBottom: "5px",
          fontWeight: "bold",
        }}
      >
        {name} (렌더링: {renderCount.current}회)
      </div>
      {children}
    </div>
  );
};

export default RenderCounter;
