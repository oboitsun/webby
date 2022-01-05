import React from "react";
import { Link } from "react-scroll";
function ModalMenu({ showMenu, setShowMenu }) {
  const header_anchors = [
    { link: "about", text: "About Us" },
    { link: "services", text: "Services" },
    { link: "reviews", text: "Reviews" },
    { link: "plans", text: "Plans" },
  ];
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
  };
  const H = "Header";
  return (
    <div
      className={`fixed top-0 left-0 z-10 w-screen h-screen bg-green transition-all flex items-center justify-center ${
        showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col gap-5 items-center">
        {header_anchors.map((anchor, i) => (
          <Link
            onClick={() => {
              setShowMenu(false);
            }}
            to={anchor.link}
            {...linkProps}
            key={i}
            className={`text-xl text-white cursor-pointer`}
          >
            {anchor.text}
          </Link>
        ))}
        <div className={` text-white text-xl`}>Get started</div>
        <div className={` text-white  text-xl`}>Login</div>
      </div>
    </div>
  );
}

export default ModalMenu;
