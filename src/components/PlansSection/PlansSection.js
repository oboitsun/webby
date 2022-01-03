import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Article from "../Article/Article";
import "./PlansSection.scss";
import Plan from "./Plan";
const PS = "PlansSection";

function PlansSection() {
  return (
    <div className="PlansSection">
      <div className="cont">
        <SectionHeading>Choose a plan that suits you</SectionHeading>
        <div className={`${PS}__header `}>
          <Article>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Article>
          <div className={`${PS}__plan-buttons`}>
            <button className="active">Monthly</button>
            <button className="">Yearly</button>
          </div>
        </div>
        <div className={`${PS}__plans`}>
          <Plan />
          <Plan outlined />
          <Plan outlined />
        </div>
      </div>
    </div>
  );
}

export default PlansSection;
