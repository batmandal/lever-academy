export const VisualDemoSection = () => {
  return (
    <div>
      <div className="mb-16 flex flex-col items-center">
        <h2 className="font-bold text-5xl text-textprimary mb-2">
          Courses, tests and analytics
        </h2>
        <p className="text-textsecondary text-[22px]">
          Growth-accelerating products for startups, ecommerce stores, angel
          investors, and more
        </p>
      </div>
      <div className="w-full overflow-hidden h-[85vh]  ">
        <div className="w-fit  flex  h-full  ">
          <div className="carousel h-full w-fit flex gap-6 ">
            <div className=" h-full w-[700px] bg-[#ecf1ff] rounded-3xl grid place-content-center">
              1
            </div>
            <div className=" h-full w-[700px] bg-[#f9f9f9] rounded-3xl grid place-content-center">
              2
            </div>
            <div className="mr-6 h-full w-[700px]  bg-[#fff2eb] rounded-3xl grid place-content-center">
              3
            </div>
          </div>
          <div className="carousel h-full w-fit flex gap-6 ">
            <div className=" h-full w-[700px] bg-[#ecf1ff]0 rounded-3xl grid place-content-center">
              1
            </div>
            <div className=" h-full w-[700px] bg-[#f9f9f9] rounded-3xl grid place-content-center">
              2
            </div>
            <div className=" mr-6 h-full w-[700px] bg-[#fff2eb] rounded-3xl grid place-content-center">
              3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
