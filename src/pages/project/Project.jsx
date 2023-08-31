import React from 'react';
import { project } from '../../data';
import ProjectItem from '../../components/ProjectItem';
import "./project.css";

const Project = () => {
  return (
    <section className="project__section">
      <h2 className="section__title">My <span>Project</span></h2>
      <div className="project__container">
        {project.map((item) =>{
          return <ProjectItem key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default Project