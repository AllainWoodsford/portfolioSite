import React from 'react';

const PortfolioEntry = (props) => {
  return (
    <article className='portfolio__item'>
    <div className='portfolio__item-image'>
      <img src={props.image} alt={`portfolio ${props.id}`} />
    </div>
    <div className='portfolio__item-description'>
    <h3>{props.title}</h3>
    <h5 className='text-light'>{props.description}</h5>
    </div>
    <div className='portfolio__item-cta'>
      <a href={props.github} className='btn' target='_blank' rel="noreferrer">Github</a>
      <a href={props.demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
    </div>
  </article>
  )
}

export default PortfolioEntry;