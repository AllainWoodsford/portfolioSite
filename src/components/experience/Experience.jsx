import React from 'react';
import './experience.css';
import {frontEndSkills , backEndSkills} from './index.js';
import Skill from './Skill';

const Experience = () => {



  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            {frontEndSkills.map((item,index) => {return(
              <Skill 
                key={ 'FE'+index+ item.skill} 
                skill={item.skill}
                level={item.level}
              />
            )      
            })}
          </div>
        </div>
        <div className='experience_backend'>
        <h3>Backend Development</h3>
        <div className='experience__content'>
            {backEndSkills.map((item,index) => {return(
              <Skill 
                key={ 'BE'+index+ item.skill} 
                skill={item.skill}
                level={item.level}
              />
            )      
            })}
          </div>  
      </div>
    </div>
   </section>
  )
}

export default Experience;