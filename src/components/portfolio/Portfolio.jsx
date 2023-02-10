import React from 'react';
import './portfolio.css';
import {images} from '../../assets/constants';
import portfolioData from '../../assets/constants/portfolioData';
import PortfolioEntry from './PortfolioEntry';
const Portfolio = () => {

  const projectImages = [images.portfolio1, images.portfolio2, images.portfolio3, images.portfolio4]

  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className='container portfolio__container'>
      {portfolioData.map((project,index) => {return(
        <PortfolioEntry 
          key={project.title + index}
          id={project.id}
          image={projectImages[index]}
          title={project.title}
          description={project.description}
          github={project.github}
          demo={project.demo}
        />
      )})}
    </div>
    </section>
  )
}

export default Portfolio;