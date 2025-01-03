"use client";

import { Button } from ".";

type PriceCardType = { bgcolor: string };
export const PriceCard = (props: PriceCardType) => {
  const { bgcolor } = props;

  return (
    <div
      className={`p-9 rounded-3xl w-full flex flex-col gap-8`}
      style={{ backgroundColor: bgcolor }}
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
        <Button onClick={() => {}} label="Get Started Free" />
      </div>
      <div>
        <p className="text-[18px]">100 Credit (100 words)</p>
        <p className="text-[18px]">100 Credit (100 words)</p>
        <p className="text-[18px]">100 Credit (100 words)</p>
        <p className="text-[18px]">100 Credit (100 words)</p>
        <p className="text-[18px]">100 Credit (100 words)</p>
        <p className="text-[18px]">100 Credit (100 words)</p>
      </div>
    </div>
  );
};
