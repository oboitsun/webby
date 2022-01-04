import React from "react";
import ArrowNext from "../ArrowNext";
import SectionHeading from "../SectionHeading/SectionHeading";
const FTP = "FreeTrialPopup";

function CheckYourMail({ closePopup }) {
  return (
    <div
      className={`${FTP}__checkMail flex flex-col items-center max-w-[450px] gap-y-6`}
    >
      <img className="" src="/assets/at.svg" alt="check mail" />
      <SectionHeading>
        <span className="text-green">Check your mail</span>{" "}
      </SectionHeading>
      <p className="text-sm text-center font-medium">
        We sent you an email with instructions on how to set up your account.
        Check your inbox and get started with your business.
      </p>
      <button onClick={closePopup} className={`${FTP}__button submit`}>
        Get Started now <ArrowNext />
      </button>
    </div>
  );
}

export default CheckYourMail;
