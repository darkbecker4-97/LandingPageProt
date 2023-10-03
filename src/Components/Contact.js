import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Tem uma Pergunta em Mente?</h1>
      <h1 className="primary-heading">Deixe-nos ajudá-lo</h1>
      <div className="contact-form-container">
        <input type="text" placeholder="Seu_email@gmail.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;
