import React from "react";
import Logo from "../Assets/Logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { Facebook } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <Facebook />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualidade</span>
          <span>Ajuda</span>
          <span>Compartilhar</span>
          <span>Carreiras</span>
          <span>Depoimentos</span>
          <span>Trabalho</span>
        </div>
        <div className="footer-section-columns">
          <span>(55)99999999</span>
          <span>madeira@boa.com</span>
          <span>wood@boa.com</span>
          <span>contato@boa.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Termos & Condições</span>
          <span>Política de Privacidade</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
