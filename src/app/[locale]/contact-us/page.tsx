"use client";

import { Button } from "@/components";

const contactCardJson = [
  {icon:"public/icon1.png", title:"Sales", text:"Create SEO-optimized and plagiarism free content for your blogs, emails  and website 10X faster,", },
  {icon:"public/icon1.png", title:"Live Chat", text:"Create SEO-optimized and plagiarism free content for your blogs, emails  and website 10X faster,", },
  {icon:"public/icon1.png", title:"Documentation", text:"Create SEO-optimized and plagiarism free content for your blogs, emails  and website 10X faster,", },
]

const ContactUs = () => {
  return (
    <div className="flex  flex-col gap-28">
      
      <section className="flex flex-col h-screen gap-y-12 bg-gradient-to-b from-[#E8F0FF] to-[#FFF8E5] items-center justify-center"> 
      <h1 className="text-8xl font-bold text-center text-textprimary mb-4 pt-96">Love To Hear From You <br /> Get In Touch</h1>
      <p className="text-center text-2xl text-textsecondary mb-8">Create SEO-optimized and plagiarism-free content for your blogs,<br/> ads, emails, and website 10X faster.</p>
      <div className="bg-[#FFFFFF] py-16 px-12 w-[924px] h-[570px] shadow-xd rounded-3xl ">
          <form>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name*"
                className="w-[402px] h-[65px] p-5 bg-[#EBEBEB] rounded-md focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-[402px] h-[65px] p-5 bg-[#EBEBEB] rounded-md focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                className="w-[828px] h-[271px] p-5 rounded-md bg-[#EBEBEB] focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[828px] h-[65.2px] bg-button text-white font-bold py-3 rounded-md hover:bg-purple-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>  
      </section>
      <div></div>
      <div className="container px-32 py-32 w-full gap-y-64 flex flex-col">
        <section className="flex w-full gap-6">
          {contactCardJson.map((item, index)=>{return <div key={index} className="flex w-full shadow-lg rounded-2xl bg-slate-50 py-12 px-10 gap-6 flex-col items-center cursor-pointer gap-y-12">
            <img src={item.icon}  className="w-16 h-16" />
            <h3 className="text-4xl text-textprimary font-bold">{item.title}</h3>
            <p className="text-lg text-textsecondary font-normal">{item.text}</p>
            <button className="text-2xl font-semibold transition ease-in-out duration-150 hover:text-button">Contact now --&#62;</button>
          </div>})}
         
        </section>
        <section className="h-full">
          <div className="LinearBackground w-full flex py-28 text-center justify-center rounded-3xl">
                  <div className="flex flex-col items-center ">
                  <h1 className="text-7xl font-bold text-center text-textprimary mb-4">Optimize Yur Content <br />From Today</h1>
                    <p className="text-textsecondary text-2xl">
                      Growth-accelerating products for startups, ecommerce stores, and
                      more.
                    </p>
                    <div className="w-fit mt-14">
                      <Button onClick={() => {}} label="Get Start Free" />
                    </div>
                  </div>
                </div>
        </section>
      </div>
  </div>

  );
};

export default ContactUs;
