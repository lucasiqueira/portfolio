import React from 'react'
import { Link } from 'react-router-dom';
import lucasLogo from '../assets/images/lucas-logo.png';
import moonIcon from '../assets/images/yellow-moon.svg';
import '../styles/components/Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={ lucasLogo } alt="Logo do Lucas" className="site-logo-header" />
        </Link>
      </div>
      <div className="header-link-container">
        <Link to="/" className="header-link">Página Inicial</Link>
        <Link to="/about" className="header-link">Sobre</Link>
        <Link to="/projects" className="header-link">Projetos</Link>
        {/* <Link to="/blog" className="header-link">Blog</Link> */}
        <Link to="/contact" className="header-link">Contato</Link>
        <div>
          <button className="color-mode-button">
            <img src={moonIcon} alt="Ícone do modo de cores" className="color-mode-icon" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;
