import React, { useState, useEffect } from "react";

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { plans } from "../../plans";
import PopupPlan from "./PopupPlan";

function PlansSlider({ choosePlan, pickedPlan }) {
  const [pickedSlide, setSpickedSlide] = useState(0);
  useEffect(() => {
    console.log(pickedSlide);
  }, [pickedSlide]);
  return (
    <div className="relative lg:hidden mb-4">
      <Swiper
        initialSlide={pickedSlide}
        onSlideChange={(e) => {
          setSpickedSlide(e.activeIndex);
        }}
        spaceBetween={16}
        slidesPerView={1.2}
      >
        {plans.map((plan, i) => (
          <SwiperSlide key={i}>
            <PopupPlan
              choosePlan={choosePlan}
              key={i}
              idx={i}
              plan={plan}
              picked={pickedPlan}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PlansSlider;
