import React from 'react';

import '../styles/pages/NotFound.css';

const NotFound: React.FC = () => {
  const handleClick = () => {
    window.location.href = '/';
  }

  return (
    <div>
      <main className="not-found-main">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-text">HOUSTON, WE HAVE A PROBLEM!</p>
        <button className="not-found-button" onClick={handleClick}>BACK TO EARTH </button>
      </main>
    </div>
  );
};

export default NotFound;
