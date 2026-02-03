import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Track mouse position
    const mouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    // Track hovering over links/buttons
    const handleMouseOver = (e) => {
        const target = e.target;
        // Check if the element is clickable (or inside a clickable element)
        const isLink = target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button');
        setIsHovering(isLink);
    };

    // Track clicking
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* 1. The Dot (INSTANT MOVEMENT) 
          This uses direct CSS positioning to ensure ZERO lag. 
      */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ 
            left: mousePosition.x, 
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)' // Center the dot on the cursor tip
        }}
      />

      {/* 2. The Ring (SMOOTH FOLLOW) 
          This follows slightly behind to create the "elegance" effect.
      */}
      <Motion.div
        className="fixed top-0 left-0 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: mousePosition.x - 20, // Center based on width (40px / 2)
          y: mousePosition.y - 20,
          width: 40,
          height: 40,
          scale: isClicking ? 0.8 : (isHovering ? 1.5 : 1), // Shrink on click, Grow on hover
          backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "transparent", // Fill white on hover
          borderColor: isHovering ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.5)", // Hide border on hover
        }}
        transition={{
            type: "spring",
            stiffness: 300, // High stiffness = faster catch-up
            damping: 20     // Lower damping = slight bounce
        }}
      />
    </>
  );
};

export default Cursor;