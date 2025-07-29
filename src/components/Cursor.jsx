import React, { useEffect, useState } from "react";

const Cursor = ({ hoveredImage }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {hoveredImage ? (
        <img
          src={hoveredImage}
          alt="cursor preview"
          style={{
            position: "fixed",
            top: position.y,
            left: position.x,
            transform: "translate(-50%, -50%)",
            width: 40,
            height: 40,
            pointerEvents: "none",
            zIndex: 9999,
            userSelect: "none",
            borderRadius: "8px",
          }}
          draggable={false}
        />
      ) : (
        <div
          style={{
            position: "fixed",
            top: position.y,
            left: position.x,
            transform: "translate(-50%, -50%)",
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "limegreen",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        />
      )}
    </>
  );
};

export default Cursor;






