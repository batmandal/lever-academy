"use client";

import { useEffect, useState } from "react";
import { KeyboardArrowDown, MenuOutlined } from "@mui/icons-material";
// import { Button } from "@mui/material";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickeds, setIsClickeds] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const t = useTranslations("Header");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 100);
  };
  const handleClick1 = () => {
    setIsClickeds(true);
    setTimeout(() => setIsClickeds(false), 100);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full h-24 transition-transform duration-500 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${lastScrollY === 0 ? "bg-transparent" : "bg-white shadow-md"}`}
    >
      <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 h-full flex items-center justify-between">
        <Link
          href="/"
          className="text-xl sm:text-2xl md:text-3xl font-bold text-textprimary hover:text-textsecondary transition"
          aria-label="LEVER homepage"
        >
          LEVER
        </Link>
        <div className="md:hidden">
          <MenuOutlined />
        </div>

        <nav
          className="hidden md:flex items-center gap-4 sm:gap-5 md:gap-6 text-textsecondary text-sm lg:text-base relative"
          aria-label="Main navigation"
        >
          <Link href="/">{t("home")}</Link>
          <Link href="#Section7">{t("fuckU")}</Link>

          <div
            className="relative"
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
          >
            <button className="flex items-center gap-1 focus:outline-none">
              {t("pages")} <KeyboardArrowDown fontSize="small" />
            </button>

            {isDropdownVisible && (
              <div className="absolute left-0 top-full mt-0 pt-2 bg-white shadow-xl rounded-xl p-3 min-w-[160px] z-40">
                <Link
                  href="/terms-condition"
                  className="block py-1 hover:text-textprimary"
                >
                  {t("terms")}
                </Link>
                <Link
                  href="/about-us"
                  className="block py-1 hover:text-textprimary"
                >
                  {t("about")}
                </Link>
                <Link
                  href="/features"
                  className="block py-1 hover:text-textprimary"
                >
                  {t("features")}
                </Link>
                <Link
                  href="/contact-us"
                  className="block py-1 hover:text-textprimary"
                >
                  {t("contact")}
                </Link>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden md:flex items-center">
          <div className="rounded-l-full bg-[#3f188c]">
            {/* <Button
              href="https://lever-ed.framer.website/main"
              onClick={handleClick}
              className={`bg-button rounded-l-full px-4 md:px-6 py-2 md:py-4 text-white ${
                isClicked ? "translate-y-[-3px]" : "translate-y-[-6px]"
              } transition-transform`}
            >
              {t("signIn")}
            </Button> */}
            <Link
              href="https://lever-ed.framer.website/main"
              onClick={() => {
                handleClick();
              }}
              className={`bg-button rounded-l-full px-4 md:px-6 py-2 md:py-4 text-white inline-block transition-transform ${
                isClicked ? "translate-y-[-3px]" : "translate-y-[-6px]"
              }`}
            >
              {t("signIn")}
            </Link>
          </div>
          <span className="w-px h-10 bg-white" />
          <div className="rounded-r-full bg-[#3f188c]">
            {/* <Button
              href="https://lever-ed.framer.website/main"
              onClick={handleClick1}
              className={`bg-button rounded-r-full px-4 md:px-6 py-2 md:py-4 text-white ${
                isClickeds ? "translate-y-[-3px]" : "translate-y-[-6px]"
              } transition-transform`}
            >
              {t("signUp")}
            </Button> */}
            <Link
              href="https://lever-ed.framer.website/main"
              onClick={() => {
                handleClick1();
              }}
              className={`bg-button rounded-r-full px-4 md:px-6 py-2 md:py-4 text-white inline-block transition-transform ${
                isClickeds ? "translate-y-[-3px]" : "translate-y-[-6px]"
              }`}
            >
              {t("signUp")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
