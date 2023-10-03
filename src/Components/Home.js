import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/about-background.png";
import BannerImage from "../Assets/fundo03.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div
          className="home-bannerImage-container"
          style={{ marginTop: "-95px", opacity: 0.8 }}
        >
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Seu marceneiro de confiança.</h1>
          <p className="primary-text">
            Faça seu orçamento para ter sua decoração tão desejada. Sua casa
            merece ser bonita aos seus olhos
          </p>
          <button className="secondary-button">
            Peça agora <FiArrowRight />
          </button>
        </div>
        <div className="home-image-container-" style={{ margin: "100px" }}>
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
