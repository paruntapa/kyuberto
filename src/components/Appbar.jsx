import React, { forwardRef, useState } from 'react'
import Magnetic from './Magnetic'
import {
  Sheet,
  SheetTitle,
  SheetContent,

} from "@/components/ui/sheet"
import {
  Drawer,
  DrawerContent,
} from "@/components/ui/drawer"
const Appbar = forwardRef(function index(props, ref) { 
  const [isActive, setIsActive] = useState(false);
  const WIDTH = 790;

  return (
    
    <div className='flex justify-between m-3 relative ' style={{
      fontFamily: 'PP',
    }}>
        <div className='h-[120px]  p-10  text-2xl font-semibold' >
            cuberto
        </div>
        <div className='flex gap-6 '>
         <span className='text-xl h-[120px] w-[120px] p-10 pl-20 relative'>menu</span>
         <Magnetic>
         <div ref={ref} onClick={() => setIsActive(!isActive)} className='h-[120px] w-[150px] p-12 pr-3 pb-6 cursor-pointer  justify-center flex relative  '>
         <div
         
             className="flex flex-col mt-2.5 mr-3 justify-between w-15 h-3   relative ">
            <div
            
              className={`relative w-full before:content-[''] before:block before:h-[1px] before:w-[40%] before:bg-black before:absolute before:transition-transform before:duration-300 after:content-[''] after:block after:h-[1px] after:w-[40%] after:bg-black after:absolute after:transition-transform after:duration-300 
              ${isActive ? "before:rotate-45 before:top-[-1px] after:rotate-[-45deg] after:top-0" : "before:top-[5px] after:top-[-5px]"}`}
            >

            </div>
        </div>
        </div>
        </Magnetic>

        <div className='overflow-hidden'>
      <Sheet  open={isActive} onOpenChange={setIsActive} direction="right" className="[&>button]:hidden">
      <SheetTitle className="hidden">
      </SheetTitle> 
        <SheetContent style={{ maxWidth: WIDTH }} className="bg-background ">
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
        </SheetContent>
        </Sheet>
        </div>
      </div>
      
    </div>
  )
})

export default Appbar