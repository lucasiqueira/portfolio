import React from 'react';
import { ProjectType } from '../types/ProjectType';
import { stackImages } from '../utils/stackImage';
import '../styles/components/ProjectCard.css';
import { projectImages } from '../utils/projectImage';
import deployIcon from '../assets/images/icons/deploy-icon.svg';
import githubMiniIcon from '../assets/images/icons/github-mini-icon.svg';

const ProjectCard: React.FC<{project: ProjectType}> = ({project}) => {
  return (
    <div className="project-container">
      <div>
        <img src={projectImages.Portfolio} alt={project.title} className="project-image" />
        <div className="project-title">{project.title}</div>
        <div className="project-description">{project.description}</div>
        <div className="project-stack-icon-container">
          {
            project.stacks.map((stack, index) => {
              return (
                <img className="project-stack-icon" key={ index } src={ stackImages[stack as keyof typeof stackImages] } alt={ stack } />
              )
            })
          }
        </div>
        <div className="project-link-container">
          <a className="project-link" href={project.github} target="_blank">
            <button className="project-link-button">GitHub</button>
            <img className="project-link-icon" src={githubMiniIcon} alt="" />
          </a>
          <a className="project-link" href={project.link} target="_blank">
            <button className="project-link-button">Aplicação</button>
            <img className="project-link-icon" src={deployIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard