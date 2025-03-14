import React, { useEffect } from "react";
import { motion } from "motion/react";
import gsap from "gsap";

const Hero = () => {
  // useEffect(()=> {
  //   gsap.from("#start", {
  //     y:120,
  //     stagger: 0.2,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: "#pratham",
  //       scroller: "body",
  //       start: "top 47%",
  //       end: "top 47%",
  //       scrub: 2,
  //     }
  //   })
  // }, [])

  return (
    <section className="">
      <div
        id="start"
        className=" z-10  grid md:grid-cols-2 gap-10 text-center mt-30  md:mt-35 md:m-10"
        style={{
          fontFamily: "PP",
        }}
      >
        <div
          id="pratham"
          className=" z-10 md:cols-span-2 flex justify-start md:ml-[13%] p-10 h-[80vh] w-[80vw] text-4xl md:text-9xl"
        >
          <motion.span>
            <motion.span
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 1, ease: "easeInOut" }}
            >
              {" "}
              We
            </motion.span>

            <motion.span
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeInOut" }}
            >
              {" "}
              are
            </motion.span>

            <motion.span
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
            >
              {" "}
              a
            </motion.span>

            <motion.span
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 1, ease: "easeInOut" }}
            >
              {" "}
              digital
            </motion.span>
            <br />
            <span className="flex flex-row justify-between">
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 1, ease: "easeInOut" }}
                className=" justify-between m-3 "
              >
                {" "}
                <video
                  loop
                  autoPlay
                  muted
                  width="200"
                  height="200"
                  className="rounded-full p-7  md:p-0"
                  preload="none"
                >
                  <source src="/videos/1.mp4" type="video/mp4" />
                </video>
              </motion.span>
              <span>
                {" "}
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 1, ease: "easeInOut" }}
                  className="font-extralight"
                  style={{
                    fontFamily: "RO",
                  }}
                >
                  design
                </motion.span>{" "}
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                >
                  and{" "}
                </motion.span>
              </span>
            </span>
            <motion.span
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
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
