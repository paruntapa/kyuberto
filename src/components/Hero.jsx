import React, { useRef } from "react";
import { motion } from "motion/react";
import { AnimateWordSlideUp } from "./ui/animation";
import { useInView } from "framer-motion";

const Hero = () => {
  const container = useRef(null);

  const inView = useInView(container,  {
    margin: "100px 100px -50px -50px"
  })
  
  return (
    <section ref={container} className="px-4 md:mt-[0%] md:px-0">
      <div
        id="start"
        className="z-10 grid md:grid-cols-2 gap-6 text-center mt-10 md:mt-35 md:m-10"
        style={{ fontFamily: "PP" }}
      >
        <div
          id="pratham"
          className="z-10 md:relative flex flex-col md:flex-row justify-center items-center md:ml-[13%] p-6 md:p-10 min-h-[70vh] w-full md:w-[80vw] text-3xl md:text-9xl "
        >
          <span className=" absolute left-28 md:left-10 text-left md:text-left">
              <AnimateWordSlideUp
              sentence="We are a digital"
              inView={inView}
              speed={1}
              />
            
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between ">
              <span
              >
                <video
                  loop
                  autoPlay
                  muted
                  className="rounded-full w-[140px] h-[100px] md:w-[200px] md:h-[140px]"
                  preload="none"
                >
                  <source src="/videos/1.mp4" type="video/mp4" />
                </video>
              </span>
              <span className="text-center md:text-left">
                <AnimateWordSlideUp
                sentence="and design"
                inView={inView}
                speed={3}
                />
              </span>
            </div>
            <AnimateWordSlideUp
                sentence="motion agency"
                inView={inView}
                speed={6}
                />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
