import React from 'react'

function Cards() {
  return (
    <div id='education' className='w-full min-h-screen grow gap-5 flex flex-wrap items-center pt-20 pb-10
     bg-zinc-100 cards  px-20 justify-center '>

      <div className=' w-full border-b-[1px] border-zinc-300 pb-10'>
        <h1 className='text-[10vw] font-["Neue_Montreal"] text-zinc-900'>Education</h1>
      </div>
      <div className='cardcontainer grow  w-2/5 '>
        <div className="card relative w-full rounded-xl flex flex-col items-center justify-center min-h-[45vh] pb-14 bg-[#004D43]">
          <h1 className='mt-3 justify-center items-center text-2xl flex text-center flex-wrap w-[60%] font-bold'>Arya Institute Of Engineering Technology And Management</h1>
          <h1 className='mt-3 justify-center items-center text-2xl flex text-center  flex-wrap w-[60%] font-light'>Bechalors Of Technology</h1>
          <h1 className='mt-3 justify-center items-center text-2xl flex text-center  flex-wrap w-[60%] font-light'>Computer Science And Engineering</h1>
          <div className='flex flex-wrap flex-col'>
          <div className='absolute px-5 py-1 rounded-full border-2 left-[2vw] bottom-[2vw]'> 2022-2026</div>
          <div className='absolute px-5 py-1 rounded-full border-2 right-[2vw] bottom-[2vw]'>8.7</div>
          </div>

        </div>

      </div>
      <div className='cardcontainer  flex-wrap flex gap-5  grow'>
        <div className="card flex-col relative grow rounded-xl flex justify-center items-center h-[45vh] min-w-[235px] bg-[#212121]">
          <h1 className=' justify-center items-center text-2xl flex text-center flex-wrap w-[40%] font-bold'>J.D. International School</h1>
          <h1 className='mt-3 justify-center items-center text-2xl flex text-center  flex-wrap w-[40%] font-light'>12th</h1>
          <h1 className='mt-3 justify-center items-center text-2xl flex text-center  flex-wrap w-[40%] font-light'>CBSE</h1>
          <div className='absolute px-1 py-1 rounded-full border-2 left-[2vw] bottom-[2vw]'> 2021-2022</div>
          <div className='absolute px-1 py-1 rounded-full border-2 right-[2vw] bottom-[2vw]'>89%</div>
        </div>
        <div className="card flex-col relative grow rounded-xl flex justify-center items-center h-[45vh] min-w-[235px] bg-[#212121]">
          <h1 className=' justify-center items-center text-2xl flex text-center flex-wrap w-[40%] font-bold'>J.D. International School</h1>
          <h1 className='mt-3 justify-center items-center text-2xl flex text-center  flex-wrap w-[40%] font-light'>10th</h1>
          <h1 className='mt-3 justify-center items-center text-2xl flex text-center  flex-wrap w-[40%] font-light'>CBSE</h1>
          <div className='absolute px-1 py-1 rounded-full border-2 left-[2vw] bottom-[2vw]'> 2019-2020</div>
          <div className='absolute px-1 py-1 rounded-full border-2 right-[2vw] bottom-[2vw]'>85%</div>
        </div>
      </div>
    </div>
  )
}

export default Cards