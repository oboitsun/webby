import React, { useState, useEffect } from "react";
import Article from "../Article/Article";
import SectionHeading from "../SectionHeading/SectionHeading";
import Benefit from "./Benefit";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Benefits.scss";
import OurClients from "../OurClients/OurClient";

const benefits = [
  {
    iconSrc: "/assets/benefits/star.svg",
    heading: "Manage Smartly",
    text: "Stay on top of your task lists and stay in touch with what's happening",
  },
  {
    iconSrc: "/assets/benefits/chat.svg",
    heading: "Communicate Fast",
    text: "Stay on top of your task lists and stay in touch with what's happening",
  },
  {
    iconSrc: "/assets/benefits/price.svg",
    heading: "Influence Easily",
    text: "Stay on top of your task lists and stay in touch with what's happening",
  },
  {
    iconSrc: "/assets/benefits/star.svg",
    heading: "Benefit",
    text: "Stay on top of your task lists and stay in touch with what's happening",
  },
  {
    iconSrc: "/assets/benefits/price.svg",
    heading: "Benefit",
    text: "Stay on top of your task lists and stay in touch with what's happening",
  },
];

function Benefits() {
  const [sliderProps, setSliderProps] = useState({
    slidesPerView: 1.4,
    spaceBetween: 16,
  });
  useEffect(() => {
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    screenWidth > 1023 &&
      setSliderProps((prev) => ({
        ...prev,
        slidesPerView: 3.3,
        spaceBetween: 40,
      }));
    screenWidth > 1279 &&
      setSliderProps((prev) => ({
        ...prev,
        slidesPerView: 3.6,
        spaceBetween: 50,
      }));
  }, []);
  return (
    <div className="Benefits">
      <div className="cont">
        <SectionHeading>
          Your business needs a <span className="text-green">better shape</span>{" "}
          today!
        </SectionHeading>
        <Article>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </Article>
      </div>
      <div className="relative">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={sliderProps.spaceBetween}
          centeredSlides={true}
          slidesPerView={sliderProps.slidesPerView}
          autoplay={{ pauseOnMouseEnter: true, delay: 3000 }}
          loop
        >
          {benefits.map((b, i) => (
            <SwiperSlide key={i}>
              <Benefit benefit={b} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="cont ">
        <OurClients />
      </div>
    </div>
  );
}

export default Benefits;
