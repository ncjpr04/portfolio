import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {

    return (
        <div data-scroll data-scroll-speed="-.5" id='home' className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textstructure mt-52 px-24 flex-wrap-reverse flex justify-between items-center '>
                <div>
                    {["I Create", "Eye Opening", "Websites"].map((item, index) => {
                        return <div className='masker'>
                            <motion.div className='w-fit shadow flex items-center justify-center'>
                                {index === 1 && (<motion.div initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className='mr-[1vw] w-[10vw] h-[5vw] -top-[1.2vw]  rounded-md bg-zinc-900 overflow-hidden shadow-md '>
                                    <img className='w-[10vw] h-[5vw] block object-cover' src="https://media1.tenor.com/m/mCQ06scNT8gAAAAd/flirt.gif" />
                                </motion.div>)}
                                <h1 className="uppercase  text-[7vw]  leading-[6vw] -tracking-3.5 font-['FoundersGrotesk'] font-semibold">{item}</h1>
                            </motion.div>
                        </div>
                    })}
                </div>
                <div className='blob overflow-hidden min-w-[100px]'>
                    <img src="https://github.com/ncjpr04/portfolio/blob/main/public/Nitin.png?raw=true" alt="" />
                </div>

            </div>
            <div className='border-t-[1px] border-zinc-700 mt-24 flex flex-wrap justify-between items-center py-5 px-20'>
                {["Bringing Visions to Life", "Crafting Pixel-Perfect Interfaces with Passion and Precision"].map((item, index) => <p className='text-lg font-light tracking-tight mb-5 leading-none'>{item}</p>)
                }
                <div className='start flex items-center gap-5'>
                    <a href="https://drive.google.com/file/d/12wOnhsQc0JlbGQIHOmYTtzqLQzs2MZvA/view" download="Nitin's Resume.pdf">
                        <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md font-[FoundersGrotesk] uppercase rounded-full'>Download Resume</div>
                    </a>
                    {/* <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-400'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>

                    </div> */}
                </div>

            </div>

        </div>
    )
}

export default LandingPage