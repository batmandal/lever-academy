"use client";

import { East } from "@mui/icons-material";
import { useState } from "react";

export type ButtonType = {
  label: string;
  href: string;
  color?: boolean;
};

export const Button = (props: ButtonType) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };
  const { label, href, color } = props;

  return (
    <div
      onClick={handleClick}
      className="bg-[#3f188c] cursor-pointer rounded-full"
    >
      <a
        href={href}
        className={` py-4 px-6 w-full flex gap-3 justify-center items-center h-fit rounded-full  ${
          color !== true ? "bg-button text-white" : "bg-white text-textprimary"
        } ${isClicked ? "translate-y-[-3px]" : "translate-y-[-7px]"}`}
      >
        {label}
        <East fontSize="medium" />
      </a>
    </div>
  );
};
