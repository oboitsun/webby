import React from "react";
import Logo from "../Logo";
import { Link } from "react-scroll";
import "./Footer.scss";
const header_anchors = [
  { link: "about", text: "About Us" },
  { link: "services", text: "Services" },
  { link: "reviews", text: "Reviews" },
  { link: "plans", text: "Plans" },
  ,
];
function Footer() {
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
    className: "cursor-pointer",
  };
  return (
    <div className="Footer">
      <div className="cont">
        <div className="Footer__inner">
          <div className="Footer__logo">
            <Logo color="text-white" />
          </div>
          <div className="Footer__about">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </div>
          <div className="lg:grid grid-cols-2 gap-x-8 gap-y-2 hidden">
            {header_anchors.map((anchor, i) => (
              <Link
                to={anchor.link}
                {...linkProps}
                className="text-sm text-white underline"
                key={i}
              >
                {anchor.text}
              </Link>
            ))}
          </div>
          <button className="Footer__get-started">Get started</button>
          <button className="text-white font-bold hidden lg:block">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
