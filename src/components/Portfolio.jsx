import React from 'react'
import Section from './common/section'
import { PortfolioProjects, portfolioDescription } from '../constants/contsants'
import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa'

const Portfolio = () => {
    return (
        <Section title='Portfolio' subtitle={portfolioDescription}>
            <div className='grid  gap-10 lg:gap-14 lg:grid-cols-2 '>
                {PortfolioProjects.map(({ id, image, title, github, demo }) => (
                    <div key={id} className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl ' >
                        <img src={image} alt={title} className='w-2/3 rounded-lg' />
                        <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                            <h2>{title}</h2>
                            <a className='text-2xl cursor-pointer duration-150 hover:scale-110 ' href={github} target='_blank' rel='noopener noreferer' > <FaGithub /> </a>
                            <a className='text-2xl  cursor-pointer duration-150 hover:scale-110' href={demo} target='_blank' rel='noopener noreferer'> <FaExternalLinkSquareAlt /> </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Portfolio
