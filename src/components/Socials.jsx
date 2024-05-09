import React from 'react';

function Socials() {
    return (
        <div className="fixed   z-50 flex my-[20vh] pointer-events-auto"> {/* Adjusted for full-screen centering and highest stacking */}
            <div className=" mx-1 bg-zinc-700 bg-opacity-30 backdrop-blur-sm rounded-full py-5 px-[0.5vw] font-neueMontreal flex flex-col gap-4 justify-between items-center shadow-lg ring-1 ring-black/5">
                <button class="Btn">
                    <a href="https://www.linkedin.com/in/ncjpr04/" target="blank" className='Btn' >
                        <span class="svgContainer p-2">
                            <img src="public\klipartz.com.png" alt="" />
                        </span>
                    </a>
                    <span class="BG1 BG"></span>
                </button>
                <button class="Btn">
                    <a href="https://github.com/ncjpr04" target="blank" className='Btn' >
                        <span class="svgContainer p-2">
                            <img src="public\pngegg.png" alt="" />
                        </span>
                    </a>
                    <span class="BG4 BG"></span>
                </button>
                <button class="Btn">
                    <a href="https://wa.me/+918005819661" target="blank" className='Btn' >
                        <span class="svgContainer p-2">
                            <img src="public\toppng.com-white-whatsapp-n-256x256.png" alt="" />
                        </span>
                    </a>
                    <span class="BG3 BG"></span>
                </button>
                <button class="Btn">
                    <a href="https://leetcode.com/u/ncjpr04/" target="blank" className='Btn' >
                        <span class="svgContainer p-1 pt-2 flex justify-center items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="" />
                        </span>
                    </a>
                    <span class="BG2 BG"></span>
                </button>
                <button class="Btntwit">
                    <a href="https://twitter.com/ncjpr04" target="blank" className='Btntwit' >
                        <span class="svgContainertwit">
                            <svg
                                fill="white"
                                class="svgIcontwit"
                                xmlns="http://www.w3.org/2000/svg"
                                height="1.7em"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                                ></path>
                            </svg>
                        </span>
                    </a >
                    <span class="BGtwit"></span>
                </button>
                <button class="Btninsta">
                    <a href="https://www.instagram.com/ncjpr04/" target="blank" className='Btninsta' >
                        <span class="svgContainerinsta">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1.5em"
                                viewBox="0 0 448 512"
                                class="svgIconinsta"
                                fill="white"
                            >
                                <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                ></path>
                            </svg>
                        </span>
                    </a>
                    <span class="BGinsta"></span>
                </button>

                <button class="Btnstock">
                    <a href="https://stackoverflow.com/users/22814377/ncjpr04" target="blank" className='Btntwit' >
                        <span class="svgContainerstock">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1.6em"
                                fill="white"
                                viewBox="0 0 384 512"
                            >
                                <path
                                    d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"
                                ></path>
                            </svg>
                        </span>
                    </a>
                    <span class="BGstock"></span>
                </button>


            </div>
        </div>
    );
}

export default Socials;
