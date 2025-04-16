import { Quote } from "@/assets/svg";

export const CommentCard = () => {
  const commentsJson = [
    {
      name: "Metanoia",
      who: "Lever Education Graduate",
      text: "Lever Education delivers exceptional preparation for IELTS, SAT and ЭШ with experienced instructors and a well-designed curriculum. The teachers really know how to connect with the students. If you want fun and good results Lever Education is the best choice you could make!!!",
    },
    // {
    //   name: "Tuguldur",
    //   who: "Lever Education Graduate",
    //   text: "I would personally suggest 'Lever Education' to help you achieve your current goal. Have fun and enjoy your studies!",
    // },
    // {
    //   name: "Kuzumo Here",
    //   who: "Lever Education Graduate",
    //   text: "I had an excellent experience with Lever Education's IELTS classes. The teaching methods are clear, practical, and tailored to help students excel in all aspects of IELTS tests.",
    // },
    // {
    //   name: "Khantushig",
    //   who: "Lever Education Graduate",
    //   text: "Few students and quality teaching.",
    // },
  ];

  return (
    <div className="flex items-center justify-center gap-9 w-full">
      {commentsJson.map((comment, index) => (
        <div
          key={index}
          className="p-9 bg-[#F9F9F9] rounded-3xl flex flex-col items-center gap-6 w-full max-w-md"
        >
          <div className="w-[72px] h-[55px]">
            <Quote />
          </div>
          <p className="text-center">{comment.text}</p>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-black"></div>
            <p className="mt-4 mb-px font-semibold">{comment.name}</p>
            <p className="text-[#41404B] text-sm">{comment.who}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
