import React from 'react'
import uniqid from 'uniqid'
import { skills } from '../portfolio'
import './components.css'

const Skills = () => {
    if (!skills.length) return null
  return (
    <section className='section skills' id='skills'>
    <h2 className='section-title'>Skills</h2>
    <ul className='skills-list'>
      {skills.map((skill) => (
        <li key={uniqid()} className='skills-list-item btn btn--plain'>
          {skill}
        </li>
      ))}
    </ul>
  </section>
  )
}

export default Skills