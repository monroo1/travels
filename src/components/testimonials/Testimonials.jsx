import React from "react";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div
        className="wrapper"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/Testimonials.png"
          })`,
        }}
      >
        <div className="testimonials-top">
          <span className="green-span">Рекомендации</span>
          <h2 className="black-h2">Что наши клиенты говорят о нас</h2>
          <p className="grey-p">
            Комплимент клиентов является наиболее важным для улучшения
            бизнес-сервиса
          </p>
        </div>
        <div className="testimonials-bottom">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 16.582H7.85156V18.8725C7.85156 20.181 6.78703 21.2455 5.47852 21.2455H2.46094V27.1049H5.47852C10.0179 27.1049 13.7109 23.4119 13.7109 18.8725V2.87109H0V16.582Z"
              fill="#3685FB"
            />
            <path
              d="M16.2891 2.87109V16.582H24.1406V18.8725C24.1406 20.181 23.0761 21.2455 21.7676 21.2455H18.75V27.1049H21.7676C26.307 27.1049 30 23.4119 30 18.8725V2.87109L16.2891 2.87109Z"
              fill="#3685FB"
            />
          </svg>

          <p className="grey-p" style={{ marginTop: 10 + "px" }}>
            Я путешествовал и исследовал несколько направлений, используя эту
            платформу, без сомнения, она настоятельно рекомендуется для
            путешествий, потому что она удобна и сервис отличный.
          </p>
          <div className="testimonials-bottom__author">
            <p>Адам Л. Брайан</p>
            <span>Путешественник</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
