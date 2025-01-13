export const OtherButton = () => {
  return (
    <div className="flex justify-center">
      <a
        href="#_"
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-[#003B46] p-4 px-5 py-2.5 font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out"
      >
        <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-[#003B46] text-white duration-300 group-hover:translate-x-0">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex h-full w-full transform items-center justify-center text-[#003B46] transition-all duration-300 group-hover:translate-x-full">
          Button Text
        </span>
        <span className="invisible relative">Button Text</span>
      </a>
    </div>
  );
};
