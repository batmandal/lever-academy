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
    <main className="Home w-full flex flex-col items-center">
      <Section1 />

      <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 flex flex-col gap-32 sm:gap-36">
        <WhyChooseOurPlatformSection />
        {/* <Section2 /> */}
        <VisualDemoSection />
        <Section3 />
        {/* <Section4 />
        <Section5 />
        <Section6 /> */}
        <Section7 />
      </div>
    </main>
  );
};

export default Home;
