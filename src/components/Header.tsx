import React from 'react'
import { Link } from 'react-router-dom';
import lucasLogo from '../assets/images/lucas-logo.png';
import siteInfo from '../data/siteInfo.json';
// import moonIcon from '../assets/images/yellow-moon.svg';
// import sunIcon from '../assets/images/yellow-sun.svg';
import '../styles/components/Header.css';
import { NavbarType } from '../types/NavbarType';
import { SettingsContext } from '../contexts/SettingsContext';

const Header: React.FC = () => {
  const settingsContext = React.useContext(SettingsContext);

  // const handleToggleColorMode = () => {
  //   settingsContext.toggleTheme();
  // }

  const handleToggleLanguage = () => {
    settingsContext.toggleLanguage();
  }
  
  const actualLanguage = settingsContext.language;
  
  let navbar: NavbarType[] = [];
  if (actualLanguage === 'pt') {
    navbar = siteInfo[actualLanguage].header.navbar;
  } else {
    navbar = siteInfo.en.header.navbar;
  }

  return (
    <header>
      <div>
        <Link to="/">
          <img src={ lucasLogo } alt="Logo do Lucas" className="site-logo-header" />
        </Link>
      </div>
      <nav className="header-link-container">
        {
          navbar.map((item: NavbarType, index: number) => {
            return (item.active) ? (
              <Link to={ item.url } className="header-link" key={ index }>{ item.title }</Link>
            ) : null;
          })
        }
        <button className="language-toggle-button" onClick={handleToggleLanguage}>
          { (settingsContext?.language === 'pt') ? 'EN' : 'PT'}
        </button>
        {/* <button className="color-mode-button" onClick={ handleToggleColorMode }>
          <img src={ 
            (settingsContext?.theme === 'light') ? sunIcon : moonIcon
           } alt="Ícone do modo de cores" className="color-mode-icon" />
        </button> */}
      </nav>
    </header>
  )
}

export default Header;
