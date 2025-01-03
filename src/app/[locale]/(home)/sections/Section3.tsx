"use client";
import { Button } from "@/components";

export const Section3 = () => {
  return (
    <div className="relative">
      <img src="useBrain.avif" />
      <div className="absolute top-0 w-full h-full p-14 flex flex-col justify-between items-end">
        <div className="w-60 right-0">
          <Button onClick={() => {}} color={true} label="Get Started Freee" />
        </div>
        <p className="text-[80px] text-white">
          Experience the transformative capabilities of - crafting content with
          Wordcraft AI
        </p>
      </div>
    </div>
  );
};
