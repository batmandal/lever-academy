import { Light, Pencil } from "@/assets/svg";

const data = [
  {
    icon: <Light />,
    text: "Adaptive Testing: Our AI identifies gaps and creates questions to target specific weaknesses.",
  },
  {
    icon: <Pencil />,
    text: "Instant Insights: Real-time analytics provide actionable feedback for better learning outcomes.",
  },
  {
    icon: <Light />,
    text: "Progress Tracking: Students can achieve their academic goals by monitoring their progress, receiving personalized feedback, and customized study plans.",
  },
  {
    icon: <Light />,
    text: "Global Connectivity: Teachers from different institutions, schools, and countries can easily connect with their students",
  },
];

export const WhyChooseOurPlatformSection = () => {
  return (
    <div className="mt-28 flex flex-col">
      <h2 className="font-bold text-textprimary text-5xl mb-16">
        Why Choose Our Platform
      </h2>
      <section className="flex gap-10">
        <div className="bg-[#f4f7ff] w-[50%] h-[60vh] rounded-2xl"></div>
        <div className="w-[50%] flex flex-col gap-12">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex ">
                <div className="w-[68px] h-[68px] mr-8 rounded-full bg-[#f4f7ff] p-4">
                  {item.icon}
                </div>

                <div className="w-full h-fit font-bold text-2xl">
                  {item.text}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
