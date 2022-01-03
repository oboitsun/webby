import React from "react";
import ArrowNext from "../ArrowNext";
import "./FreeTrial.scss";
function FreeTrialButton({ addStyles }) {
  return (
    <button className={`FreeTrial ${addStyles}`}>
      Start 14 days free trial
      <ArrowNext />
    </button>
  );
}

export default FreeTrialButton;
