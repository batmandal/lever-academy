import { PriceCard } from "@/components/PriceCard";

export const Section4 = () => {
  return (
    <div>
      <div className="mb-16">
        <p className="text-textprimary text-[56px] mb-2">
          Flexible Pricing Options
        </p>
        <p className="text-textsecondary text-[22px]">
          Join our pro features for unlimited without any contract and cancel
          anytime.
        </p>
      </div>
      <div className="flex gap-9">
        <PriceCard bgcolor="#f4f7ff" />
        <PriceCard bgcolor="#f9f9f9" />
        <PriceCard bgcolor="#fff2eb" />
      </div>
    </div>
  );
};
