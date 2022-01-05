import React, { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Article from "../Article/Article";
import "./PlansSection.scss";
import Plan from "./Plan";
import { plans } from "../../plans";
const PS = "PlansSection";

function PlansSection() {
  const [planPeriod, setPlanPeriod] = useState("monthly");
  const handlePlanPeriod = (e) => {
    setPlanPeriod(e.target.value);
  };
  return (
    <div id="plans" className="PlansSection relative">
      <div className={`HeroSection__gradient`}></div>
      <img
        className="o object-cover w-full h-full top-0 left-0 absolute opacity-[3%]"
        src="/assets/pattern.png"
        alt="pattern"
      />
      <div className="cont relative z-[2]">
        <SectionHeading>Choose a plan that suits you</SectionHeading>
        <div className={`${PS}__header `}>
          <Article>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Article>
          <div className={`${PS}__plan-buttons`}>
            <button
              value="monthly"
              onClick={handlePlanPeriod}
              className={`${planPeriod === "monthly" ? "active" : ""}`}
            >
              Monthly
            </button>
            <button
              value="yearly"
              onClick={handlePlanPeriod}
              className={`${planPeriod === "yearly" ? "active" : ""}`}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className={`${PS}__plans`}>
          {plans.map((plan, i) => (
            <Plan
              key={i}
              plan={plan}
              monthly={planPeriod === "monthly"}
              outlined={i > 0 ? true : false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlansSection;
