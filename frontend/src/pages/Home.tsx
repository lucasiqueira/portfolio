import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import DownloadPDFButton from '../components/DownloadPDFButton';

import siteInfo from '../data/siteInfo.json';
import lucasPhoto from '../assets/images/lucas-photo.png';
import downloadIcon from '../assets/images/download-icon.svg';
import '../styles/pages/Home.css';

const Home: React.FC = () => {
  const { title, subtitle, description, button, buttonCV } = siteInfo.pt.homepage;
  return (
    <div>
      <Header />
      <main className="home-main">
        <div className="home-main-content">
          <p className="home-main-title">{ title }</p>
          <p className="home-main-subtitle">{ subtitle }</p>
          <p className="home-main-description">{ description }</p>
          <div className="home-main-buttons-container">
            <Link to="/about">
              <button className="home-main-button">{ button }</button>
            </Link>
            <div className="home-main-button-cv">
              <DownloadPDFButton label={ buttonCV } />
              <img src={ downloadIcon } alt="Download" className="home-main-download-icon" />
            </div>
          </div>
        </div>
        <img src={ lucasPhoto } alt="Imagem do Lucas" className="home-main-image" />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
