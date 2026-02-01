import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e) => {
        setIsHovering(e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button'));
    };
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Horizontal Line */}
      <motion.div
        className="fixed top-0 left-0 bg-cyan-400 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y,
          width: 20,
          height: 1,
          rotate: isHovering ? 90 : 0, // Rotates to a vertical line on hover
          scale: isHovering ? 1.5 : 1
        }}
        transition={{ duration: 0.1 }}
      />
      {/* Vertical Line */}
      <motion.div
        className="fixed top-0 left-0 bg-cyan-400 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y - 10,
          width: 1,
          height: 20,
          rotate: isHovering ? 90 : 0, // Rotates to horizontal on hover
          scale: isHovering ? 1.5 : 1
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};

export default Cursor;