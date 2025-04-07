import React from "react";
interface Props {
  heading: string;
}
const SectionHeader: React.FC<Props> = ({ heading }) => {
  return (
    <div className="flex justify-center items-center space-y-2 flex-col">
      <h1 className="font-['Cinzel'] text-8xl md:text-6xl text-amber-300">
        {heading}
      </h1>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-1 my-2 bg-amber-300 border-0 rounded dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-gray-800 left-1/2 dark:bg-gray-800">
          <svg
            className="w-4 h-4 text-amber-300 dark:text-amber-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
