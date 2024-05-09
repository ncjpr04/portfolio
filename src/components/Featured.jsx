import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Feathured() {
  const [isHovering, setHovering] = useState(false);

  const hoverEffect = (elementIndex) => {
    const items = document.querySelectorAll('.item');

    items.forEach((item, index) => {
      if (index === elementIndex) {
        item.classList.remove('blurred');
      } else {
        item.classList.add('blurred');
      }
    });
  };

  return (
    <div id='projects' className='w-full pt-24'>
      <div className=' w-full px-20 border-b-[1px] border-zinc-700 pb-10'>
        <h1 className='text-8xl font-["Neue_Montreal"] '>Featured Projects</h1>
      </div>
      <div className='cards py-10 px-20 flex flex-wrap justify-center items-center w-full'>
        <a href="#" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(0)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>Portfolio Website</h1>
          <img className='rounded-lg' src="public\Screenshot (1133).png" alt="" />
        </a>

        <a href="https://ncjpr04.github.io/Currency-Converter/" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(1)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>Currency Converter</h1>
          <img className='rounded-lg' src="public\Screenshot (1134).png" alt="" />
        </a>

        <a href="https://ncjpr04.github.io/Rock-Paper-Scissors-Game/" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(2)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>Stone Paper scissors Game</h1>
          <img className='rounded-lg' src="public\Screenshot (1135).png" alt="" />
        </a>

        <a href="https://ncjpr04.github.io/Spotify-Clone-Using-Vanilla-Css/" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(3)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>Spotify Clone</h1>
          <img className='rounded-lg' src="public\Screenshot (1136).png" alt="" />
        </a>

        <a href="https://ncjpr04.github.io/Twitter_clone/" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(4)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>Twitter Clone</h1>
          <img className='rounded-lg' src="public\Screenshot (1137).png" alt="" />
        </a>

        <a href="https://ncjpr04.github.io/Quote-Generator/" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(5)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>Quote Generator</h1>
          <img className='rounded-lg' src="public\Screenshot (1138).png" alt="" />
        </a>

        <a href="https://ncjpr04.github.io/nitin.com-The-perfect-ecom/" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(6)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>E-Commerce Website</h1>
          <img className='rounded-lg' src="public\Screenshot (1139).png" alt="" />
        </a>

        <a href="https://ncjpr04.github.io/Portfolio-Website-using-html-and-css/" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(7)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>Portfolio Website</h1>
          <img className='rounded-lg' src="public\Screenshot (1140).png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Feathured;
