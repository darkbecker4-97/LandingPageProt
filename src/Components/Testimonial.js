import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Depoimentos</p>
        <h1 className="primary-heading">O Que Dizen</h1>
        <p className="primary-text">
          O Davi realmente faz um trabalho incrível com madeira
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p className="">
          Realmente gostei do resultado dos trabalhos que fez para mim.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>João Alberto</h2>
      </div>
    </div>
  );
};

export default Testimonial;
