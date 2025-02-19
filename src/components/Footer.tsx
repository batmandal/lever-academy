"use client";
import { Facebook, Instagram } from "@/assets/svg";
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';



export const Footer = () => {
const t = useTranslations("Footer");

const footerContents = [
  { text: t("home"), link: "/" },
  { text: t("contact"), link: "/contact-us" },
  { text: t("404Page"), link: "" },
  { text: t("features"), link: "/features" },
  { text: t("signIn"), link: "" },
  { text: t("terms"), link: "/terms-condition" },
  { text: t("about"), link: "/about-us" },
  { text: t("signUp"), link: "" },
  { text: t("privacy"), link: "/privacy-policy" },
];
  
  return (
    <div className="w-full px-6 md:px-12 lg:px-32 py-6 bg-gray-50">
      <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-14 pb-14">
        <div className="w-full md:w-[25%] text-center md:text-left">
          <h3 className="text-textprimary text-xl md:text-2xl font-bold">Lever</h3>
          <p className="text-textsecondary text-sm md:text-base mt-2">
          {t("text")}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1 text-center md:text-left">
          {footerContents.map((item, index) => (
            <Link
              href={item.link}
              className="text-sm md:text-base text-textsecondary transition ease-in-out hover:text-purple-600"
              key={index}
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className="w-full md:w-[25%] flex flex-col md:flex-row items-center md:items-start justify-center md:justify-end">
          <div className="text-center md:text-right">
            <p className="text-sm md:text-base font-medium">Email Us</p>
            <p className="text-textsecondary text-sm md:text-base">lever@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="w-full pt-6 pb-8 flex flex-col md:flex-row justify-between items-center border-t border-solid border-gray-200">
        <p className="text-textsecondary text-xs md:text-sm">Copyright © [2025]. AI Testing Platform. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <div className="w-6 h-6">
            <Facebook />
          </div>
          <div className="w-6 h-6">
            <Instagram />
          </div>
        </div>
      </div>
    </div>
  );
};
