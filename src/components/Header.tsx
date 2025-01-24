"use client";

import { Link } from "@/i18n/routing";
import { KeyboardArrowDown } from "@mui/icons-material";

import { useEffect, useState } from "react";

export const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickeds, setIsClickeds] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const showDropdown = () => setIsDropdownVisible(true);
  const hideDropdown = () => setIsDropdownVisible(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };
  const handleClick1 = () => {
    setIsClickeds(true);
    setTimeout(() => {
      setIsClickeds(false);
    }, 100);
  };

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
      <img src="/logo.png" alt="png" className="h-7" />
      <div className="flex gap-5 text-textsecondary">
        <a href="/">Home</a>
        <a href="#Section7">FAQ</a>
        <div className="flex flex-col cursor-pointer">
          <p onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            Pages <KeyboardArrowDown />
          </p>

          {isDropdownVisible && (
            <div
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              className="bg-transparent h-[400px] w-[300px] absolute left-[45%] top-14  p-4"
            >
              <div className="w-full h-full bg-white rounded-3xl shadow-2xl p-4">
                <Link href="/terms-condition">terms and conditions</Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex">
        <div className="rounded-l-full bg-[#3f188c] ">
          <div
            onClick={handleClick}
            className={`bg-button rounded-l-full px-6 py-4 text-white ${
              isClicked ? "translate-y-[-3px]" : "translate-y-[-6px]"
            }`}
          >
            sign in
          </div>
        </div>
        <span className="w-px h-[50%] bg-white"></span>
        <div className="rounded-r-full bg-[#3f188c] ">
          <div
            onClick={handleClick1}
            className={`bg-button rounded-r-full px-6 py-4 text-white ${
              isClickeds ? "translate-y-[-3px]" : "translate-y-[-6px]"
            }`}
          >
            sign up
          </div>
        </div>
      </div>
    </div>
  );
};
