// import { PriceCard } from "@/app/[locale]/(home)/components/PriceCard";
import { Button } from "@/components";
import { useTranslations } from "next-intl";

export const Section4 = () => {
  const t = useTranslations("Section4");
  return (
    <div>
      <div className="mb-16">
        <h2 className="text-textprimary text-[56px] font-bold mb-2">
          {t("maintext")}
        </h2>
        <p className="text-textsecondary text-[22px]">{t("helpertext")}</p>
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
         <div
              className={`p-9 rounded-3xl w-[396px] flex flex-col gap-8 bg-[#f4f7ff]`}
            >
              <div className="flex flex-col gap-9">
                <div className="">
                  <p className="text-[18px] text-textprimary mb-2">FREE PLAN</p>
                  <p className="text-[16px] text-textsecondary ">
                    Get exclusive podcast from your favorite hosts on here for free
                  </p>
                </div>
                <div className="flex items-end ">
                  <p className="text-[52px] text-textprimary">Free</p>
                  <p className="text-[18px] text-textsecondary pb-3">/month</p>
                </div>
                <Button href="/" label="Get Started Free" />
              </div>
              <div>
                <p className="text-[18px]">Basic AI-generated tests</p>
                <p className="text-[18px]">Limited analytics</p>
              </div>
            </div>
         <div
              className={`p-9 rounded-3xl w-[396px] flex flex-col gap-8 bg-[#f9f9f9]`}
            >
              <div className="flex flex-col gap-9">
                <div className="">
                  <p className="text-[18px] text-textprimary mb-2">PRO PLAN</p>
                  <p className="text-[16px] text-textsecondary ">
                    Get exclusive podcast from your favorite hosts on here for free
                  </p>
                </div>
                <div className="flex items-end ">
                  <p className="text-[52px] text-textprimary">$9.99</p>
                  <p className="text-[18px] text-textsecondary pb-3">/month</p>
                </div>
                <Button href="/" label="Get Started Free" />
              </div>
              <div>
                <p className="text-[18px]">Unlimited tests</p>
                <p className="text-[18px]">Detatiled perfomance analytics</p>
                <p className="text-[18px]">Priority support</p>
              </div>
            </div>
         <div
              className={`p-9 rounded-3xl w-[396px] flex flex-col gap-8 bg-[#fff2eb]`}
            >
              <div className="flex flex-col gap-9">
                <div className="">
                  <p className="text-[18px] text-textprimary mb-2">INSTITUTION PLAN</p>
                  <p className="text-[16px] text-textsecondary ">
                    Get exclusive podcast from your favorite hosts on here for free
                  </p>
                </div>
                <div className="flex items-end ">
                  <p className="text-[52px] text-textprimary">Contact</p>
                  <p className="text-[18px] text-textsecondary pb-3 ml-2 font-semibold">for pricing</p>
                </div>
                <Button href="/" label="Get Started Free" />
              </div>
              <div>
                <p className="text-[18px]">Full customization</p>
                <p className="text-[18px]">Dedicated support team</p>
              </div>
            </div>
            
        {/* <PriceCard bgcolor="#f4f7ff" />
        <PriceCard bgcolor="#f9f9f9" />
        <PriceCard bgcolor="#fff2eb" /> */}
      </div>
    </div>
  );
};
