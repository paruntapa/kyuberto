import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion"; // Changed to match CardLink import
import { Dribbble, PlayIcon } from "lucide-react";
import { VelocityScroll } from "./magicui/scroll-based-velocity";
import { CardLink1 } from "./CardLink";
import gsap from "gsap";

const cards = [
  {
    imageUrl: "/cover/1.png",
    href: "/image",
    title: "Cuberto",
    icon: <Dribbble className="h-6 md:h-4" />,
  },
  {
    imageUrl: "/cover/2.png",
    href: "/image",
    title: "Cuberto",
    icon: <Dribbble className="h-6 md:h-4" />,
  },
  {
    imageUrl: "/cover/3.png",
    href: "/image",
    title: "Cuberto",
    icon: <Dribbble className="h-6 md:h-4" />,
  },
  {
    imageUrl: "/cover/4.png",
    href: "/image",
    title: "Cuberto",
    icon: <Dribbble className="h-6 md:h-4" />,
  },
  {
    imageUrl: "/cover/5.png",
    href: "/image",
    title: "Cuberto",
    icon: <Dribbble className="h-6 md:h-4" />,
  },
  {
    imageUrl: "/cover/6.jpg",
    href: "/image",
    title: "Cuberto",
    icon: <Dribbble className="h-6 md:h-4" />,
  },
  {
    imageUrl: "/cover/7.png",
    href: "/image",
    title: "Cuberto",
    icon: <Dribbble className="h-6 md:h-4" />,
  },
  {
    imageUrl: "/cover/8.png",
    href: "/image",
    title: "Cuberto",
    icon: <Dribbble className="h-6 md:h-4" />,
  },
  {
    imageUrl: "/cover/9.png",
    href: "/image",
    title: "Cuberto",
    icon: <Dribbble className="h-6 md:h-4" />,
  },
  {
    imageUrl: "/cover/10.png",
    href: "/image",
    title: "Cuberto",
    icon: <Dribbble className="h-6 md:h-4" />,
  },
];

const Projects = () => {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  // Calculate drag constraints based on content and container width
  useEffect(() => {
    const calculateConstraints = () => {
      if (containerRef.current && cardsContainerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const cardsWidth = cardsContainerRef.current.scrollWidth;

        // Only allow dragging if content is wider than container
        const leftConstraint = containerWidth - cardsWidth;

        setDragConstraints({
          left: Math.min(leftConstraint, 0), // Negative value, but never positive
          right: 0, // Right constraint is always 0
        });
      }
    };

    // Calculate on mount
    calculateConstraints();

    // Recalculate on window resize
    window.addEventListener("resize", calculateConstraints);
    return () => window.removeEventListener("resize", calculateConstraints);
  }, [cards]); //

  useEffect(() => {
    const cursor = document.querySelector("#dragcursor");
    const video = document.querySelector("#cards");

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
    <div className="mt-45 relative flex w-full flex-col items-center justify-center overflow-hidden -top-20 md:mb-20">
      <VelocityScroll numRows={1} defaultVelocity={100}>
        <h1
          style={{
            fontFamily: "PP",
          }}
          className="text-[8rem] md:text-[12rem]  ml-48 md:ml-64"
        >
          New Day -
        </h1>
        <h1
          style={{
            fontFamily: "RO",
          }}
          className="text-[8rem] md:text-[12rem] font-extralight"
        >
          New Inspo
        </h1>
        <video
          src="/videos/17.mp4"
          autoPlay
          width="600"
          muted
          loop
          className="rounded-full h-32 md:h-40"
        />
      </VelocityScroll>

      <div
        id="cards"
        className="overflow-hidden pt-40 w-full z-0"
        ref={containerRef}
      >
        <div>
          <div
            id="dragcursor"
            className="z-8 opacity-0  tranform  -translate-x-1/2 -translate-y-1/2  flex items-center justify-center h-[7vw] w-[7vw] rounded-full bg-black fixed left-0 top-0  "
          >
            <h5 className="text-xl font-semibold cursor-grab select-none text-white">
              {" "}
              Drag{" "}
            </h5>
          </div>
          <motion.div
            className=" flex gap-3 md:gap-6 cursor-grab active:cursor-grabbing pl-6 md:pl-20"
            drag="x"
            transition={{ stiffness: 30, damping: 30, ease: "easeInOut" }}
            dragConstraints={dragConstraints}
            whileTap={{ cursor: "grabbing" }}
          >
            {cards.map((card, index) => (
              <motion.div key={index}>
                <CardLink1 {...card} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
