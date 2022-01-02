import React from "react";
import Article from "../Article/Article";
import "./HeroSection.scss";
const HS = "HeroSection";
function HeroSection() {
  return (
    <div className="HeroSection  relative">
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white to-transparent z-[1]"></div>
      <img
        className="o object-cover w-full h-full top-0 left-0 absolute opacity-[3%]"
        src="/assets/pattern.png"
        alt="pattern"
      />
      <div className="cont lg:flex relative z-[2]">
        <div className="flex flex-col justify-center lg:max-w-[408px] xl:max-w-[541px]   ">
          <h1 className={`${HS}__h1`}>
            Simple project management platform for{" "}
            <span className="text-green">graphic designers</span>
          </h1>
          <Article>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Article>
          <div className="flex flex-col lg:flex-row gap-4 mt-4">
            <button className={`${HS}__button green`}>
              Start for free{" "}
              <img
                className="ml-2"
                src="/assets/arrow-next.svg"
                alt="start for free"
              />
            </button>
            <button className={`${HS}__button gray`}>Choose a plan </button>
          </div>{" "}
        </div>
        <div className="relative self-center">
          <img
            className="pt-10 lg:pt-0 lg:max-w-[1000px] lg:w-[105%] lg:right-[5%] relative"
            src="/assets/macbook.png"
            alt="laptop"
          />
          <img
            className="absolute h-[80%] w-auto top-[14%] right-0"
            src="/assets/iphone.png"
            alt="iphone"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
