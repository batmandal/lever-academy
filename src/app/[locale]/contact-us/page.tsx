"use client";

import { useState } from "react";

import { useTranslations } from "next-intl";

const ContactUs = () => {
  const t = useTranslations("ContactUs");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="flex flex-col items-center gap-24">
      <section className="min-h-[100vh] w-full flex flex-col justify-center items-center gap-y-8 px-4 bg-gradient-to-b from-[#E8F0FF] to-[#FFF8E5] text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-textprimary leading-tight max-w-4xl pt-36">
          {t("title")} <br /> {t("subtitle")}
        </h1>
        <p className="text-lg md:text-2xl text-textsecondary max-w-2xl">
          Create SEO-optimized and plagiarism-free content for your blogs, ads,
          emails, and website 10X faster.
        </p>

        <div className="bg-white mb-[50px] py-8 px-6 sm:px-12 w-full max-w-4xl shadow-xl rounded-3xl mt-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                placeholder={t("namePlaceholder")}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full md:w-1/2 h-14 p-4 bg-gray-200 rounded-md focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full md:w-1/2 h-14 p-4 bg-gray-200 rounded-md focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder={t("messagePlaceholder")}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full h-36 p-4 bg-gray-200 rounded-md focus:outline-none resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full h-14 bg-button text-white font-bold rounded-md hover:bg-purple-600 transition duration-300"
            >
              {t("submit")}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
