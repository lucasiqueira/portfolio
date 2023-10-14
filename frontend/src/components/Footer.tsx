import React from 'react';
import contactInfo from '../data/contactInfo.json';
import linkedinLogo from '../assets/images/black-linkedin-logo.svg';
import githubLogo from '../assets/images/github-logo.svg';
import xLogo from '../assets/images/x-logo.svg';
import telegramLogo from '../assets/images/telegram-logo.svg';
import whatsappLogo from '../assets/images/whatsapp-logo.svg';
import mailLogo from '../assets/images/mail-logo.svg';
import '../styles/components/Footer.css';


const Footer: React.FC = () => {
  const { email, linkedin, github, x, telegram, whatsapp } = contactInfo;
  return (
    <footer>
      <section className="logo-section-footer">
        <a href={linkedin} className="logo-footer-container">
          <img src={linkedinLogo} alt="Link para o LinkedIn" className="logo-footer" />
        </a>
        <a href={github} className="logo-footer-container">
          <img src={githubLogo} alt="Link para o GitHub" className="logo-footer" />
        </a>
        <a href={`mailto:${email}`} className="logo-footer-container">
          <img src={mailLogo} alt="Link para e-mail" className="logo-footer" />
        </a>
        <a href={x} className="logo-footer-container">
          <img src={xLogo} alt="Link para o X" className="logo-footer" />
        </a>
        <a href={telegram} className="logo-footer-container">
          <img src={telegramLogo} alt="Link para o Telegram" className="logo-footer" />
        </a>
        <a href={whatsapp} className="logo-footer-container">
          <img src={whatsappLogo} alt="Link para o WhatsApp" className="logo-footer" />
        </a>
      </section>
      <section>
        <p>© 2023 by Lucas Siqueira | Todos os Direitos Reservados.</p>
        <p>Desenvolvido em Goiânia, Brasil</p>
      </section>
    </footer>
  )
}

export default Footer;
