"use client";
import { Facebook, Instagram } from "@/assets/svg";

const footerContents = [
  "Home",
  "Contact Us",
  "404 Page",
  "Features",
  "Sign In",
  "Terms Condition",
  "About Us",
  "Sing Up",
  "Privacy Policy",
];

export const Footer = () => {
  return (
    <div className="w-full ">
      <div className="w-full flex justify-between pb-14 ">
        <div className=" w-[25%]">
          <h3 className="text-textprimary  text-[24px]">WordCraft</h3>
          <p className="text-textsecondary ">
            Growth-accelerating products for startups, and ecommerce stores,
            angel investors, and more features.
          </p>
        </div>
        <div className=" grid grid-cols-3">
          {footerContents.map((text, index) => {
            return <div key={index}>{text}</div>;
          })}
        </div>
        <div className="flex w-[25%] flex-col bg-red-200 justify-center">
          <p>Email Us</p>
          <p className="right-0"> lever@gmail.com</p>
        </div>
      </div>
      <div className="w-full pt-6 pb-8 flex justify-between border-t border-solid border-[#02010f33]">
        <p className="text-textsecondary">Alright reserved Sailr 2024</p>
        <div className="flex gap-6">
          <Facebook />
          <Instagram />
        </div>
      </div>
    </div>
  );
};
