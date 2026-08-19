"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  const mouseCoords = useRef({ x: 0, y: 0 });
  const followerCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canUseCustomCursor =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!canUseCustomCursor) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const handleMouseMove = (event) => {
      mouseCoords.current.x = event.clientX;
      mouseCoords.current.y = event.clientY;

      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    };

    const isInteractive = (target) =>
      target instanceof Element &&
      Boolean(
        target.closest(
          "a, button, input, textarea, select, [role='button'], .clickable"
        )
      );

    const handleMouseOver = (event) => {
      if (isInteractive(event.target)) {
        cursor.classList.add("active");
        follower.classList.add("active");
      }
    };

    const handleMouseOut = (event) => {
      if (isInteractive(event.target)) {
        cursor.classList.remove("active");
        follower.classList.remove("active");
      }
    };

    let frameId;

    const renderLoop = () => {
      followerCoords.current.x +=
        (mouseCoords.current.x - followerCoords.current.x) / 9;

      followerCoords.current.y +=
        (mouseCoords.current.y - followerCoords.current.y) / 9;

      follower.style.left = `${followerCoords.current.x - 15}px`;
      follower.style.top = `${followerCoords.current.y - 15}px`;

      frameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    frameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);

      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @media (hover: hover) and (pointer: fine) {
          body,
          a,
          button,
          input,
          select,
          textarea {
            cursor: none !important;
          }

          .cursor-dot {
            position: fixed;
            left: 0;
            top: 0;
            width: 9px;
            height: 9px;
            margin-left: -4.5px;
            margin-top: -4.5px;
            border-radius: 9999px;
            background: #ffffff;
            box-shadow:
              0 0 8px rgba(255, 255, 255, 0.75),
              0 0 18px rgba(212, 175, 55, 0.3);
            pointer-events: none;
            z-index: 99999;
            transform: scale(1);
            transition:
              transform 0.3s ease,
              background 0.25s ease,
              box-shadow 0.25s ease;
          }

          .cursor-dot.active {
            transform: scale(0);
          }

          .cursor-ring {
            position: fixed;
            left: 0;
            top: 0;
            width: 30px;
            height: 30px;
            border: 1px solid rgba(255, 255, 255, 0.8);
            border-radius: 9999px;
            pointer-events: none;
            z-index: 99999;
            transform: scale(1);
            background: rgba(255, 255, 255, 0);
            box-shadow: 0 0 14px rgba(255, 255, 255, 0.12);
            transition:
              transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275),
              background 0.3s ease,
              border-color 0.3s ease,
              box-shadow 0.3s ease;
          }

          .cursor-ring.active {
            transform: scale(2.4);
            border-color: rgba(230, 193, 90, 0.95);
            background: rgba(230, 193, 90, 0.08);
            box-shadow:
              0 0 18px rgba(230, 193, 90, 0.18),
              0 0 35px rgba(230, 193, 90, 0.08);
          }
        }
      `}</style>

      <div
        ref={cursorRef}
        className="cursor-dot"
        aria-hidden="true"
      />

      <div
        ref={followerRef}
        className="cursor-ring"
        aria-hidden="true"
      />
    </>
  );
}