"use client";

import { useState } from "react";

const categories = [
  "Data Science",
  "IT Certifications",
  "Leadership",
  "Web Development",
  "Communication",
  "Business Analytics & Intelligence",
];

export const Section2 = () => {
  const [isActive, setIsActive] = useState("Data Science");
  return (
    <div className="w-full mt-28">
      <div>
        <p className="text-textprimary text-[48px]">
          All the skills you need in one place
        </p>
        <p className="text-textsecondary text-[22px]">
          From critical skills to technical topics, Udemy supports your
          professional development.
        </p>
      </div>
      <div>
        <div className="w-full flex ">
          {categories.map((category, index) => {
            return (
              <div
                key={index}
                onClick={() => setIsActive(category)}
                className={`pt-4 pr-6 pb-4 border-b-2 border-solid cursor-pointer ${
                  category === isActive ? "border-button" : "border-[#6a6f73]"
                }`}
              >
                <p
                  className={` text-[22px] ${
                    category === isActive ? "text-button" : "text-textprimary"
                  }`}
                >
                  {category}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
