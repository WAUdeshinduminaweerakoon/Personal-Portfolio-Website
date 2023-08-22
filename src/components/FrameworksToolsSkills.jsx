import React from 'react';
import {  frameworksToolsSkills } from '../data';
import ProgressBar from "@ramonak/react-progress-bar";

const FrameworksToolsSkills = () => {
  return (
    <>
     { frameworksToolsSkills.map(({title, percentage}, index)=>{
        return(
            <div className="progress__box" key={index}>


                <h3 className='skills__title'>{title}</h3>
                <div className='progress__line'>
                    <ProgressBar strokeWidth={7.5} text={`${percentage}`}
                    completed ={percentage}/>
                </div>
                
               

            </div>
        );
     })}
    </>
    
  )
}

export default FrameworksToolsSkills