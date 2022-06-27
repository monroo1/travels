import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header-left">
          <div>
            <img src={`${process.env.PUBLIC_URL}/assets/Logo.svg`} alt="logo" />
          </div>
        </div>
        <div className="header-right">
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
          <Link to="/packages">Пакеты</Link>
          <Link to="/contacts">Контакты</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
