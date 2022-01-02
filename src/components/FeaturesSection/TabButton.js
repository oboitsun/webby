import React from "react";

function TabButton({ tab }) {
  return (
    <div className={`FeaturesSection__tabButton`}>
      <div className="icon">
        <img className="" src={tab.iconSrc} alt={tab.label} />
      </div>
      <span>{tab.label}</span>
    </div>
  );
}

export default TabButton;
