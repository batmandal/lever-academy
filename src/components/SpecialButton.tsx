"use client";

import { LanguageIcon, SearchIcon } from "@/assets/svg"; // import { usePathname } from "@/i18n/routing";
import { Modal } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export const SpecialButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const router = useRouter();

  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const changeLanguage = () => {
    if (locale === "en") {
      router.push(pathname.replace("/en", "/mn"));
    } else if (locale === "mn") {
      router.push(pathname.replace("/mn", "/en"));
    } else {
      router.push(`/en${pathname}`);
    }
  };

  return (
    <div className="flex flex-col gap-5 z-50">
      <div
        onClick={handleOpen}
        className="w-12 h-12 shadow-2xl  rounded-full bg-textprimary  cursor-pointer p-3"
      >
        <SearchIcon />
      </div>
      <div
        onClick={changeLanguage}
        className="w-12 h-12 rounded-full bg-textprimary cursor-pointer p-3"
      >
        <LanguageIcon />
      </div>
      <Modal open={open} onClose={handleClose}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60vw",
            height: "80vh",
            border: "2px solid #000",
            backgroundColor: "white",
            padding: 4,
          }}
        >
          <input style={{ width: "100%", border: "solid 1px black" }} />
        </div>
      </Modal>
    </div>
  );
};
