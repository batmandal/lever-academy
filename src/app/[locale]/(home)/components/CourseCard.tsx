"use client";
import Image from "next/image";
import { useState } from "react";

export const CourseCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="courseCard max-w-[290px] flex flex-col max-h-[340px] p-3 bg-[#f9f9f9] hover:bg-button cursor-pointer hover:text-white rounded-[28px]"
    >
      <div className="overflow-hidden rounded-2xl">
        <Image alt="" src="math-teacher.jpg" />
      </div>
      <div className="p-2 flex flex-col gap-1">
        <h4 className="font-bold text-[20px]">
          Master the fundamentals of Math
        </h4>
        <p
          className={`text-textsecondary  ${
            isHovered ? "text-white" : "text-textsecondary"
          }`}
        >
          D.Baldandorj
        </p>
        <p
          className={`font-bold text-button ${
            isHovered ? "text-red-300" : "text-button"
          }`}
        >
          10$
        </p>
      </div>
    </div>
  );
};
