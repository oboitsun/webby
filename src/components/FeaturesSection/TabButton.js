import React from "react";

function TabButton({ tab, current, handleCurrentTab }) {
  const active = current === tab.label;
  return (
    <div
      value={tab.label}
      onClick={() => {
        handleCurrentTab(tab.label);
      }}
      className={`FeaturesSection__tabButton cursor-pointer hover:shadow-md transition-all ${
        active ? "active shadow-md" : ""
      }`}
    >
      <span className="icon">
        <img className="" src={tab.iconSrc} alt={tab.label} />
      </span>
      <span>{tab.label}</span>
    </div>
  );
}

export default TabButton;
