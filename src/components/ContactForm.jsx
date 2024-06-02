import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_k3valx8', 'template_enzl3lb', form.current, 'LwinQ-ewQzJ_EIs6u')
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div className="bg-gradient-to-r h-full from-violet-500 to-violet-500 rounded-[22px] transition-all duration-300 hover:shadow-[0px_0px_30px_1px_rgba(139,92,246,0.3)]
        )]">
            <div className="transition-all h-full duration-200 hover:scale-98 hover:rounded-[20px] flex justify-center items-center">
                <form ref={form} onSubmit={sendEmail} className=" w-full h-[99%] flex flex-col items-center justify-center gap-3 bg-[#171717] rounded-[25px] font-inherit ">
                    <p className="text-center my-3 text-white text-[2em] font-bold bg-transparent">Get In Touch</p>
                    <input
                        required
                        placeholder="Name"
                        className="bg-none border-none outline-none mx-10 w-[80%] rounded-md py-1 text-[#a7afca] focus:outline-none focus:ring focus:ring-violet-500 focus:text-[#000000] px-4"
                        type="text"
                        name="user_name"
                    />

                    <input
                        required
                        placeholder="Email"

                        className="bg-none border-none outline-none mx-10 w-[80%] rounded-md py-1 text-[#a7afca] focus:outline-none focus:ring focus:ring-violet-500 focus:text-[#000000] px-4"
                        type="email"
                        name="user_email"
                    />
                    <textarea
                        required
                        placeholder="Message"
                        cols="30"
                        rows="3"

                        className="bg-none border-none outline-none mx-10 w-[80%] rounded-md py-1 text-[#a7afca] focus:outline-none focus:ring focus:ring-violet-500 focus:text-[#000000] px-4"
                        name="message"
                    ></textarea>

<button class="px-6 py-3 mt-3 mb-7 text-xs uppercase tracking-[2.5px] font-medium text-black bg-white border-none rounded-full shadow-[0_8px_15px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out cursor-pointer outline-none hover:bg-violet-500 hover:shadow-[0_5px_20px_rgba(139,92,246,0.4)]
 hover:text-white hover:-translate-y-1.75 active:-translate-y-0.25">
  Submit
</button>

                </form>
            </div>
        </div>
    );
};

export default ContactForm;
