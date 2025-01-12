"use client";

import { useEffect, useState } from "react";

const headerTabs = [
  { title: "Home", url: "/" },
  { title: "FAQ", url: "#Section7" },
  { title: "Pages" },
];
export const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`header w-full flex items-center justify-between h-24 z-10
     px-32 fixed transition-transform duration-500 ${
       showHeader ? "translate-y-0 " : "-translate-y-full "
     } ${lastScrollY === 0 ? "bg-transparent" : "bg-white shadow-md"}
     `}
    >
      <img src="logo.png" alt="png" className="h-7" />
      <div className="flex gap-5 ">
        {headerTabs.map((item, index) => {
          return (
            <a href={item.url} key={index}>
              {item.title}
            </a>
          );
        })}
      </div>
      <div className="py-4 px-6 w-fit h-fit text-white flex bg-button rounded-full gap-2">
        <div className="w-16 cursor-pointer   flex justify-center">Log In</div>
        <span className="w-px bg-white "></span>
        <div className="w-16 cursor-pointer flex justify-center">Sign Up</div>
      </div>
    </div>
  );
};
