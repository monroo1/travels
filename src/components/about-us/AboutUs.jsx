import React from "react";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="about wrapper">
      <div className="about-left">
        <div className="about-left__top">
          <span className="green-span">О нас</span>
          <h2 className="black-h2">Идеальное место для вас и вашей семьи</h2>
          <p className="grey-p">
            Как путешествия могут стать одним из лучших инструментов личностного
            роста. Мы делимся некоторыми жизненными уроками, которые мы усвоили
            в дороге и которые помогли нам понять, что такое эмпатия,
            внимательность, медитация, зоны комфорта, двустороннее
            повествование, присутствие, связь и многое другое.
          </p>
        </div>
        <div className="about-left__bottom">
          <div className="about-left__bottom-card">
            <h4>10M+</h4>
            <span>Посетителей</span>
          </div>
          <div className="about-left__bottom-card">
            <h4>109</h4>
            <span>Отелей</span>
          </div>
          <div className="about-left__bottom-card">
            <h4>29</h4>
            <span>Магазинов</span>
          </div>
          <div className="about-left__bottom-card">
            <h4>18</h4>
            <span>Связанные места</span>
          </div>
        </div>
      </div>
      <div className="about-right">
        <img src={`${process.env.PUBLIC_URL}/assets/Group.png`} alt="img" />
      </div>
    </div>
  );
};

export default AboutUs;
