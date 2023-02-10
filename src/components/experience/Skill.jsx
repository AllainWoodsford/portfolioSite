import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';



const Skill = (props) => {
  return (
    <article className='experience__details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div>  
            <h4>{props.skill}</h4>
            <small className='text-light'>{props.level}</small>
        </div>
    </article>
  );
}

export default Skill;