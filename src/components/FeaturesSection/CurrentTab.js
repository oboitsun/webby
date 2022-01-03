import React from "react";
import Article from "../Article/Article";
import FreeTrialButton from "../FreeTrialButton/FreeTrialButton";

function CurrentTab() {
  return (
    <div className={`FeaturesSection__currentTab`}>
      <div className="my-8 lg:my-0">
        <img className="" src={"/assets/ipad.png"} alt="ipad" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="heading flex items-center">
          <img
            className="mr-2 w-5 lg:w-8"
            src={"/assets/features/projects.svg"}
            alt="projects"
          />
          Projects
        </p>
        <Article>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Article>
        <FreeTrialButton addStyles={`mt-2 lg:max-w-[248px]`} />
      </div>
    </div>
  );
}

export default CurrentTab;
