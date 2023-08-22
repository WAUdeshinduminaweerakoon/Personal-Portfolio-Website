import React from 'react'
import "./educationAndSkills.css"
import LanguageSkills from '../../components/LanguageSkills'
import DataBaseSkills from '../../components/DataBaseSkills'
import FrameworksToolsSkills from '../../components/FrameworksToolsSkills'


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
            <h3 className="section__subtitle subtitle__centre">Language Skills</h3> 
            <div className="skills__container grid">
                <LanguageSkills/>
            </div>
        </section>

        <div className='separator'></div>

        <section className='Skills'>
            <h3 className="section__subtitle subtitle__centre">DataBase Skills</h3> 
            <div className="skills__container grid">
                <DataBaseSkills/>
            </div>
        </section>

        <div className='separator'></div>
        
        <section className='Skills'>
            <h3 className="section__subtitle subtitle__centre">frameworks & Tools Skills</h3> 
            <div className="skills__container grid">
                <FrameworksToolsSkills/>
            </div>
        </section>
      </main>
    )
  }
  

export default EducationAndSkills