import React from 'react'
import avatar from '../assets/my_avatar.png'
import { MySocials, selfDescription } from '../constants/contsants'
import { FaArrowDown } from 'react-icons/fa'
import myresume from '../assets/myResume.pdf'



const Hero = () => {
    window.addEventListener('scroll', function () {
        const downArrow = document.querySelector('.down-arrow');
        if (this.scrollY >= 2) downArrow.classList.add("hide-down-arrow")
        else downArrow.classList.remove("hide-down-arrow")
    })
    return (
        <section className='min-h-screen flex flex-col justify-start items-center  text-center'>
            <h2 className='text-5xl text-rose-600 font-bold uppercase' >Ritesh Kumar</h2>
            <h3 className='py-3 text-2xl'>Software Engineer</h3>
            <p className='max-w-xl font-light text-gray-500'>
                Hello <span className='animate-pulse text-2xl'>👋</span> {selfDescription}
            </p>
            {/* Socail Icons */}
            <div className='flex justify-evenly py-5 lg:py-10 text-3xl w-full md:w-1/3'>
                {MySocials.map(({ id, link, icon }) => (
                    <a href={link} key={id}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='cursor-pointer duration-300 hover:text-rose-600'
                    >
                        {icon}
                    </a>
                ))}
            </div>
            {/* Avatar and resume */}
            <div>
                <img src={avatar} alt="Profile image"
                    className='w-60 h-60   md:h-72 object-cover object-top
                  bg-gradient-to-b from-rose-600 rounded-xl pt-5'
                />
                <a href={myresume} download={true}
                    className='flex items-center justify-center mt-7
            bg-gradient-to-r from-rose-600 to to-teal-500 text-white
            py-2 rounded-lg'
                >Resume</a>
            </div>

            {/* Arrow down animation */}
            <div className='mt-5 down-arrow'>
                <FaArrowDown className='text-gray-400 text-2xl animate-bounce' />
            </div>
        </section>
    )
}

export default Hero
