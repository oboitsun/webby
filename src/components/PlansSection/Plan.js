import React from "react";
import FreeTrialButton from "../FreeTrialButton/FreeTrialButton";
import "./Plan.scss";
function Plan({ plan, outlined, row = true, monthly }) {
  return (
    <div className={`Plan ${row ? "row" : ""}`}>
      <div className="Plan__name  capitalize">{plan.name}</div>
      <div className="Plan__price-section">
        <div className="price relative flex items-center">
          $
          <div className="relative overflow-hidden h-full">
            <div className="opacity-0 pr-2">999</div>
            <div
              className={`absolute top-0 left-0 ${
                !monthly ? "-translate-y-1/2" : "translate-y-0"
              } transition-all `}
            >
              <p className="">{plan.monthly}</p>
              <p className="">{plan.yearly}</p>
            </div>
          </div>
        </div>
        <div className="disclaimer relative overflow-hidden">
          <div className="opacity-0">
            per yearyerar,
            <br /> billed monthlyyy
          </div>
          <div
            className={`absolute top-0 left-0 ${
              !monthly ? "-translate-y-1/2" : "translate-y-0"
            } transition-all`}
          >
            <div className="">
              per month,
              <br /> billed monthly
            </div>
            <div className="">
              per year,
              <br /> billed yearly
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-px h-10 flex-shrink-0 opacity-10 bg-black"></div>
      <div className="Plan__benefits capitalize">
        <p className="benefit">{plan.features[0]}</p>
        <div className="h-5 w-px bg-black opacity-10  mx-8 lg:hidden"></div>
        <p className="benefit">{plan.features[1]}</p>

        <p className="benefit ">{plan.features[2]}</p>
      </div>
      <div className="hidden lg:block w-px h-10 flex-shrink-0 opacity-10 bg-black"></div>
      <FreeTrialButton
        addStyles={`lg:max-w-[220px] ${outlined ? "outlined" : ""}`}
      />
    </div>
  );
}

export default Plan;
