import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import "./Location.scss";
import "swiper/scss";
import "swiper/scss/navigation";

const Location = () => {
  return (
    <div className="location">
      <div className="wrapper">
        <div className="location-content">
          <span className="green-span">Расположение</span>
          <h2 className="black-h2">Рекомендуемые Места</h2>
          <p className="grey-p">
            Путешествия — это моя жизнь. С 1999 года я безостановочно
            путешествую по миру. Если вы также любите путешествовать, вы
            находитесь в правильном месте!
          </p>
        </div>
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
        >
          <SwiperSlide>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Frame 1.png`}
              width="370px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Frame 2.png`}
              width="370px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Frame 3.png`}
              width="370px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Frame 1.png`}
              width="370px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Frame 2.png`}
              width="370px"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Frame 3.png`}
              width="370px"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Location;
