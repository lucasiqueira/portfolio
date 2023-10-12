import React from 'react'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <div>Lucas Siqueira</div>
      <div>
        <Link to="/">Página Inicial</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contato</Link>
      </div>
    </header>
  )
}

export default Header;
