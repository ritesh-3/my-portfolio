import React from 'react'
import Section from './common/section'
import { MyServices, servicesDescription } from '../constants/contsants'

const Services = () => {
    return (
        <Section title='Services' subtitle={servicesDescription}>
            <div className='grid gap-10 lg:grid-cols-2'>
                {
                    MyServices.map(({ id, image, title }) => (
                        <div key={id} className='flex flex-col items-center justify-center p-5 
                        shadow-lg dark:shadow-gray-500 rounded-xl 
                        duration-300 ease-in-out hover:scale-110'>
                            <img src={image} alt={title} className='w-36 h-36 md:w-44 md:h-36 object-contain' />
                            <h3 className='mt-5 text-base'>{title}</h3>
                        </div>
                    ))
                }
            </div>
        </Section>
    )
}

export default Services
