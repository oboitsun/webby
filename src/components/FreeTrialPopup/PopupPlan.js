import React from "react";
import FreeTrialButton from "../FreeTrialButton/FreeTrialButton";
import "./PopupPlan.scss";
function PopupPlan({ picked, plan, choosePlan }) {
  const isPicked = picked === plan.name;
  const handlePickPlan = (name) => {
    choosePlan(name);
  };
  return (
    <div
      onClick={() => {
        handlePickPlan(plan.name);
      }}
      className={`PopupPlan border cursor-pointer snap-start min-w-[210px]  ${
        isPicked ? "border-green " : "border-lightGray"
      }`}
    >
      <div className="PopupPlan__name capitalize">{plan.name}</div>
      <div className="PopupPlan__price-section">
        <div className="price">${plan.monthly}</div>
        <div className="disclaimer">
          per month,
          <br /> billed montly
        </div>
      </div>

      <div className="PopupPlan__benefits capitalize">
        <p className="benefit">{plan.features[0]}</p>
        <div className=" h-5 w-px bg-black opacity-10  mx-2 "></div>
        <p className="benefit">{plan.features[1]}</p>
        <p className="benefit ">{plan.features[2]}</p>
      </div>
      <button className={`PopupPlan__button ${isPicked ? "picked" : ""}`}>
        {picked ? "You have chosen this plan" : " Select this plan"}
      </button>
    </div>
  );
}

export default PopupPlan;
