"use client"

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, transform, useSpring, animate } from 'framer-motion'

const Stickycursor = ({ stickyElement }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cursorRef = useRef(null);

    const cursorSize = isHovered ? 60 : 15;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }

    const smoothOptions = {
        stiffness: 300,
        damping: 20,
        mass: 0.5
    }

    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const scale = {
        x: useMotionValue(1),
        y: useMotionValue(1)
    }

    const rotate = (distance) => {
        const angle = Math.atan2(distance.y, distance.x);
        animate(cursorRef.current, { rotate: `${angle}rad` }, {duration: 0})
      }

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = stickyElement.current.getBoundingClientRect();

        const center = {x: left + width / 2, y: top + height / 2};
        const distance = {x: clientX - center.x, y: clientY - center.y};

       

        if(isHovered) {

            rotate(distance);
            //stretch based on the distance
            const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
            const newScaleX = transform(absDistance, [0, height/2], [1, 1.3])
            const newScaleY = transform(absDistance, [0, width/2], [1, 0.8])
            scale.x.set(newScaleX);
            scale.y.set(newScaleY);

            mouse.x.set((center.x - cursorSize / 2) + distance.x * 0.1);
            mouse.y.set((center.y - cursorSize / 2) + distance.y * 0.1);
        } else {
            mouse.x.set(clientX - cursorSize / 2);
            mouse.y.set(clientY - cursorSize / 2);
        }
    }

    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMove)
        stickyElement.current.addEventListener('mouseover', () => {
            setIsHovered(true)
        })
        stickyElement.current.addEventListener('mouseleave', () => {
            setIsHovered(false)
            animate(cursorRef.current, {scaleX: 1, scaleY: 1}, {duration: 0.1}, {type: 'spring'})
        })
        
        return () => {
            window.removeEventListener('mousemove', manageMouseMove)
            stickyElement.current.removeEventListener('mouseover', () => {
                setIsHovered(true)
            })
            stickyElement.current.removeEventListener('mouseleave', () => {
                setIsHovered(false)
                animate(cursorRef.current, {scaleX: 1, scaleY: 1}, {duration: 0.1}, {type: 'spring'})

            })
        }
    })

    const template = ({rotate, scaleX, scaleY}) => {
        return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})` 
      }

  return (
    <motion.div 
    transformTemplate={template}
    ref={cursorRef}
    className={`fixed w-[15px] h-[15px]  ${ isHovered ? "bg-black/50": "bg-black"  }  rounded-full pointer-events-none`}
    style={{left: smoothMouse.x, top: smoothMouse.y, scaleX: scale.x, scaleY: scale.y}}
    animate={{
        width: cursorSize,
        height: cursorSize,
    }}
    >
    </motion.div>
  )
}
export default Stickycursor