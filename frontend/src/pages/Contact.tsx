import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <form action="">
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
        </form>
      </main>
      <Footer />
    </>
  )
}

export default Contact