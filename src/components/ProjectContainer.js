import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './components.css'

const ProjectContainer = ({ project }) => (
    <div className='project'>
      <h3>{project.name}</h3>
  
      <p className='project-description'>{project.description}</p>
      {project.stack && (
        <ul className='project-stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project-stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}
  
      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}
  
      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  )
  
  export default ProjectContainer