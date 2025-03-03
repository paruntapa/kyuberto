import React, { useState } from 'react'
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { LogOutIcon, MessageCircleIcon, MessageSquareIcon, SearchIcon } from "lucide-react";
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const WIDTH = 790;

  return (
    <div className='overflow-hidden'>
      <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
        <DrawerContent style={{ maxWidth: WIDTH }} className="bg-background ">
          <div className='grid grid-cols-1 gap-4 h-screen items-center mt-36 mr-30 m-25 mb-58'>
          <div className='grid grid-cols-2 ' style={{
                fontFamily: 'PP',
              }}>
            <div> 
              <span className='text-gray-400 font-light' > Social media </span>
              <div className="grid mt-10 grid-cols-1 space-y-4 mb-39" >
                <span>LinkedIn</span>
                <span>Behance</span>
                <span>Dribbble</span>
                <span>Instagram</span>
                <span>YouTube</span>
                <span>Twitter</span>
                <span>GitHub</span>
                
              </div>
            <span className='font-light text-[15px] pt-10 text-gray-400 '> Get in touch </span> <br />

            <span className='font-light text-[20px] pt-10 underline  underline-offset-8 '> info@cuberto.com </span>

            </div>
            <div className=''>
            <span className='text-gray-400 font-light '> Menu </span>
              <div className="grid mt-5 grid-cols-1  text-[50px] mb-23" >
                <span>What we do</span>
                <span>Projects</span>
                <span>Company</span>
                <span>Tutorials</span>
                <span>Contacts</span>
              </div>
            <span className='font-light text-[20px] pt-10 underline  underline-offset-8 '> Our workflow </span>
            </div>
            </div>
          </div>
        </DrawerContent>
        </Drawer>

    </div>
  )
}

export default Navbar