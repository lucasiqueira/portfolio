import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Bem-vindo à página inicial!</h1>
      <p>Aqui você pode começar a construir sua aplicação.</p>
      <Footer />
    </div>
  );
};

export default Home;
