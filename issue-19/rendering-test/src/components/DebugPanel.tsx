import React, { useState, useEffect } from "react";

interface DebugPanelProps {
  title: string;
  children: React.ReactNode;
}

const DebugPanel: React.FC<DebugPanelProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount((prev) => prev + 1);
  });

  return (
    <div
      style={{
        border: "1px solid #ccc",
        margin: "10px 0",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          padding: "10px",
          backgroundColor: "#f8f9fa",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={{ fontWeight: "bold" }}>{title}</span>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              fontSize: "12px",
              color: "#666",
              backgroundColor: "#e9ecef",
              padding: "2px 6px",
              borderRadius: "3px",
            }}
          >
            렌더링: {renderCount}회
          </span>
          <span>{isOpen ? "▼" : "▶"}</span>
        </div>
      </div>

      {isOpen && <div style={{ padding: "10px" }}>{children}</div>}
    </div>
  );
};

export default DebugPanel;
