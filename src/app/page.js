"use client"
import Appbar from "@/components/Appbar";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Secondary from "@/components/Secondary";
import Stickycursor from "@/components/stickyCursor";
import { useRef } from "react";
import ReactLenis from "lenis/react";
import Third from "@/components/Third";


export default function Home() {

  const stickyElement = useRef(null);
  return (
    <ReactLenis root>
    <div>
    <Appbar ref={stickyElement} />
    <Stickycursor stickyElement={stickyElement} />
    <Navbar/>
    <Hero /> 
    <Secondary/>
    <Third/>
    </div>
    </ReactLenis>
  );
}
