"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* Spotlight Glow Effect */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-40 w-[600px] h-[600px] rounded-full hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(29, 78, 216, 0.12), transparent 60%)",
        }}
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />

      {/* Main Cursor Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] rounded-full mix-blend-difference hidden md:block"
        style={{
          backgroundColor: "white",
          width: 12,
          height: 12,
          boxShadow: "0 0 10px rgba(255,255,255,0.8)",
        }}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
}
