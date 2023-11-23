import React from 'react'
import Header from '../components/Header'
import aboutData from '../data/about.json';
import ProfessionalSection from '../components/ProfessionalSection';
import EducationSection from '../components/EducationSection';
import Footer from '../components/Footer';
import { SettingsContext } from '../contexts/SettingsContext';
import '../styles/pages/About.css';
import StackSection from '../components/StackSection';

const About: React.FC = () => {
  const settingsContext = React.useContext(SettingsContext);
  const actualLanguage = settingsContext.language;

  let about;
  if (actualLanguage === 'pt') {
    about = aboutData.pt;
  } else {
    about = aboutData.pt;
  }

  return (
    <>
      <Header />
      <main>
        {
          aboutData.pt.description.map((paragraph: string, index: number) => {
            return (
              <p key={index}>{paragraph}</p>
            )
          })
        }
        <section className="stacks-section">
          <p>{about.skills.description}</p>
          <StackSection />
        </section>
        <h2>Experiência</h2>
        <ProfessionalSection experiences={about.experiences} />
        <h2>Educação</h2>
        <EducationSection education={about.education} />
      </main>
      <Footer />
    </>
  )
}

export default About;
