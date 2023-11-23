import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SettingsContext } from '../contexts/SettingsContext';

import projectsInfo from '../data/projectsInfo.json';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const settingsContext = React.useContext(SettingsContext);
  const actualLanguage = settingsContext.language;


  let projects;
  if (actualLanguage === 'pt') {
    projects = projectsInfo.pt;
  } else {
    projects = projectsInfo.pt;
  }

  return (
    <>
      <Header />
      <main>
        <div>
          <h1>{ projects.pageTitle }</h1>
          <h3>{ projects.pageDescription }</h3>
        </div>
        <section>
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