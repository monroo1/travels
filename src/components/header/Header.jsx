import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header wrapper">
      <div className="header-left">
        <div>
          <img src={`${process.env.PUBLIC_URL}/assets/Logo.svg`} alt="logo" />
        </div>
      </div>
      <div className="header-right">
        <div>Главная</div>
        <div>О нас</div>
        <div>Пакеты</div>
        <div>Контакты</div>
        <div>FAQ</div>
      </div>
    </div>
  );
};

export default Header;
