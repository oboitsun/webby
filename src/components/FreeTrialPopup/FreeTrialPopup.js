import React, { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Article from "../Article/Article";
import "./FreeTrialPopup.scss";
import Input from "./Input";
import ArrowNext from "../ArrowNext";
import CancelIcon from "../CancelIcon";
import PopupPlan from "./PopupPlan";
import { plans } from "../../plans";
import CheckYourMail from "./CheckYourMail";

const FTP = "FreeTrialPopup";

function FreeTrialPopup({ picked, showPopup, closePopup }) {
  const [submitted, setSubmitted] = useState(false);
  const [pickedPlan, setPickedPlan] = useState(picked ? picked : "starter");
  const FormPopup = ({ closePopup, submitForm }) => (
    <>
      <div className={`${FTP}__header mb-6`}>
        <SectionHeading>
          <span className="text-green">Get started</span> 14 days of free trial
        </SectionHeading>
        <Article>
          We’ve helper over 25,000 individuals and companies to grow their
          business successfully
        </Article>
      </div>
      <div className={`${FTP}__form-inputs grid lg:grid-cols-3 gap-4 `}>
        <Input placeholder="Business domain" domain />
        <Input placeholder="Business name" />
        <Input placeholder="Email" />
      </div>
      <div className="h-px bg-lightGray w-full my-6 "></div>
      <div className="grid grid-cols-3 mb-6 gap-4">
        {plans.map((plan, i) => (
          <PopupPlan
            choosePlan={setPickedPlan}
            key={i}
            plan={plan}
            picked={pickedPlan === plan.name}
          />
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <button onClick={closePopup} className={`${FTP}__button cancel`}>
          Cancel <CancelIcon />
        </button>
        <button onClick={submitForm} className={`${FTP}__button submit`}>
          Get Started now <ArrowNext />
        </button>
      </div>
    </>
  );
  const submitForm = () => {
    setSubmitted(true);
  };
  return (
    <div className={`${FTP} ${showPopup ? "show" : ""}`}>
      <div onClick={closePopup} className={`${FTP}__backdrop`}>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`${FTP}__popup`}
        >
          {submitted ? (
            <CheckYourMail closePopup={closePopup} />
          ) : (
            <FormPopup submitForm={submitForm} closePopup={closePopup} />
          )}
        </div>
      </div>
    </div>
  );
}

export default FreeTrialPopup;
