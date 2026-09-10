"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: PointerEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("pointermove", moveCursor);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[999999]"
      style={{
        left: "0px",
        top: "0px",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Outer circle */}
      <div
        className="w-8 h-8 rounded-full border-2"
        style={{
          borderColor: "#8B5E3C",
        }}
      />

      {/* Center dot */}
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