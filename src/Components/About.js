import React from "react";
import AboutBackground from "../Assets/background.png";
import AboutBackgroundImage from "../Assets/imgAbout.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div
        className="about-background-image-container"
        style={{ width: "800px", height: "auto", marginLeft: "-200px" }}
      >
        <img src={AboutBackground} alt="" style={{ opacity: 0.7 }} />
      </div>
      <div className="about-section-image-container">
        <img
          src={AboutBackgroundImage}
          alt=""
          style={{ width: "500px", height: "auto" }}
        />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre</p>
        <h1 className="primary-heading">
          Descubra a beleza da marcenaria artesanal, onde a precisão se encontra
          com a paixão!
        </h1>
        <p className="primary-text" style={{ color: "#333333" }}>
          Cada peça criada por nossos talentosos marceneiros é uma obra-prima
          cuidadosamente trabalhada. Com atenção meticulosa aos detalhes, eles
          transformam a madeira em móveis excepcionais que são duradouros,
          funcionais e esteticamente impressionantes.
        </p>
        <p className="primary-text" style={{ color: "#333333" }}>
          Além da qualidade incomparável, a marcenaria artesanal também oferece
          a oportunidade de possuir peças únicas, feitas com materiais
          sustentáveis. Cada mobiliário carrega consigo o charme do trabalho
          manual, resultando em uma conexão emocional entre você e a peça.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Saiba mais</button>
          <button className="watch-video-button">
            {""}
            <BsFillPlayCircleFill />
            Assista o vídeo
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
