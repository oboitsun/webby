import React, { useState, useEffect, useRef } from "react";
import Article from "../Article/Article";
import SectionHeading from "../SectionHeading/SectionHeading";
import { reviews } from "./content";
import Review from "./Review";
import "./Reviews.scss";
function Reviews() {
  const [visibleReviews, setVisibleReviews] = useState(6);
  const [readMore, setReadMore] = useState(false);
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const content = useRef(null);
  useEffect(() => {
    const screenWidth = window.innerWidth;
    screenWidth > 1279 && setVisibleReviews(9);
  }, []);
  const visible = reviews.slice(0, visibleReviews);
  const rest = reviews.slice(visibleReviews, reviews.length);
  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }
  return (
    <div id="reviews" className="Reviews">
      <div className="cont">
        <SectionHeading>
          <span className="text-green">10,000+</span> people love us
        </SectionHeading>
        <Article>
          These companies release their own versions of the operating systems
          with minor changes, and yet always.
        </Article>
      </div>
      <div className="px-14 lg:px-20 xl:px-0 max-w-[1200px] mx-auto relative">
        <div className="Reviews__clients-reviews ">
          {visible.map((r, i) => (
            <Review review={r} key={i} />
          ))}{" "}
        </div>
        <div
          ref={content}
          style={{
            maxHeight: `${setHeight}`,
            transition: "all 0.5s",
          }}
          className="Reviews__clients-reviews  overflow-hidden"
        >
          {rest.map((r, i) => (
            <Review review={r} key={i} />
          ))}
        </div>
        <button
          onClick={toggleAccordion}
          className={`w-full justify-center flex text-green font-bold mt-10 ${
            readMore ? "showMore" : ""
          } z-[2] relative`}
        >
          {setActive ? "Show less" : "Show more"}
        </button>
        <div
          className={`absolute bottom-10 left-0 w-full Reviews__gradient transition-all ${
            setActive ? "h-10" : "h-40"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Reviews;
