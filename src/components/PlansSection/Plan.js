import React from "react";
import FreeTrialButton from "../FreeTrialButton/FreeTrialButton";
import "./Plan.scss";
function Plan({ outlined }) {
  return (
    <div className="Plan">
      <div className="Plan__name">Starter</div>
      <div className="Plan__price-section">
        <div className="price">$19</div>
        <div className="disclaimer">
          per month,
          <br /> billed montly
        </div>
      </div>
      <div className="hidden lg:block w-px h-10 flex-shrink-0 opacity-10 bg-black"></div>
      <div className="Plan__benefits">
        <p className="benefit">1 dashboard</p>
        <div className="h-5 w-px bg-black opacity-10  mx-8 lg:hidden"></div>
        <p className="benefit">5 accounts</p>

        <p className="benefit ">1,000 active tasks</p>
      </div>
      <div className="hidden lg:block w-px h-10 flex-shrink-0 opacity-10 bg-black"></div>
      <FreeTrialButton
        addStyles={`lg:max-w-[220px] ${outlined ? "outlined" : ""}`}
      />
    </div>
  );
}

export default Plan;
