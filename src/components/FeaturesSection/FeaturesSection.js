import React from "react";
import Article from "../Article/Article";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./FeaturesSection.scss";
import { tabs } from "./content";
import TabButton from "./TabButton";
import CurrentTab from "./CurrentTab";
const FS = "FeaturesSection";
function FeaturesSection() {
  return (
    <div className={FS}>
      <div className="cont">
        <SectionHeading>Manage your company with ease!</SectionHeading>
        <Article>
          We’ve helper over 25,000 individuals and companies to grow their
          business successfully
        </Article>
      </div>
      <div className="w-screen overflow-x-hidden relative">
        <div className="w-1/12 bg-gradient-to-l from-white to-transparent h-full absolute right-0 top-0 z-10 lg:hidden"></div>
        <div className="w-full overflow-x-auto ml-10 my-5 relative FeaturesSection__tabs ">
          <div className="flex flex-wrap  min-w-[774px] lg:my-10   ">
            {tabs.map((tab, i) => (
              <TabButton key={i} tab={tab} />
            ))}
          </div>
        </div>
      </div>
      <div className="cont">
        <CurrentTab />
      </div>
    </div>
  );
}

export default FeaturesSection;
