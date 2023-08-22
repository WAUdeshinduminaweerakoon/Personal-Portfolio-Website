import React from 'react'
import "./educationAndSkills.css"


const EducationAndSkills = () => {
    return (
      <main className="three container">
        <section className="Education">
        <h2 className='section__title'>
        Education & Skills
        </h2>
           <h3 className="section__subtitle subtitle__centre">My Education</h3> 
        </section> 
        <div className='separator'></div>
        <section className='Skills'>
            <h3 className="section__subtitle subtitle__centre">My Skills</h3> 
            <div className="skills__container grid">
                
            </div>
        </section>
      </main>
    )
  }
  

export default EducationAndSkills