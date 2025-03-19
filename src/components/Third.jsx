import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Third = () => {
  useEffect(() => {
    const cursor = document.querySelector("#cursor");
    const video = document.querySelector("#video ");

    video.addEventListener("mousemove", (dets) => {
      gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
      });
    });

    video.addEventListener("mouseenter", (dets) => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
      });
    });

    video.addEventListener("mouseleave", (dets) => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
      });
    });
  }, []);

  return (
    <section
      id="page1"
      className=" mt-[140%] md:mt-[0%]  w-full rounded-t-[100px] bg-black/90 items-center "
    >
      <div
        style={{
          fontFamily: "PP",
        }}
        className="z-10 text-[50px] md:text-[154px] space-y-2 p-10  pl-20 md:pl-45  md:pt-18 text-white h-[80vh] rounded-t-2xl  flex justify-start items-center w-full  "
      >
        <span className=" ">
          Featured <br />
          <span className=" flex  justify-start ">
            <span className="p-10 md:m-2">
              <video
                loop
                autoPlay
                muted
                width="250"
                height="300"
                className="rounded-full "
                preload="none"
              >
                <source src="/videos/3.mp4" type="video/mp4" />
              </video>
            </span>
            <span className="">
              <i>projects</i>
            </span>
          </span>
        </span>
      </div>

      <div
        id="video"
        className="flex gap-12 bottom-0 mr-70 justify-center pb-0 mb-0 min-h-[40vh] p-30  items-center"
        style={{
          fontFamily: "PP",
        }}
      >
        <div
          id="cursor"
          className=" z-8 opacity-0 cursor-pointer  tranform  -translate-x-1/2 -translate-y-1/2  flex items-center justify-center h-[15vw] m-5 md:h-[7vw] md:w-[7vw] rounded-full bg-white fixed left-0 top-0  "
        >
          <h5 className="text-xl font-medium"> Explorer</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 ">
        <div className="z-5  ml-10 flex flex-col justify-start items-center  ">
          <div className="">
            <video
              loop
              autoPlay
              muted
              width="800"
              height="500"
              className="rounded-4xl"
              preload="none"
            >
              <source src="/videos/4.mp4" type="video/mp4" />
            </video>

            <div className="mt-5 flex justify-start mb-25 text-[30px] text-white ">
              <span>
                <span className="font-bold">Punto Pago </span> - The First
                Super-App <br />
                in Latin America
              </span>
            </div>

            <div>
              <video
                loop
                autoPlay
                muted
                width="800"
                height="500"
                className="rounded-4xl "
                preload="none"
              >
                <source src="/videos/7.mp4" type="video/mp4" />
              </video>

              <div className="mt-5 flex justify-start mb-25 text-[30px] text-white ">
                <span>
                  <span className="font-bold">DaoWay </span> - Astrology Planner
                  app: <br />
                  plan, achieve, thrive
                </span>
              </div>
            </div>

            <div>
              <video
                loop
                autoPlay
                muted
                width="800"
                height="500"
                className="rounded-4xl "
                preload="none"
              >
                <source src="/videos/9.mp4" type="video/mp4" />
              </video>

              <div className="mt-5 flex justify-start mb-25 text-[30px] text-white ">
                <span>
                  <span className="font-bold">Riyadh </span> - Official website
                  of
                  <br />
                  Riyadh, Saudi Arabia's capital
                </span>
              </div>
            </div>

            <div>
              <video
                loop
                autoPlay
                muted
                width="800"
                height="500"
                className="rounded-4xl "
                preload="none"
              >
                <source src="/videos/11.mp4" type="video/mp4" />
              </video>

              <div className="mt-5 flex justify-start mb-25 text-[30px] text-white ">
                <span>
                  <span className="font-bold">Qvino </span> - Wine marketplace
                  with
                  <br />
                  interactive learning
                </span>
              </div>
            </div>

            <div>
              <video
                loop
                autoPlay
                muted
                width="800"
                height="500"
                className="rounded-4xl "
                preload="none"
              >
                <source src="/videos/13.mp4" type="video/mp4" />
              </video>

              <div className="mt-5 flex justify-start mb-25 text-[30px] text-white ">
                <span>
                  <span className="font-bold">Potion </span> - Sales tool for
                  increasing <br />
                  conversion
                </span>
              </div>
            </div>

            <div>
              <video
                loop
                autoPlay
                muted
                width="800"
                height="500"
                className="rounded-4xl "
                preload="none"
              >
                <source src="/videos/15.mp4" type="video/mp4" />
              </video>

              <div className="mt-5 flex justify-start mb-25 text-[30px] text-white ">
                <span>
                  <span className="font-bold">Cisco </span> - Cloud based
                  network <br />
                  management
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* second section */}
        <div className="z-5 md:mt-30  text-[33px]  flex flex-col justify-start items-center">
          <div>
            <div>
              <video
                loop
                autoPlay
                muted
                width="800"
                height="500"
                className="rounded-4xl "
                preload="none"
              >
                <source src="/videos/5.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex justify-start  mb-25 text-[30px] mt-5  text-white">
              <span>
                <span className="font-bold">Kelvin Zero </span> - A digital
                product for <br />
                passwordless authentication
              </span>
            </div>
          </div>

          <div>
            <div>
              <video
                loop
                autoPlay
                muted
                width="800"
                height="500"
                className="rounded-4xl "
                preload="none"
              >
                <source src="/videos/8.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex justify-start mb-25 text-[30px] mt-5  text-white">
              <span>
                <span className="font-bold">Magma </span> - The ultimate tool
                for <br />
                building in the Web3 era
              </span>
            </div>
          </div>

          <div>
            <div>
              <video
                loop
                autoPlay
                muted
                width="800"
                height="500"
                className="rounded-4xl "
                preload="none"
              >
                <source src="/videos/10.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex justify-start mb-25 text-[30px] mt-5  text-white">
              <span>
                <span className="font-bold">FlipaClip </span> - The best tool
                for stop- <br />
                motion animation
              </span>
            </div>
          </div>

          <div>
            <div>
              <video
                loop
                autoPlay
                muted
                width="800"
                height="500"
                className="rounded-4xl "
                preload="none"
              >
                <source src="/videos/12.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex justify-start mb-25 text-[30px] mt-5  text-white">
              <span>
                <span className="font-bold">Zelt </span> - Run HR, IT & Finance
                in one <br />
                place{" "}
              </span>
            </div>
          </div>

          <div>
            <div>
              <video
                loop
                autoPlay
                muted
                width="800"
                height="500"
                className="rounded-4xl "
                preload="none"
              >
                <source src="/videos/14.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="flex justify-start mb-80 text-[30px] mt-5  text-white">
              <span>
                <span className="font-bold">Ferrumpipe </span> - Galvanized
                steel <br />
                metal frame manufacturer
              </span>
            </div>
          </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
