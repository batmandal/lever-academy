import { Button } from "@/components";

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
          <div className="carousel h-full w-fit flex  ">
            <div className=" h-full w-[700px] bg-[#ecf1ff] rounded-3xl flex flex-col justify-between p-10 mr-6">
              <div className="rounded-2xl overflow-hidden h-1/2">
                <img src="/math-teacher.jpg" />
              </div>
              <section>
                <h4 className="font-bold text-textprimary">Courses</h4>
                <p className="text-textsecondary">
                  Our team has updated and uploaded the most effective lessons
                  to help you learn and improve your IELTS skills, guiding you
                  toward achieving your desired score.
                </p>
              </section>
              <Button label={"Get Started Free"} href={"/"} />
            </div>
            <div className=" h-full w-[700px] bg-[#f9f9f9] rounded-3xl flex flex-col justify-between p-10 mr-6">
              <div className="rounded-2xl overflow-hidden h-1/2">
                <img src="/math-teacher.jpg" />
              </div>
              <section>
                <h4 className="font-bold">Tests</h4>
                <p className="text-textsecondary">
                  We have developed AI-generated practice tests, offering a
                  limitless amount of tests for students preparing for the
                  Entrance Examination.
                </p>
              </section>
              <Button label={"Get Started Free"} href={"/"} />
            </div>
            <div className=" h-full w-[700px] bg-[#fff2eb] rounded-3xl flex flex-col justify-between p-10 mr-6">
              <div className="rounded-2xl overflow-hidden h-1/2">
                <img src="/math-teacher.jpg" />
              </div>
              <section>
                <h4 className="font-bold">Analytics</h4>
                <p className="text-textsecondary">
                  Our unique advantage lies in the AI&apos;s ability to analyze
                  each student&apos;s strengths and weaknesses, creating
                  personalized tests designed to target and improve their weaker
                  areas.
                </p>
              </section>
              <Button label={"Get Started Free"} href={"/"} />
            </div>
          </div>
          <div className="carousel h-full w-fit flex  ">
            <div className=" h-full w-[700px] bg-[#ecf1ff] rounded-3xl flex flex-col justify-between p-10 mr-6">
              <div className="rounded-2xl overflow-hidden h-1/2">
                <img src="/math-teacher.jpg" />
              </div>
              <section>
                <h4 className="font-bold text-textprimary">Courses</h4>
                <p className="text-textsecondary">
                  Our team has updated and uploaded the most effective lessons
                  to help you learn and improve your IELTS skills, guiding you
                  toward achieving your desired score.
                </p>
              </section>
              <Button label={"Get Started Free"} href={"/"} />
            </div>
            <div className=" h-full w-[700px] bg-[#f9f9f9] rounded-3xl flex flex-col justify-between p-10 mr-6">
              <div className="rounded-2xl overflow-hidden h-1/2">
                <img src="/math-teacher.jpg" />
              </div>
              <section>
                <h4 className="font-bold">Tests</h4>
                <p className="text-textsecondary">
                  We have developed AI-generated practice tests, offering a
                  limitless amount of tests for students preparing for the
                  Entrance Examination.
                </p>
              </section>
              <Button label={"Get Started Free"} href={"/"} />
            </div>
            <div className=" h-full w-[700px] bg-[#fff2eb] rounded-3xl flex flex-col justify-between p-10 mr-6">
              <div className="rounded-2xl overflow-hidden h-1/2">
                <img src="/math-teacher.jpg" />
              </div>
              <section>
                <h4 className="font-bold">Analytics</h4>
                <p className="text-textsecondary">
                  Our unique advantage lies in the AI&apos;s ability to analyze
                  each student&apos;s strengths and weaknesses, creating
                  personalized tests designed to target and improve their weaker
                  areas.
                </p>
              </section>
              <Button label={"Get Started Free"} href={"/"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
