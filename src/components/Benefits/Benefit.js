import React from "react";

function Benefit({ benefit }) {
  return (
    <div className={`Benefits__benefit`}>
      <div className="icon-wrapper">
        <img className="icon" src={benefit.iconSrc} alt={benefit.heading} />
      </div>
      <div className="">
        <div className="heading">{benefit.heading}</div>
        <div className="text">{benefit.text}</div>
      </div>
    </div>
  );
}

export default Benefit;
