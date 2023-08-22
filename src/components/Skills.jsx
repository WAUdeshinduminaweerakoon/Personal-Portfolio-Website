import React from 'react';
import { skills } from '../data';
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
  return (
    <>
     {skills.map(({title, percentage}, index)=>{
        return(
            <div className="progress__box" key={index}>
                <div className='progress__line'>
                    <ProgressBar strokeWidth={7.5} text={`${percentage}`}
                    completed ={percentage}/>
                </div>
                <h3 className='skills__title'>{title}</h3>
               

            </div>
        );
     })}
    </>
  )
}

export default Skills