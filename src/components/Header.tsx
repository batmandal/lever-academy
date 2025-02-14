"use client";

import { Link } from "@/i18n/routing";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useTranslations } from "next-intl";

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

  const t = useTranslations("Header");


  return (
    <div
      className={`header w-screen flex items-center justify-between h-24 z-10
     px-32 fixed transition-transform duration-500 ${
       showHeader ? "translate-y-0 " : "-translate-y-full "
     } ${lastScrollY === 0 ? "bg-transparent" : "bg-white shadow-md"}
     `}
    >
      {/* <img src="/logo.png" alt="png" className="h-7" /> */}
      <Link href='/' className="text-4xl font-bold text-textprimary transition ease-in-out cursor-pointer hover:text-textsecondary">LEVER</Link>

      <div className="flex gap-5 text-textsecondary">
        <Link href="/">{t("home")}</Link>
        <Link href="#Section7">{t("fuckU")}</Link>
        <div className="flex flex-col cursor-pointer transition ease-in-out">
          <p onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            {t("pages")} <KeyboardArrowDown />
          </p>

          {isDropdownVisible && (
            <div
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              className="bg-transparent h-auto absolute left-[45%] top-14  p-4"
            >
              <div className="w-full h-full flex flex-col bg-white rounded-3xl shadow-xl p-3">
                <Link className="transition ease-in-out text-lg hover:text-textprimary " href="/terms-condition">{t("terms")}</Link>
                <Link className="transition ease-in-out text-lg hover:text-textprimary " href="/about-us">{t("about")}</Link>
                <Link className="transition ease-in-out text-lg hover:text-textprimary " href="/features">{t("features")}</Link>
                <Link className="transition ease-in-out text-lg hover:text-textprimary " href="/contact-us">{t("contact")}</Link>
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
            {t("signIn")}
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
            {t("signUp")}
          </div>
        </div>
      </div>
    </div>
    
  );
};
