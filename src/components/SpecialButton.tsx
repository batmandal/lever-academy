"use client";

import { LanguageIcon, SearchIcon } from "@/assets/svg";
import { useParams, useRouter } from "next/navigation";

export const SpecialButton = () => {
  const router = useRouter();
  const params = useParams();
  const changeLanguage = () => {
    if (params.locale === "en") {
      router.push("./mn");
    } else {
      router.push("./en");
    }
  };
  return (
    <div className="flex flex-col gap-5 ">
      <div className="w-12 h-12 shadow-2xl  rounded-full bg-textprimary  cursor-pointer p-3">
        <SearchIcon />
      </div>
      <div
        onClick={changeLanguage}
        className="w-12 h-12 rounded-full bg-textprimary cursor-pointer p-3"
      >
        <LanguageIcon />
      </div>
    </div>
  );
};
