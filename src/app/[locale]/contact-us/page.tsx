"use client";

import { Button } from "@/components";

const contactCardJson = [
  {
    icon: "public/icon1.png",
    title: "Sales",
    text: "Create SEO-optimized and plagiarism-free content for your blogs, emails, and website 10X faster.",
  },
  {
    icon: "public/icon1.png",
    title: "Live Chat",
    text: "Create SEO-optimized and plagiarism-free content for your blogs, emails, and website 10X faster.",
  },
  {
    icon: "public/icon1.png",
    title: "Documentation",
    text: "Create SEO-optimized and plagiarism-free content for your blogs, emails, and website 10X faster.",
  },
];

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col h-screen gap-y-6 bg-gradient-to-b from-[#E8F0FF] to-[#FFF8E5] items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-textprimary mb-4 pt-48">
          Love To Hear From You <br /> Get In Touch
        </h1>
        <p className="text-center text-lg md:text-2xl text-textsecondary mb-8">
          Create SEO-optimized and plagiarism-free content for your blogs, ads, emails, and website 10X faster.
        </p>
        <div className="bg-white py-8 px-6 sm:px-12 w-full max-w-4xl shadow-xl rounded-3xl">
          <form>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full md:w-[calc(50%-0.5rem)] h-14 p-4 bg-gray-200 rounded-md focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full md:w-[calc(50%-0.5rem)] h-14 p-4 bg-gray-200 rounded-md focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                className="w-full h-36 p-4 bg-gray-200 rounded-md focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full h-14 bg-button text-white font-bold py-3 rounded-md hover:bg-purple-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <div className="container px-4 sm:px-8 lg:px-32 py-16 w-full flex flex-col gap-12">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactCardJson.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center shadow-lg rounded-2xl bg-slate-50 py-8 px-6 gap-6 cursor-pointer hover:shadow-xl transition duration-200"
            >
              <img src={item.icon} className="w-16 h-16" alt={`${item.title} Icon`} />
              <h3 className="text-xl md:text-2xl text-textprimary font-bold">{item.title}</h3>
              <p className="text-sm md:text-base text-textsecondary text-center">{item.text}</p>
              <button className="text-base md:text-lg font-semibold text-button hover:underline">
                Contact now →
              </button>
            </div>
          ))}
        </section>
        <section className="w-full bg-gradient-to-r from-purple-100 to-purple-50 py-12 px-6 sm:px-12 rounded-3xl">
          <div className="text-center flex flex-col items-center gap-6">
            <h1 className="text-3xl md:text-5xl font-bold text-textprimary">
              Optimize Your Content <br /> From Today
            </h1>
            <p className="text-textsecondary text-lg md:text-xl">
              Growth-accelerating products for startups, ecommerce stores, and more.
            </p>
            <div className="mt-4">
              <Button href="/" label="Get Start Free" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
