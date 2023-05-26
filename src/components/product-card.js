import React from "react";
import "./productCard.css";
import { Link } from "react-router-dom";
const ProductCard = ({img, lavozim, fio}) => {
  return (
    <div>
      <div class="first hero">
        <img
          class="hero-profile-img"
          src={img}
          alt=""
        />
        <div class="hero-description-bk"></div>
        
        <div class="hero-description">
          <p className="text-white font-medium">{lavozim}</p>
          <p className="text-white font-medium" >{fio}</p>
        </div>
        <div class="hero-date">
          <p>20.02.2019</p>
        </div>
        <div class="hero-btn">
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
