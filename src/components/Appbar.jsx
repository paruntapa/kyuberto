import React, { forwardRef, useState } from "react";
import Magnetic from "./Magnetic";
import { Sheet, SheetTitle, SheetContent } from "@/components/ui/sheet";
import { motion } from "motion/react";
import UnderLineText from "./ui/UnderLineText";

const Appbar = forwardRef(function index(props, ref) {
  const [isActive, setIsActive] = useState(false);
  const WIDTH = 790;
  const DURATION = 0.25;
  const STAGGER = 0.025;

  const socials = [
    "LinkedIn",
    "Behance",
    "Dribble",
    "Instagram",
    "YouTube",
    "Twitter",
    "GitHub",
  ];

  const menu = ["What we do", "Projects", "Company", "Tutorials", "Contacts"];

  return (
    <div
      className="flex z-13 justify-between m-3 fixed top-0  left-0 w-full mix-blend-difference"
      style={{
        fontFamily: "PP",
      }}
    >
      <div className="h-[120px] invisible md:visible overflow-hidden whitespace-nowrap  p-10 text-white text-3xl md:text-2xl font-semibold">
        <motion.h2
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        >
          cuberto
        </motion.h2>
      </div>
      <div className="flex gap-6 ">
        <motion.span
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          className="invisible sm:visible text-xl h-[120px] w-[120px] p-10 pl-20  relative text-white"
        >
          menu
        </motion.span>
        <Magnetic>
          <div
            ref={ref}
            onClick={() => setIsActive(!isActive)}
            className=" h-[120px] w-[150px] p-12 pr-3 pb-6 cursor-pointer  justify-center flex relative  "
          >
            <div className="flex flex-col mt-2.5 mr-3 justify-between w-15 h-3   relative ">
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
                className={`z-10 relative w-full before:content-[''] before:block before:h-[1px] before:w-[40%] before:bg-white before:absolute before:transition-transform before:duration-300 after:content-[''] after:block after:h-[1px] after:w-[40%] after:bg-white after:absolute after:transition-transform after:duration-300 
              ${
                isActive
                  ? "before:rotate-45 before:top-[-1px] after:rotate-[-45deg] after:top-0 "
                  : "before:top-[5px] after:top-[-5px]"
              }`}
              ></motion.div>
            </div>
          </div>
        </Magnetic>

        <div className="overflow-hidden">
          <Sheet
            open={isActive}
            onOpenChange={setIsActive}
            direction="right"
            className="[&>button]:hidden"
          >
            <SheetTitle className="hidden"></SheetTitle>
            <SheetContent
              style={{ maxWidth: WIDTH }}
              className="bg-background "
            >
              <div className="grid grid-cols-1 gap-4 h-screen items-center mt-36 mr-30 m-25 mb-58">
                <div
                  className="grid grid-cols-2 "
                  style={{
                    fontFamily: "PP",
                  }}
                >
                  <div>
                    <div className="text-gray-400  mb-10 font-light ">
                      {" "}
                      Social media{" "}
                    </div>
                    <div className="space-y-7">
                      {socials.map((s, idx) => (
                        <motion.a
                          key={idx}
                          initial="initial"
                          whileHover="hovered"
                          className="cursor-pointer relative block mt-4 whitespace-nowrap  overflow-hidden  "
                          style={{
                            lineHeight: "0.75",
                          }}
                        >
                          <div>
                            {s.split("").map((l, i) => {
                              return (
                                <motion.span
                                  transition={{
                                    duration: DURATION,
                                    delay: i * STAGGER,
                                    ease: "easeInOut",
                                  }}
                                  variants={{
                                    initial: { y: 0 },
                                    hovered: { y: "-100%" },
                                  }}
                                  className=" inline-block"
                                  key={i}
                                >
                                  {l}
                                </motion.span>
                              );
                            })}
                          </div>

                          <div className="absolute inset-0">
                            {s.split("").map((l, i) => {
                              return (
                                <motion.span
                                  transition={{
                                    duration: DURATION,
                                    delay: i * STAGGER,
                                    ease: "easeInOut",
                                  }}
                                  className=" inline-block"
                                  key={i}
                                  variants={{
                                    initial: { y: "100%" },
                                    hovered: { y: 0 },
                                  }}
                                >
                                  {l}
                                </motion.span>
                              );
                            })}
                          </div>
                        </motion.a>
                      ))}
                    </div>
                    <div className="font-light text-[15px] mt-38 text-gray-400 ">
                      Get in touch{" "}
                    </div>{" "}
                    <br />
                    <span className="font-light text-[20px] pt-10  cursor-pointer ">
                      <div className=" cursor-pointer"> <UnderLineText>info@cuberto.com </UnderLineText></div>
                    </span>
                  </div>
                  <div className="">
                    <span className="text-gray-400 font-light "> Menu </span>
                    <div className="grid mt-5 grid-cols-1  text-[50px] mb-23">
                      {menu.map((s, idx) => (
                        <motion.a
                          key={idx}
                          initial="initial"
                          whileHover="hovered"
                          className="relative block cursor-pointer  mt-4 whitespace-nowrap  overflow-hidden  "
                          style={{
                            lineHeight: "1.2",
                          }}
                        >
                          <div>
                            {s.split("").map((l, i) => {
                              return (
                                <motion.span
                                  transition={{
                                    duration: DURATION,
                                    delay: i * STAGGER,
                                    ease: "easeInOut",
                                  }}
                                  variants={{
                                    initial: { y: 0 },
                                    hovered: { y: "-110%" },
                                  }}
                                  className="inline-block "
                                  key={i}
                                >
                                  {l}
                                </motion.span>
                              );
                            })}
                          </div>

                          <div className="absolute inset-0">
                            {s.split("").map((l, i) => {
                              return (
                                <motion.span
                                  transition={{
                                    duration: DURATION,
                                    delay: i * STAGGER,
                                    ease: "easeInOut",
                                  }}
                                  className="inline-block "
                                  key={i}
                                  variants={{
                                    initial: { y: "110%" },
                                    hovered: { y: 0 },
                                  }}
                                >
                                  {l}
                                </motion.span>
                              );
                            })}
                          </div>
                        </motion.a>
                      ))}
                    </div>
                    <span className="font-light text-[20px] pt-10 ">
                      <div className=" cursor-pointer"> <UnderLineText>Our workflow </UnderLineText></div>
                    </span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
});

export default Appbar;