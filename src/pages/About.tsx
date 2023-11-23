import React from 'react'
import Header from '../components/Header'
import aboutData from '../data/about.json';
import ProfessionalSection from '../components/ProfessionalSection';
import EducationSection from '../components/EducationSection';
import Footer from '../components/Footer';
import { SettingsContext } from '../contexts/SettingsContext';
import '../styles/pages/About.css';
import StackSection from '../components/StackSection';
import lucasPhoto from '../assets/images/lucas-photo.png';

const About: React.FC = () => {
  const settingsContext = React.useContext(SettingsContext);
  const actualLanguage = settingsContext.language;

  let about;
  if (actualLanguage === 'pt') {
    about = aboutData.pt;
  } else {
    about = aboutData.en;
  }

  return (
    <>
      <Header />
      <main className="about-main">
        <div className="about-section-content description-section">
          <h3 className="description-title">{ about.titles.littleAboutMe }</h3>
          <img src={ lucasPhoto } alt="Lucas's photo" className="profile-photo" />
          <div className="description-paragraph-container">
            {
              about.description.map((paragraph: string, index: number) => {
                return (
                  <p key={index} className="description-paragraph">{paragraph}</p>
                )
              })
            }
          </div>
        </div>
        <section className="stacks-section about-section-content">
          <p className="stacks-section-title">{about.skills.description}</p>
          <StackSection />
        </section>
        <div className="about-section-title-container">
          <h2 className="about-section-title">{ about.titles.experiences }</h2>
        </div>
        <ProfessionalSection experiences={about.experiences} />
        <div className="about-section-title-container">
          <h2 className="about-section-title">{ about.titles.education }</h2>
        </div>
        <EducationSection education={about.education} />
      </main>
      <Footer />
    </>
  )
}

export default About;
