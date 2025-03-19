import gsap from "gsap";
import { PlayIcon } from "lucide-react";
import React, { useEffect } from "react";

const VideoSec = () => {
  useEffect(() => {
    const cursor = document.querySelector("#vidcursor");
    const video = document.querySelector("#videos");

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
    <div id="videos" className=" md:min-h-screen md:mt-29 z-0 w-full ">
      <div
        id="vidcursor"
        className="z-8 opacity-0  tranform  -translate-x-1/2 -translate-y-1/2  flex items-center justify-center h-[7vw] w-[7vw] rounded-full bg-white fixed left-0 top-0  "
      >
        <h5 className="text-xl font-medium">
          {" "}
          <PlayIcon />{" "}
        </h5>
      </div>
      <div>
        <video
          loop
          autoPlay
          muted
          width="800"
          height="800"
          className="  min-w-full min-h-full md:max-w-none"
          preload="none"
        >
          <source src="/videos/6.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default VideoSec;
