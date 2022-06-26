import React from "react";
import "./StepsJourney.scss";

const StepsJourney = () => {
  return (
    <div className="steps-journey wrapper">
      <div className="steps-journey__top">
        <span className="green-span">Три шага для идеального путешествия</span>
        <h2 className="black-h2">Найдите совершенство в путешествии</h2>
        <p className="grey-p">
          Когда речь заходит о планировании роскошных путешествий, мы первые,
          потому что мы выполняем больше работы, чем кто-либо другой.
        </p>
      </div>
      <div className="steps-journey__bottom">
        <div className="steps-journey__bottom-card">
          <div className="steps-journey__bottom-card__img">
            <img src={`${process.env.PUBLIC_URL}/assets/Chat.png`} alt="" />
          </div>
          <div className="steps-journey__bottom-card__content">
            <h3>Расскажите нам, что вы хотите</h3>
            <p className="grey-p">
              Заполните 2-минутную анкету о том, как вам нравится путешествовать
            </p>
          </div>
        </div>
        <div className="steps-journey__bottom-card">
          <div className="steps-journey__bottom-card__img">
            <img src={`${process.env.PUBLIC_URL}/assets/Calendar.png`} alt="" />
          </div>
          <div className="steps-journey__bottom-card__content">
            <h3>Поделитесь своими предпочтениями в путешествии</h3>
            <p className="grey-p">
              Все происходит онлайн, мы рекомендуем все в соответствии с вашими
              предпочтенияими
            </p>
          </div>
        </div>
        <div className="steps-journey__bottom-card">
          <div className="steps-journey__bottom-card__img">
            <img src={`${process.env.PUBLIC_URL}/assets/Star.png`} alt="" />
          </div>
          <div className="steps-journey__bottom-card__content">
            <h3>Мы дадим вам рекомендации</h3>
            <p className="grey-p">
              Once you’re happy with your final plan, We handle everything for
              you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsJourney;
