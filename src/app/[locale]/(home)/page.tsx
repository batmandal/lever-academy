"use client";

import {
  Section1,
  // Section2,
  Section3,
  // Section4,
  // Section5,
  // Section6,
  Section7,
  VisualDemoSection,
  WhyChooseOurPlatformSection,
} from "./sections";

const Home = () => {
  return (
    <div className="Home w-full flex flex-col">
      <Section1 />
      <div className="px-32 flex flex-col gap-36">
        <WhyChooseOurPlatformSection />
        {/* <Section2 /> */}
        <VisualDemoSection />
        <Section3 />
        {/* <Section4 /> */}
        {/* <Section5 /> */}
        {/* <Section6 /> */}
        <Section7 />
      </div>
    </div>
  );
};

export default Home;
