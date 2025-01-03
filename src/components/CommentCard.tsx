import { Quote } from "@/assets/svg";

export const CommentCard = () => {
  return (
    <div className="p-9 bg-[#F9F9F9] rounded-3xl flex w-full flex-col items-center gap-9">
      <div className="w-[72px] h-[55px]">
        <Quote />
      </div>
      <p>
        Our website is traffic has skyrocketed since using Wordcraft. The
        SEO-friendly content it generates is pure gold. We have seen a
        noticeable improvement in our search engine rankings.
      </p>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-black"></div>
        <p className="mt-4 mb-px">Alexandra S.</p>
        <p className="text-[#41404B]">Content Marketing Manager</p>
      </div>
    </div>
  );
};
