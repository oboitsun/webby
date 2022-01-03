import React from "react";
import Burger from "../Burger";
import Logo from "../Logo";
import "./Header.scss";
const H = "Header";
const header_anchors = [
  { link: "#about", text: "About Us" },
  { link: "#reviews", text: "Reviews" },
  { link: "#plans", text: "Plans" },
  { link: "#contact", text: "Contact Us" },
];

function Header({ scrolled }) {
  return (
    <div className={`${H} ${scrolled ? "scrolled" : ""}`}>
      <div className={`cont ${H}__inner-wrapper ${scrolled ? "scrolled" : ""}`}>
        <div className={`${H}__logo`}>
          <Logo />
        </div>
        <div className="lg:hidden">
          <Burger />
        </div>
        <div className="hidden lg:flex items-center gap-10 xl:gap-14">
          {header_anchors.map((anchor, i) => (
            <div key={i} className={`${H}__anchor`}>
              {anchor.text}
            </div>
          ))}
          <div className={`${H}__getStarted`}>Get started</div>
          <div className={`${H}__anchor`}>Login</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
