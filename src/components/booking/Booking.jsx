import React from "react";
import BlueBtn from "../ui/blu-btn/BluBtn";
import "./Booking.scss";

const Booking = () => {
  return (
    <div className="booking">
      <div className="wrapper">
        <div className="booking-left">
          <img src={`${process.env.PUBLIC_URL}/assets/Booking.png`} alt="img" />
        </div>
        <div className="booking-right">
          <span className="green-span">Забронируйте сейчас</span>
          <h1>Наслаждайтесь поездкой вместе с TripGoal</h1>
          <p className="grey-p">
            Подумываете о том, чтобы отдохнуть от повседневной суеты? Планируете
            уехать за город со своими близкими, чтобы весело и качественно
            провести время с минимальными затратами?
          </p>
          <BlueBtn props={"Начать сейчас"} link={"/about"} />
        </div>
      </div>
    </div>
  );
};

export default Booking;
