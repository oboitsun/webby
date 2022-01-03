import React from "react";
import Logo from "../Logo";
import "./Footer.scss";
const header_anchors = [
  { link: "#about", text: "About Us" },
  { link: "#reviews", text: "Reviews" },
  { link: "#plans", text: "Plans" },
  { link: "#contact", text: "Contact Us" },
];
function Footer() {
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
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {header_anchors.map((anchor, i) => (
              <div className="text-sm text-white underline" key={i}>
                {anchor.text}
              </div>
            ))}
          </div>
          <button className="Footer__get-started">Get started</button>
          <button className="text-white font-bold ">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
