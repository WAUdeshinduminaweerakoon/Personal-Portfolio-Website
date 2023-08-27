import React from 'react'

const ProjectItem = ({img, title, detaile}) => {
  return (
    <div className='project__item'>
        <img src={img} alt="" className="project__img" />

    </div>
  )
}

export default ProjectItem