"use clent";

import { Footer } from "@/components";
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
} from "./sections";

const Home = () => {
  return (
    <div className="Home w-full flex flex-col">
      <Section1 />
      <div className="px-32 flex flex-col gap-28">
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
