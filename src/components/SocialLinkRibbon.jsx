"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { VelocityScroll } from "./magicui/scroll-based-velocity";

// eslint-disable-next-line
const SocialLinkRibbon = ({ platform, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full border-y border-white/20 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-full flex justify-between items-center px-6 md:px-20 py-8 font-regular text-xl md:text-3xl text-white relative z-10">
        <h1 className="w-full text-left">{platform}</h1>
        <div className="w-full flex justify-end">{icon}</div>
      </div>

      <motion.div
        className="absolute w-full h-full bg-white text-black top-0 left-0 z-20 flex justify-center items-center"
        initial={{ clipPath: "inset(50% 0 50% 0)" }}
        animate={{
          clipPath: isHovered ? "inset(0% 0 0% 0)" : "inset(50% 0 50% 0)",
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        <VelocityScroll
          className="w-full h-full flex justify-center items-center space-x-20 overflow-hidden"
          numRows={1}
          defaultVelocity={100}
        >
          {/* Duplicating content for smooth infinite scroll */}
          <div className="flex space-x-20">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <span
                  key={index}
                  className="flex justify-center items-center gap-12 text-3xl"
                >
                  {platform} {icon}
                </span>
              ))}
          </div>
        </VelocityScroll>
      </motion.div>
    </div>
  );
};

export default SocialLinkRibbon;
