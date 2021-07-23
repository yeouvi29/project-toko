import React from "react";
import "./sass/main.scss";
import { ReactComponent as Arrow } from "./imgs/chevron-down.svg";
import { ReactComponent as Eye } from "./imgs/eye.svg";
import { ReactComponent as Star } from "./imgs/star-full.svg";
import Toko from "./imgs/connect.jpg";

function Gallery() {
  return (
    <div className="main">
      <div className="top">
        <h3 className="title">Models</h3>
        <div className="sort">
          <div className="sort-nav sort-category">
            CATEGORIES
            <Arrow className="sort-icon" />
          </div>
          <div className="sort-nav sort-filter">
            FILTERS
            <Arrow className="sort-icon" />
          </div>
          <div className="sort-nav sort-title">SORT BY</div>
          <div className="sort-by">
            <Star className="sort-by-icon icon-star" />
            <Eye className="sort-by-icon" />
          </div>
        </div>
      </div>
      <section className="gallery">
        <div className="gallery-container">
          <img className="gallery-content" src={Toko} alt="cat" />
          <div className="gallery-title-container">
            <div className="gallery-title">ABC</div>
          </div>
        </div>
        <div className="gallery-container">
          <img className="gallery-content" src={Toko} alt="cat" />
          <div className="gallery-title-container">
            <div className="gallery-title">ABC</div>
          </div>
        </div>
        <div className="gallery-container">
          <img className="gallery-content" src={Toko} alt="cat" />
          <div className="gallery-title-container">
            <div className="gallery-title">ABC</div>
          </div>
        </div>
        <div className="gallery-container">
          <img className="gallery-content" src={Toko} alt="cat" />
          <div className="gallery-title-container">
            <div className="gallery-title">ABC</div>
          </div>
        </div>
        <div className="gallery-container">
          <img className="gallery-content" src={Toko} alt="cat" />
          <div className="gallery-title-container">
            <div className="gallery-title">ABC</div>
          </div>
        </div>
        <div className="gallery-container">
          <img className="gallery-content" src={Toko} alt="cat" />
          <div className="gallery-title-container">
            <div className="gallery-title">ABC</div>
          </div>
        </div>
        <div className="gallery-container">
          <img className="gallery-content" src={Toko} alt="cat" />
          <div className="gallery-title-container">
            <div className="gallery-title">ABC</div>
          </div>
        </div>
        <div className="gallery-container">
          <img className="gallery-content" src={Toko} alt="cat" />
          <div className="gallery-title-container">
            <div className="gallery-title">ABC</div>
          </div>
        </div>
        <div className="gallery-container">
          <img className="gallery-content" src={Toko} alt="cat" />
          <div className="gallery-title-container">
            <div className="gallery-title">ABC</div>
          </div>
        </div>
        <div className="gallery-container">
          <img className="gallery-content" src={Toko} alt="cat" />
          <div className="gallery-title-container">
            <div className="gallery-title">ABC</div>
          </div>
        </div>
        <div className="gallery-container">
          <img className="gallery-content" src={Toko} alt="cat" />
          <div className="gallery-title-container">
            <div className="gallery-title">ABC</div>
          </div>
        </div>
        <div className="gallery-container">
          <img className="gallery-content" src={Toko} alt="cat" />
          <div className="gallery-title-container">
            <div className="gallery-title">ABC</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
