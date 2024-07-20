import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import DownloadPDFButton from '../components/DownloadPDFButton';

import siteInfo from '../data/siteInfo.json';
import downloadIcon from '../assets/images/icons/download-icon.svg';
import '../styles/pages/Home.css';
import { SettingsContext } from '../contexts/SettingsContext';
import lucasPhoto from "../assets/images/lucas-photo.png";

const Home: React.FC = () => {
  const settingsContext = React.useContext(SettingsContext);
  const actualLanguage = settingsContext.language;


  let homepage;
  if (actualLanguage === 'pt') {
    homepage = siteInfo.pt.homepage;
  } else {
    homepage = siteInfo.en.homepage;
  }

  const { title, subtitle, description, learnMoreButton, projectsButton, buttonCV, cvTitle } = homepage;
  return (
    <div>
      <Header />
      <main className="home-main">
        <div className="home-main-content">
          <img src={lucasPhoto} alt="" className="photo-home" />
          <p className="home-main-title">{ title }</p>
          <p className="home-main-subtitle">{ subtitle }</p>
          <p className="home-main-description">{ description }</p>
          <div className="home-main-buttons-container">
            <div className="home-main-redirect-button-container">
              <Link to="/about">
                <button className="home-main-button">{ learnMoreButton }</button>
              </Link>
              <Link to="/projects" className="projects-button">
                <button className="home-main-button">{ projectsButton }</button>
              </Link>
            </div>
            <div className="home-main-button-cv">
              <DownloadPDFButton label={ buttonCV } fileName={ cvTitle } />
              <img src={ downloadIcon } alt="Download" className="home-main-download-icon" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
