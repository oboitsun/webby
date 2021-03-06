import React from "react";
import Burger from "../Burger";
import Logo from "../Logo";
import { Link } from "react-scroll";
import "./Header.scss";
const H = "Header";
const header_anchors = [
  { link: "about", text: "About Us" },
  { link: "services", text: "Services" },
  { link: "reviews", text: "Reviews" },
  { link: "plans", text: "Plans" },
];

function Header({ scrolled, showMenu, setShowMenu }) {
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
  };
  return (
    <div className={`${H}  ${scrolled || showMenu ? "scrolled" : ""}`}>
      <div
        className={`cont ${H}__inner-wrapper ${
          scrolled || showMenu ? "scrolled" : ""
        }`}
      >
        <div className={`${H}__logo`}>
          <Logo />
        </div>
        <div className="lg:hidden ">
          <Burger showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
        <div className="hidden lg:flex items-center gap-10 xl:gap-14">
          {header_anchors.map((anchor, i) => (
            <Link
              to={anchor.link}
              {...linkProps}
              key={i}
              className={`${H}__anchor cursor-pointer`}
            >
              {anchor.text}
            </Link>
          ))}
          <div className={`${H}__getStarted cursor-pointer`}>Get started</div>
          <div className={`${H}__anchor cursor-pointer`}>Login</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
