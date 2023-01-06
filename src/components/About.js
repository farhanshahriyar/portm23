import React from 'react'
import './components.css'
import { about } from '../portfolio'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import StackOverFlowIcon from '@material-ui/icons/Code'

const About = () => {
    const { name, role, description, resume, social } = about
  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about-name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about-role'>A {role}.</h2>}
      <p className='about-desc'>{description && description}</p>

      <div className='about-contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.code && (
              <a
                href={social.code}
                aria-label='code'
                className='link link--icon'
              >
                <StackOverFlowIcon />
              </a>
            )}

            {social.facebook && (
              <a
                href={social.facebook}
                aria-label='facebook'
                className='link link--icon'
              >
                <FacebookIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About