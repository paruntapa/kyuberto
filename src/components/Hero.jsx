import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="px-4 md:mt-[0%] md:px-0">
      <div
        id="start"
        className="z-10 grid md:grid-cols-2 gap-6 text-center mt-10 md:mt-35 md:m-10"
        style={{ fontFamily: "PP" }}
      >
        <div
          id="pratham"
          className="z-10 md:relative flex flex-col md:flex-row justify-center items-center md:ml-[13%] p-6 md:p-10 min-h-[70vh] w-full md:w-[80vw] text-3xl md:text-9xl "
        >
          <motion.span className=" absolute left-28 md:left-10 text-left md:text-left">
            <motion.span
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 1, ease: "easeInOut" }}
            >
              We {" "}
            </motion.span>

            <motion.span
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeInOut" }}
            >
              are {" "} 
            </motion.span>

            <motion.span
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
            >
              a {" "}
            </motion.span>

            <motion.span
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 1, ease: "easeInOut" }}
            >
              digital
            </motion.span>

            <br />
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-4">
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 1, ease: "easeInOut" }}
                className="mb-4 md:mb-0"
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
              </motion.span>
              <span className="text-center md:text-left">
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 1, ease: "easeInOut" }}
                  className="font-extralight"
                  style={{ fontFamily: "RO" }}
                >
                  design {" "}
                </motion.span>
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                >
                  and
                </motion.span>
              </span>
            </div>
            <motion.span
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
              className="block text-center md:text-left"
            >
              motion agency
            </motion.span>
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
