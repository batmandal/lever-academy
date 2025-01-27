import { Light, Pencil } from "@/assets/svg";

const data = [
  {
    icon: <Light />,
    title: "Adaptive Testing:",
    text: "Our AI identifies gaps and creates questions to target specific weaknesses.",
  },
  {
    icon: <Pencil />,
    title: "Instant Insights:",
    text: "Real-time analytics provide actionable feedback for better learning outcomes.",
  },
  {
    icon: <Light />,
    title: "Progress Tracking:",
    text: "Students can achieve their academic goals by monitoring their progress, receiving personalized feedback, and customized study plans.",
  },
  {
    icon: <Light />,
    title: "Global Connectivity: ",
    text: "Teachers from different institutions, schools, and countries can easily connect with their students",
  },
];

export const WhyChooseOurPlatformSection = () => {
  return (
    <div className="mt-32 flex flex-col">
      <h2 className="font-bold text-textprimary text-5xl mb-16">
        Why Choose Our Platform
      </h2>
      <section className="flex gap-16">
        <div className="bg-[#f4f7ff] w-[50%] h-[60vh] rounded-2xl"></div>
        <div className="w-[50%] flex flex-col gap-16">
          {data.map((item, index) => {
            return (
              <div key={index} className="flex ">
                <div className="w-[68px] h-[68px] mr-4 rounded-full bg-[#f4f7ff] p-4">
                  {item.icon}
                </div>

                <div className="w-full h-fit ">
                  <p className="font-bold text-3xl text-textprimary mb-4">
                    {item.title}
                  </p>
                  <p className="text-textsecondary text-xl">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
