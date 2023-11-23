import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SettingsContext } from '../contexts/SettingsContext';
import contactInfo from '../data/contactInfo.json';
import arrowDown from "../assets/images/icons/arrow-down.svg";

import "../styles/pages/Contact.css";

const Contact: React.FC = () => {
  const settingsContext = React.useContext(SettingsContext);
  const actualLanguage = settingsContext.language;

  let contact;
  if (actualLanguage === 'pt') {
    contact = contactInfo.texts.pt;
  } else {
    contact = contactInfo.texts.en;
  }
  return (
    <>
      <Header />
      <main className="main-contact">
        <h1 className="contact-title">{ contact.title }</h1>
        <div className="contact-subtitle-container">
          <p className="contact-subtitle">{ contact.subtitle }</p>
          <img src={ arrowDown } alt="" className="contact-subtitle-image" />
        </div>
        {/* <form action="">
          <label htmlFor="name">
            <p>Nome</p>
            <input type="text" name="name" id="name" />
          </label>
          <label htmlFor="email">
            <p>E-mail</p>
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="subject">
            <p>Assunto</p>
            <input type="text" name="subject" id="subject" />
          </label>
          <label htmlFor="message">
            <p>Mensagem</p>
            <textarea name="message" id="message" cols={30} rows={10}></textarea>
          </label>
          <input type="submit" value="Enviar"/>
        </form> */}
      </main>
      <Footer />
    </>
  )
}

export default Contact