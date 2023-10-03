import React from "react";
import PickWood from "../Assets/madeiras.png";
import ScheduleBudget from "../Assets/marce.png";
import DeliveryWood from "../Assets/serrote.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickWood,
      title: "Tipo de Madeira",
      text: "Escolha qual tipo de madeira você quer para que seu móvel seja construido.",
    },
    {
      image: ScheduleBudget,
      title: "Agendar Orçamento",
      text: "Agende um orçamento para sua necessidade.",
    },
    {
      image: DeliveryWood,
      title: "Entrega de Produto",
      text: "Nós disponibilizamos a entrega de seu produto.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">MEU TRABALHO</p>
        <h1 className="primary-heading">Como Funciona</h1>
        <p className="primary-text">
          Cada peça criada por nossos talentosos marceneiros é uma obra-prima
          cuidadosamente trabalhada. Com atenção meticulosa aos detalhes, eles
          transformam a madeira em móveis excepcionais que são duradouros,
          funcionais e esteticamente impressionantes.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
