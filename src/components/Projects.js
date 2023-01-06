import React from 'react'
import uniqid from 'uniqid'
import './components.css'
import ProjectContainer from './ProjectContainer'
import { projects } from '../portfolio'

const Projects = () => {
    if (!projects.length) return null
  return (
    <section id='projects' className='section projects'>
    <h2 className='section-title'>Projects</h2>

    <div className='projects-grid'>
      {projects.map((project) => (
        <ProjectContainer key={uniqid()} project={project} />
      ))}
    </div>
  </section>
  )
}

export default Projects