"use client";

import { Facebook, Instagram } from "@/assets/svg";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

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
    <footer
      className="w-full bg-gray-50 px-4 sm:px-8 lg:px-32 py-10"
      aria-label="Website Footer"
    >
      <div className="max-w-screen-xl mx-auto w-full flex flex-col md:flex-row justify-between gap-10 md:gap-16 pb-14">
        {/* Brand & description */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-textprimary text-2xl font-bold">Lever</h3>
          <p className="text-textsecondary text-sm md:text-base mt-2 max-w-sm mx-auto md:mx-0">
            {t("text")}
          </p>
        </div>

        <nav
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center md:text-left"
          aria-label="Footer Navigation"
        >
          {footerContents.map((item, index) =>
            item.link ? (
              <Link
                key={index}
                href={item.link}
                className="text-sm md:text-base text-textsecondary hover:text-purple-600 transition"
              >
                {item.text}
              </Link>
            ) : (
              <span
                key={index}
                className="text-sm md:text-base text-gray-400 cursor-not-allowed"
                title="Coming soon"
              >
                {item.text}
              </span>
            )
          )}
        </nav>

        <address className="w-full md:w-1/3 not-italic text-center md:text-right">
          <p className="text-sm md:text-base font-medium">Email Us</p>
          <a
            href="mailto:lever@gmail.com"
            className="text-textsecondary text-sm md:text-base hover:underline"
          >
            lever@gmail.com
          </a>
        </address>
      </div>

      <div className="max-w-screen-xl mx-auto w-full border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-textsecondary text-xs md:text-sm text-center md:text-left">
          © 2025 Lever — AI Testing Platform. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:opacity-80"
          >
            <div className="w-6 h-6">
              <Facebook />
            </div>
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="hover:opacity-80"
          >
            <div className="w-6 h-6">
              <Instagram />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
