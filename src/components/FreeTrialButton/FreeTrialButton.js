import React, { useState } from "react";
import ArrowNext from "../ArrowNext";
import FreeTrialPopup from "../FreeTrialPopup/FreeTrialPopup";
import "./FreeTrial.scss";
function FreeTrialButton({ addStyles }) {
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      <button onClick={handleShowPopup} className={`FreeTrial ${addStyles}`}>
        Start 14 days free trial
        <ArrowNext />
      </button>
      <FreeTrialPopup showPopup={showPopup} closePopup={handleShowPopup} />
    </>
  );
}

export default FreeTrialButton;
