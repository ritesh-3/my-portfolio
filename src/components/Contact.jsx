import React from 'react'
import Section from './common/section'
import { MySocials, contactsDescriptiom, getFormIOUrl } from '../constants/contsants'
import contat from '../assets/mobile.png'

const Contact = () => {
    return (
        <Section title='Contact Me' subtitle={contactsDescriptiom}>
            <div className='flex flex-col items-center justify-center gap-8 text-center'>
                <div>
                    <img src={contat} alt="Contact info" className='w-32 h-32' />
                </div>
                <div>
                    <p className=' max-w-xs lg:max-w-lg font-extralight'>
                        I am open to take freelancling gig works or full-time associate.
                        Feel Free to contact me using prefred medium
                    </p>
                </div>
                <div className='flex w-full items-center justify-evenly text-3xl'>
                    {MySocials.map(({ id, link, icon }) => (
                        <a href={link} target='_blank' rel='noopener noreferrer' className='duration-200 ease-in-out hover:text-rose-600' >{icon}</a>
                    ))}
                </div>

                {/* Bottom Form */}
                <div className='p-8 text-left w-full '>
                    <form method='post' action={getFormIOUrl}>
                        <div className='gap-4 w-full'>
                            <div className='flex flex-col'>
                                <label className=' capitalize text-sm py-2 font-extralight'>Name</label>
                                <input type="text" name='name' className='border-2 rounded-lg p-3 flex
                                focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white ' />
                            </div>
                            <div className='flex flex-col'>
                                <label className=' capitalize text-sm py-2 font-extralight'>Phone</label>
                                <input type="text" name='phone' className='border-2 rounded-lg p-3 flex
                                focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white ' />
                            </div>
                            <div className='flex flex-col'>
                                <label className=' capitalize text-sm py-2 font-extralight'>Email</label>
                                <input type="text" name='email' className='border-2 rounded-lg p-3 flex
                                focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white ' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='capitalize text-sm py-2 font-extralight'>Message</label>
                                <textarea type="text" name='message' rows='10' className='border-2 rounded-lg p-3 flex
                                focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none' />
                            </div>
                        </div>
                        <div
                            className='flex items-center justify-center'
                        >
                            <button className=' my-8 bg-gradient-to-r from-rose-600 to-teal-500
                            text-white px-6 py-3 font-medium uppercase rounded-md tracking-wider cursor-pointer
                            hover:scale-105 duration-200'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </Section>
    )
}

export default Contact
