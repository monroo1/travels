import React from "react";
import BlueBtn from "../ui/blu-btn/BluBtn";
import "./Gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery wrapper">
      <div className="gallery-header">
        <div className="gallery-header__left">
          <span className="green-span">Социальные сети</span>
          <h2 className="black-h2">Посетите нашу группу VK</h2>
        </div>
        <BlueBtn props={"Поерейти в VK"} />
      </div>
      <div className="gallery-images">
        <img
          src={`${process.env.PUBLIC_URL}/assets/Gallery.png`}
          alt="gallery"
          width="100%"
        />
      </div>
    </div>
  );
};

export default Gallery;
