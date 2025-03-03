import React from 'react'

const Third = () => {
  return (
    <section className='h-[150vh] w-full rounded-t-4xl bg-black/90 items-center overflow-hidden'>
        <div style={{
         fontFamily: 'PP',
         }} 
         className='text-[154px] space-y-2 p-10 pl-45 pt-18 text-white h-[80vh] rounded-t-2xl  flex justify-start items-center w-full  '> 
         <span className='gap-0'>
            Featured <br />
           vid <i>projects</i> 
         </span>
        </div>
    <div 
    className='flex justify-start items-center ' 
    style={{
        fontFamily: 'PP',
    }}>
      <div className='h-screen  flex flex-col justify-start  items-center w-full '>
        <div>
            Video
        </div>
        <div className='flex justify-start'>
            Title
        </div>
      </div>
      <div className='text-[33px] h-screen flex flex-col justify-start items-center w-full pt-50 '>
        <div className='flex-col'>
        <div>
        <div>
            Video
        </div>
        <div className='flex justify-start'>
            Title
        </div>
        </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Third