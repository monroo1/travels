import React from "react";
import BlueBtn from "../ui/blu-btn/BluBtn";
import "./TravelGuideline.scss";

const TravelGuideline = () => {
  return (
    <div className="wrapper">
      <div
        className="travel-guideline"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/Travel.png"
          })`,
        }}
      >
        <div className="travel-guideline__content">
          <span className="green-span">Совершите экскурсию</span>
          <h2 className="black-h2">
            Ознакомьтесь с нашим руководством по путешествиям
          </h2>
          <p className="grey-p">
            Для любознательных путешественников, которые хотят пообщаться на
            местном уровне и углубиться в какое-то место. Наши опытные
            путеводители рассказывают о необычных и местных впечатлениях,
            которые помогут вам.
          </p>
          <BlueBtn props={"Начать сейчас"} link={"/packages"} />
        </div>
      </div>
    </div>
  );
};

export default TravelGuideline;
