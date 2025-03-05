"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxRow({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const containerRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    const updateContentWidth = () => {
      if (containerRef.current) {
        setContentWidth(containerRef.current.scrollWidth / 2); // Half of the repeated width
      }
    };

    updateContentWidth();
    window.addEventListener("resize", updateContentWidth);
    return () => window.removeEventListener("resize", updateContentWidth);
  }, []);

  const x = useTransform(baseX, (v) => `${wrap(-contentWidth, 0, v)}px`);

  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1; // Reverse direction when scrolling up
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1; // Move forward when scrolling down
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <motion.div
        className="flex items-center gap-12 whitespace-nowrap"
        style={{ x }}
      >
        {/* Duplicate content for seamless looping */}
        <div className="flex items-center gap-12">{children}</div>
        <div className="flex items-center gap-12">{children}</div>
      </motion.div>
    </div>
  );
}

export function VelocityScroll({
  defaultVelocity = 20,
  numRows = 1,
  children,
  className,
  ...props
}) {
  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      {...props}
    >
      {Array.from({ length: numRows }).map((_, i) => (
        <ParallaxRow
          key={i}
          baseVelocity={defaultVelocity * (i % 2 === 0 ? 1 : -1)}
        >
          {children}
        </ParallaxRow>
      ))}
    </div>
  );
}
