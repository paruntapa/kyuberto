"use client"
import Appbar from "@/components/Appbar";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Secondary from "@/components/Secondary";
import Stickycursor from "@/components/stickyCursor";
import { useRef } from "react";
import ReactLenis from "lenis/react";
import Third from "@/components/Third";
import VideoSec from "@/components/VideoSec";
import {motion} from "framer-motion"


export default function Home() {

  const stickyElement = useRef(null);
  
  return (
    <ReactLenis root>
    <div>
      
    <span >
      <motion.video
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{  duration: 1, ease: "easeInOut"}}
          loop
          autoPlay
          muted
          width="100"
          height=""
          className="fixed right-0 overflow-hidden bottom-0 m-17 z-10 rounded-full"
          preload="none"
        >
          <source src="/videos/16.mp4" type="video/mp4" />
        </motion.video>
        </span>
    <Appbar ref={stickyElement} />
    <Stickycursor stickyElement={stickyElement} />
    <Navbar/>
    <Hero /> 
    <VideoSec />
    <Secondary/>
    <Third/>
    </div>
    </ReactLenis>
  );
}
