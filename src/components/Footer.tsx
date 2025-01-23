"use client";
import { Facebook, Instagram } from "@/assets/svg";
import { Link } from "@/i18n/routing";

const footerContents = [
  { text: "Home", link: "/" },
  { text: "Contact Us", link: "/contact-us" },
  { text: "404 Page", link: "" },
  { text: "Features", link: "/features" },
  { text: "Sign In", link: "" },
  { text: "Terms Condition", link: "/terms-condition" },
  { text: "About Us", link: "/about-us" },
  { text: "Sign Up", link: "" },
  { text: "Privacy Policy", link: "/privacy-policy" },
];

export const Footer = () => {
  return (
    <div className="w-full px-6 md:px-12 lg:px-32 py-8 bg-gray-50">
      <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-14 pb-14">
        <div className="w-full md:w-[25%] text-center md:text-left">
          <h3 className="text-textprimary text-xl md:text-2xl font-bold">WordCraft</h3>
          <p className="text-textsecondary text-sm md:text-base mt-2">
            Growth-accelerating products for startups, ecommerce stores, angel
            investors, and more features.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center md:text-left">
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
        <p className="text-textsecondary text-xs md:text-sm">All rights reserved Sailr 2024</p>
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
