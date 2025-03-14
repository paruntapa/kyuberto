import React, { useState } from "react";
import Button from "./Button";

const Secondary = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <section className="h-screen w-full items-center ">
      <div
        className="grid grid-cols-1 md:grid-cols-2 items-center "
        style={{
          fontFamily: "PP",
        }}
      >
        <div className="hidden lg:block md:visible h-screen flex justify-center items-center w-full ">
          <span className=" justify-between m-3 ">
            <video
              loop
              autoPlay
              muted
              width="500"
              height="500"
              className="rounded-full  m-15"
              preload="none"
            >
              <source src="/videos/2.mp4" type="video/mp4" />
            </video>
          </span>
        </div>
        <div className="text-[26px] font-bold md:font-extralight m-10 md:m-0 md:text-[33px]   h-screen flex justify-start items-center w-full ">
          <div className="flex-col  ">
            <div>
              Cuberto is a leading digital product <br /> agency focused on
              branding, UI/UX <br /> design, mobile, and web <br /> development.
            </div>
            <Button
              className="text-[32px] font-semibold mt-13 p-20 md:w-[28vw] rounded-full border-1 border-black text-black  text-lg md:text-2xl "
              padding="py-2 px-6 md:px-4 "
            >
              What we do
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secondary;
