import React, { useState } from 'react'
import { Button } from './ui/button'

const Secondary = () => {

  const [isHover, setIsHover] = useState(false);
  
  return (
    <section className='h-screen w-full items-center overflow-hidden'>
      <div className='grid grid-cols-2 items-center ' style={{
      fontFamily: 'PP',
    }}>
        <div className='h-screen flex justify-center items-center w-full '>
          <span className=' justify-between m-3 '> 
            <video loop autoPlay muted width="500"  height="500" className='rounded-full '  preload="none">
                  <source  src="/videos/2.mp4" type="video/mp4" />
            </video>
          </span> 
        </div>
        <div className='text-[33px] h-screen flex justify-start items-center w-full '>
          <div className='flex-col'>
          <div>
        Cuberto is a leading digital product <br /> agency focused on branding, UI/UX <br /> design, mobile, and web <br /> development.
        </div>
        <Button className='text-[32px] mt-13 p-30 rounded-full '>
          What we do
        </Button>
        </div>

        </div>
      </div>
    </section>
  )
}

export default Secondary