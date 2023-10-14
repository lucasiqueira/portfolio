import React from 'react'
import Header from '../components/Header'
import aboutData from '../data/about.json';
import ProfessionalSection from '../components/ProfessionalSection';
import EducationSection from '../components/EducationSection';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <section>
        <div>
          {
            aboutData.pt.description.map((paragraph: string, index: number) => {
              return (
                <p key={index}>{paragraph}</p>
              )
            })
          }
        </div>
      </section>
      <h2>Experiência</h2>
      <ProfessionalSection experiences={aboutData.pt.experiences} />
      <h2>Educação</h2>
      <EducationSection education={aboutData.pt.education} />
    </>
  )
}

export default About;
