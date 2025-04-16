"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { CourseCard } from "../components";

const categories = [
  "Data Science",
  "IT Certifications",
  "Leadership",
  "Web Development",
  "Communication",
  "Business Analytics & Intelligence",
  "...",
];

export const Section2 = () => {
  const t = useTranslations("Section2");
  const [isActive, setIsActive] = useState(categories[0]);

  return (
    <section
      id="courses"
      aria-labelledby="courses-heading"
      className="w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto flex flex-col gap-10 mt-20 sm:mt-28"
    >
      <header className="text-center sm:text-left">
        <h2
          id="courses-heading"
          className="text-textprimary text-3xl sm:text-4xl lg:text-5xl font-bold mb-2"
        >
          {t("maintext")}
        </h2>
        <p className="text-textsecondary text-lg sm:text-xl lg:text-2xl">
          {t("helpertext")}
        </p>
      </header>

      <nav
        className="flex flex-wrap gap-2 justify-center sm:justify-start"
        aria-label="Course categories"
      >
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setIsActive(category)}
            className={`py-2 px-5 sm:py-3 sm:px-6 rounded-full text-sm sm:text-base font-medium transition-all ${
              category === isActive
                ? "bg-button text-white"
                : "bg-[#F9F9F9] text-textprimary"
            }`}
            aria-pressed={category === isActive}
          >
            {category}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <CourseCard />
        <CourseCard />
      </div>
    </section>
  );
};
