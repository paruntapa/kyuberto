"use client";

import { useInView, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Dispatch, ReactNode, SetStateAction, useRef } from "react";
import { opacity, slideUpLineInterval, slideUpWordsInterval, scale } from "./framer";

export const AnimateWordSlideUp = (
  {sentence,
  inView,
  speed,
  className}
) => {
  
  return (
    <p className="flex flex-wrap lg:gap-x-5 gap-x-2">
      {sentence.split(" ").map((x, index) => (
        <span key={index} className={`flex overflow-y-hidden overflow-x-visible relative justify-start 2xl:pr-6 xl:pr-5 lg:pr-4 pr-1 ${className}`}>
          <motion.span
            variants={slideUpWordsInterval}
            custom={index + 1 * speed}
            initial="initial"
            animate={inView ? "animate" : "exit"}
          >
            {x}
          </motion.span>
        </span>
      ))}
    </p>
  );
};

export const AnimateScale = ({
  src,
  type = "video/mp4",
  width = 250,
  height = 300,
  className = "",
  inView = true,
  delayIndex = 0,
  loop = true,
  autoPlay = true,
  muted = true,
  preload = "none",
}) => {
  return (
    <motion.span
      variants={scale}
      custom={delayIndex + 4}
      initial="initial"
      animate={inView ? "animate" : "exit"}
      style={{ display: "inline-block" }}
   >
      <video
        loop={loop}
        autoPlay={autoPlay}
        muted={muted}
        width={width}
        height={height}
        className={className}
        preload={preload}
      >
        <source src={src} type={type} />
      </video>
    </motion.span>
  );
};

export const AnimateLettersSlideUp = ({ sentence, inView, speed, className, motionClass }) => {
  const characters = Array.from(sentence ?? "");
  return (
    <span className="inline-flex flex-wrap gap-x-0">
      {characters.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className={`flex overflow-y-hidden overflow-x-visible relative justify-start ${className ?? ""}`}
        >
          <motion.span
            variants={slideUpWordsInterval}
            custom={index + 1 * (speed ?? 1)}
            initial="initial"
            animate={inView ? "animate" : "animate"}
            className={motionClass}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export const AnimateLineSlideUp = (
 { sentence,
  inView,
  speed,}
) => {
  return (
    <p className="flex flex-wrap gap-x-2">
      {sentence.split(" ").map((x, index) => (
        <span key={index} className="flex overflow-y-hidden overflow-x-visible relative justify-start pr-1">
          <motion.span
            variants={slideUpLineInterval}
            custom={index + 1 * speed}
            initial="initial"
            animate={inView ? "animate" : "exit"}
          >
            {x}
          </motion.span>
        </span>
      ))}
    </p>
  );
};

export const AnimateLinkonHover = (
  {link,
  index,
  isOpen,
  setIsOpen,
  title,}
) => {
  const router = useRouter();
  return (
    <p
      key={index}
      onClick={() => {
        setIsOpen(!isOpen);
        router.push(link);
      }}
      className={`flex flex-col group h-10 justify-center overflow-hidden ${
        isOpen ? "hover:cursor-circle" : ""
      }`}
    >
      <span className="-translate-y-5 group-hover:translate-y-5 transition-all duration-200 ease-in">
        {title}
      </span>
      <span className="-translate-y-5 group-hover:translate-y-5 transition-all duration-200 ease-in">
        {title}
      </span>
    </p>
  );
};

export const AnimateSocialLink = (children) => {
  return (
    <div className="flex flex-col h-6 justify-center gap-2 overflow-hidden">
      <span className="-translate-y-4 group-hover:translate-y-4 transition-all duration-200 ease-in">
        {children}
      </span>
      <span className="-translate-y-4 group-hover:translate-y-4 transition-all duration-200 ease-in">
        {children}
      </span>
    </div>
  );
};