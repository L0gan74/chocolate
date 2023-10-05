"use client";

import React, { useRef, useState } from "react";

import style from "../main.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Our: React.FC = () => {
  return (
    <section className={style.our}>
      <h2>
        Our <span>pRODUCTS</span>
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 18,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={style.swiper}>
            <Image src="/plitka.png" width={230} height={201} alt="chocolate" />
            <h3>orange</h3>
            <p>Dark chocolate</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.swiper}>
            <Image src="/plitka.png" width={230} height={201} alt="chocolate" />
            <h3>orange</h3>
            <p>Dark chocolate</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.swiper}>
            <Image src="/plitka.png" width={230} height={201} alt="chocolate" />
            <h3>orange</h3>
            <p>Dark chocolate</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.swiper}>
            <Image src="/plitka.png" width={230} height={201} alt="chocolate" />
            <h3>orange</h3>
            <p>Dark chocolate</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.swiper}>
            <Image src="/plitka.png" width={230} height={201} alt="chocolate" />
            <h3>orange</h3>
            <p>Dark chocolate</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.swiper}>
            <Image src="/plitka.png" width={230} height={201} alt="chocolate" />
            <h3>orange</h3>
            <p>Dark chocolate</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Our;
