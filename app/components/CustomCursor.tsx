"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[99999]"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Outer brown circle */}
      <div
        className="w-8 h-8 rounded-full border-2"
        style={{
          borderColor: "#8B5E3C",
        }}
      />

      {/* Center brown dot */}
      <div
        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
        style={{
          backgroundColor: "#8B5E3C",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}