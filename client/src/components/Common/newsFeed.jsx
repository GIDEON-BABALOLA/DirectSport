import React from "react";
import "../Styles/newsFeed.css";
import { Swiper, SwiperSlide,  } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {EffectCoverflow, Pagination, Navigation} from "swiper/modules"

function NewsFeed() {
  return (
    <div className="newsFeed-body">
  <div className="newsFeed-container">
  <h1 className="newsFeed-heading heading">Trending-News</h1>
  <Swiper
  effect={ "coverflow "}
  grabCursor = { true }
  centeredSlides = { true }
  loop = { true }
  slidesPerView={"auto"}
  coverflowEffect={
    {
      rotate : 0,
      stretch: 0,
      depth : 100,
      modifier : 2.5,
    }
  }
  pagination={{el : ".swiper-pagination", clickable: true }}
  navigation = {{
    nextEl : "swiper-button-next",
    prevEl : "swiper-button-prev",
    clickable: true,
  }}
  modules = {[EffectCoverflow, Pagination, Navigation]}
  className="swiper_container"
  >
    <SwiperSlide className="swiper-slide">
      <img src={"https://res.cloudinary.com/dddunuudr/image/upload/v1698749135/file-upload/Home-page/aa55ong23ytiivey3wgc.jpg"} alt="swiper"/>
    </SwiperSlide>
    <SwiperSlide className="swiper-slide">
      <img src={"https://res.cloudinary.com/dddunuudr/image/upload/v1698842687/file-upload/Home-page/fikockoimq8rg1mrqupe.jpg"} alt="swiper"/>
    </SwiperSlide>
    <SwiperSlide className="swiper-slide">
      <img src={"https://res.cloudinary.com/dddunuudr/image/upload/v1698845208/file-upload/Home-page/gyakitplkvjpahlzxhyo.jpg"} alt="swiper" />
    </SwiperSlide>
    <SwiperSlide className="swiper-slide">
      <img src={"https://res.cloudinary.com/dddunuudr/image/upload/v1698740463/file-upload/Home-page/t5wjjdriudofn6y2ld50.jpg"} alt="swiper"/>
    </SwiperSlide>
    <SwiperSlide className="swiper-slide">
      <img src={"https://res.cloudinary.com/dddunuudr/image/upload/v1698740801/file-upload/Home-page/uytsmei2womd9sutjysp.jpg"} alt="swiper"/>
    </SwiperSlide>
    <SwiperSlide className="swiper-slide">
      <img src={"https://res.cloudinary.com/dddunuudr/image/upload/v1698741743/file-upload/Home-page/w4r9svmhjnbkpg8agrn5.jpg"} alt="swiper" />
    </SwiperSlide>
    <SwiperSlide className="swiper-slide">
      <img src={"https://res.cloudinary.com/dddunuudr/image/upload/v1698844007/file-upload/Home-page/hcj2uu3jqflp6hduhe3h.jpg"} alt="swiper"/>
    </SwiperSlide>
    <div classname="slider_controler">
    <div className="swiper-button-prev slider-arrow">
    <ion-icon name="arrow-back-outline"></ion-icon>

    </div>
    <div className="swiper-button-next slider-arrow">
    <ion-icon name="arrow-forward-outline"></ion-icon>

    </div>
    <div className="swiper-pagination">

    </div>

    </div>
  </Swiper>

  </div>
  </div>)
}

export default NewsFeed;
