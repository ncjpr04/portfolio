import React from 'react'
import ContactForm from './ContactForm.jsx'

function Footer() {
  return (
    <div id='contact' className='h-full pt-6'>
      <div className='w-full h-full flex flex-wrap p-20 font-["FoundersGrotesk"] bg-zinc-900'>
        <div className=' mt-10 h-full flex flex-col justify-between grow'>
          <div className="heading">
            <h1 className='text-[8vw] uppercase  font-semibold'>Eye-</h1>
            <h1 className='text-[8vw] uppercase leading-[3rem] font-semibold'>Opening</h1>
            <h1 className='text-[8vw] uppercase font-semibold'>Websites</h1>
          </div>

        </div>
        <div className=' mt-10 grow'>

          <ContactForm />
        </div>
      </div>
      <div className="logo ml-20">
        <img className=" min-w-[70px] w-[7vw]" src="dist\public\logo.png" alt="" />
      </div>
      <div className='flex justify-center items-center pb-5'>&copy;Nitin Choudhary</div>
    </div>
  )
}

export default Footer