'use client';

import { useEffect, useState } from "react";

export function DynamicBackground() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1) % 200);
    }, 50); // speed control

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -20,
        background: `linear-gradient(120deg, #020617, #0a0f2c, #020617)`,
        backgroundSize: "200% 200%",
        backgroundPosition: `${position}% 50%`,
        transition: "background-position 0.1s linear",
      }}
    />
  );
}
export function GlowOrbs() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -10, overflow: "hidden" }}>

      <div style={{
        position: "absolute",
        width: "400px",
        height: "400px",
        background: "rgba(168,85,247,0.2)",
        borderRadius: "50%",
        filter: "blur(120px)",
        top: "-100px",
        left: "-100px",
        animation: "float1 8s ease-in-out infinite"
      }} />

      <div style={{
        position: "absolute",
        width: "300px",
        height: "300px",
        background: "rgba(34,211,238,0.2)",
        borderRadius: "50%",
        filter: "blur(120px)",
        bottom: "-100px",
        right: "-100px",
        animation: "float2 10s ease-in-out infinite"
      }} />

    </div>
  );
}