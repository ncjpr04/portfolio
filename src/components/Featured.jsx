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
    <div id='projects' className=' bg-zinc-900 w-full pt-24 relative z-51'>
      <div className=' w-full px-20 border-b-[1px] border-zinc-700 pb-10'>
        <h1 className='text-[10vw] font-["Neue_Montreal"] '>Featured Projects</h1>
      </div>
      <div className='cards py-10 px-20 flex flex-wrap justify-center items-center w-full'>
      <a href="https://ncjpr04-weather-app.netlify.app" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(0)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>Weather App</h1>
          <img className='rounded-lg' src="https://github.com/ncjpr04/portfolio/blob/main/public/Screenshot%20(1142).png?raw=true" alt="" />
        </a>
      <a href="https://eventgig.netlify.app/" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(0)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>EventGig</h1>
          <img className='rounded-lg' src="https://github.com/ncjpr04/portfolio/blob/main/public/Screenshot%20(1143).png?raw=true" alt="" />
        </a>
        <a href="https://ncjpr04-todoist.netlify.app/" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(0)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>Todist</h1>
          <img className='rounded-lg' src="https://github.com/ncjpr04/portfolio/blob/main/public/Screenshot%20(1129).png?raw=true" alt="" />
        </a>
        <a href="https://ncjpr04-portfolio.netlify.app/" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(0)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>Portfolio Website</h1>
          <img className='rounded-lg' src="https://raw.githubusercontent.com/ncjpr04/portfolio/main/public/Screenshot%20(1133).png" alt="" />
        </a>

        <a href="https://ncjpr04.github.io/Currency-Converter/" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(1)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>Currency Converter</h1>
          <img className='rounded-lg' src="https://github.com/ncjpr04/portfolio/blob/main/public/Screenshot%20(1134).png?raw=true" alt="" />
        </a>

        <a href="https://ncjpr04.github.io/Rock-Paper-Scissors-Game/" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(2)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>Stone Paper scissors Game</h1>
          <img className='rounded-lg' src="https://github.com/ncjpr04/portfolio/blob/main/public/Screenshot%20(1135).png?raw=true" alt="" />
        </a>

        <a href="https://ncjpr04.github.io/Spotify-Clone-Using-Vanilla-Css/" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(3)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>Spotify Clone</h1>
          <img className='rounded-lg' src="https://github.com/ncjpr04/portfolio/blob/main/public/Screenshot%20(1136).png?raw=true" alt="" />
        </a>

        <a href="https://ncjpr04.github.io/Twitter_clone/" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(4)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>Twitter Clone</h1>
          <img className='rounded-lg' src="https://github.com/ncjpr04/portfolio/blob/main/public/Screenshot%20(1137).png?raw=true" alt="" />
        </a>

        <a href="https://ncjpr04.github.io/Quote-Generator/" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(5)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>Quote Generator</h1>
          <img className='rounded-lg' src="https://github.com/ncjpr04/portfolio/blob/main/public/Screenshot%20(1138).png?raw=true" alt="" />
        </a>

        <a href="https://ncjpr04.github.io/nitin.com-The-perfect-ecom/" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(6)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>E-Commerce Website</h1>
          <img className='rounded-lg' src="https://github.com/ncjpr04/portfolio/blob/main/public/Screenshot%20(1139).png?raw=true" alt="" />
        </a>

        <a href="https://ncjpr04.github.io/Portfolio-Website-using-html-and-css/" target="blank" className="item card pt-2 rounded-md max-w-[40vw] min-w-[360px] overflow-hidden m-5 grow " onMouseOver={() => hoverEffect(7)}>
          <h1 className='text-center font-bold font-["Neue_Montreal"] mb-2 text-3xl'>Portfolio Website</h1>
          <img className='rounded-lg' src="https://github.com/ncjpr04/portfolio/blob/main/public/Screenshot%20(1140).png?raw=true" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Feathured;
