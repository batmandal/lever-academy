"use client";

import { Button } from "@/components";

export const Section6 = () => {
  return (
    <div className="flex flex-col gap-10">
      <p>SHILDEG BUTEEGDEHUUNUUD</p>
      <div className="LinearBackground w-full flex py-28 text-center rounded-3xl">
        <div className="w-1/2 flex flex-col items-center ">
          <p className="text-center mb-8 text-textprimary">
            Optimize your content today
          </p>
          <p className="text-textsecondary ">
            Growth-accelerating products for startups, ecommerce stores, and
            more.
          </p>
          <div className="w-fit mt-14">
            <Button onClick={() => {}} label="Get Start Free" />
          </div>
        </div>
      </div>
      <div className="LinearBackground w-full flex py-28 text-center rounded-3xl">
        <div className="w-1/2"></div>
        <div className="w-1/2 flex flex-col items-center ">
          <p className="text-center mb-8 text-textprimary">
            Optimize your content today
          </p>
          <p className="text-textsecondary">
            Growth-accelerating products for startups, ecommerce stores, and
            more.
          </p>
          <div className="w-fit mt-14">
            <Button onClick={() => {}} label="Get Start Free" />
          </div>
        </div>
      </div>
    </div>
  );
};
