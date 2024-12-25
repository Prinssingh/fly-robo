import React from "react";
import "../../styles/home/card_slider.css";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import { FreeMode } from "swiper/modules";
const CardSlider = (props) => {
  const { items } = props;

  const breakpoints = {
    425: {
      slidesPerView: 1,
      spaceBetween: 35,
    },
    475: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    981: {
      slidesPerView: 5,
      spaceBetween: 2,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 14,
    },
    1280: {
      slidesPerView: 7,
      spaceBetween: 15,
    },
    1309: {
      slidesPerView: 6,
      spaceBetween: 12,
    },
    1380: {
      slidesPerView: 7,
      spaceBetween: 8,
    },
  };

  return (
    <>
      <div className="flex_main_Container">
        <div className="mainHeader">
          {items.map((item, index) => {
            return <h3 key={index}>{item.cadegaryName}</h3>;
          })}
          <div className="line"></div>
        </div>

        <div className="container py-2 px-1  justify-content-center  ">
          <Swiper
            breakpoints={breakpoints}
            //   slidesPerView={7}
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            //   spaceBetween={30}
          >
            {items.map((item, index) => {
              return (
                <SwiperSlide key={index} className=" cover w-auto ">
                  <Card item={item} open={props.open} className="mt-1 mb-1" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CardSlider;
