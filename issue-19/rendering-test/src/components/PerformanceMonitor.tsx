import React, { useEffect, useRef } from "react";

interface PerformanceMonitorProps {
  name: string;
  children: React.ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  name,
  children,
}) => {
  const renderStartTime = useRef<number>(0);
  const renderCount = useRef<number>(0);

  useEffect(() => {
    renderCount.current += 1;
    const renderTime = performance.now() - renderStartTime.current;
    console.log(
      `⏱️ ${name} 렌더링 시간: ${renderTime.toFixed(2)}ms (총 ${
        renderCount.current
      }회)`
    );
  });

  // 렌더링 시작 시간 기록
  renderStartTime.current = performance.now();

  return (
    <div
      style={{
        border: "2px solid #28a745",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "5px",
        backgroundColor: "#f8fff9",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          color: "#28a745",
          marginBottom: "5px",
          fontWeight: "bold",
        }}
      >
        {name} (성능 모니터링)
      </div>
      {children}
    </div>
  );
};

export default PerformanceMonitor;
