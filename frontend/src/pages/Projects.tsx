import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SettingsContext } from '../contexts/SettingsContext';

import projectsInfo from '../data/projectsInfo.json';
import ProjectCard from '../components/ProjectCard';

import '../styles/pages/Projects.css';

const Projects: React.FC = () => {
  const settingsContext = React.useContext(SettingsContext);
  const actualLanguage = settingsContext.language;


  let projects;
  if (actualLanguage === 'pt') {
    projects = projectsInfo.pt;
  } else {
    projects = projectsInfo.en;
  }

  return (
    <>
      <Header />
      <main className="main-projects">
        <div>
          <h1 className="projects-title">{ projects.pageTitle }</h1>
          <p className="projects-subtitle">{ projects.pageSubtitle }</p>
        </div>
        <section className="projects-section">
          {
            projects.projects.map((project, index) => {
              return (
                <ProjectCard key={ index } project={ project } />
              )
            })
          }
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Projects;