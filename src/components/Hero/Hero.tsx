import cntl from "cntl";
import Image from "next/image";
import React from "react";

const heroWrapperCN = cntl`
  container
  relative
  inset-0
  w-full
  max-w-6xl
  px-5
  mx-auto
  text-white
  md:px-10
`;
const heroContainerCN = cntl`
  flex flex-col
  items-center
  justify-center
  w-full
  pt-20
  pb-28
  h-max
`;
const heroTitleCN = cntl`
  p-2
  mt-32
  font-black
  text-transparent
  bg-gradient-to-r
  animate-text
  from-fuchsia-500
  via-cyan-400
  to-indigo-100
  bg-clip-text
  text-7xl
`;

const submitButtonCN = cntl`
  flex
  items-center
  justify-center
  px-8
  py-2
  mt-8
  font-medium
  rounded
  bg-translucent
  backdrop-filter
  backdrop-blur
  hover:backdrop-brightness-200
  hover:scale-103
  active:transform
`;
const wordingCN = cntl`
  max-w-xl
  mx-auto
  mt-8 text-sm
  leading-normal
  text-center
  text-secondary
`;

const inputContainerCN = cntl`
  flex
  items-center
  justify-center
  h-10
  mt-10
  rounded
  w-80
  backdrop-filter
  backdrop-blur
  bg-translucent
`;

const inputCN = cntl`
  flex-1
  p-0
  text-lg
  placeholder-white
  bg-transparent
  border-none
  outline-0
  placeholder-opacity-30
`;

export const Hero = ({ onSearch }: { onSearch: (value: any) => void }) => {
  return (
    <div className={heroWrapperCN}>
      <div className={heroContainerCN}>
        <h1 className={heroTitleCN}>
          <span>The momentum is building</span>
        </h1>
        <p className="mt-4 text-3xl">
          Your guide to what’s live today and coming soon on the Aurora network!
        </p>
        <button className={submitButtonCN}>Submit your project</button>
        <p className={wordingCN}>
          This list is for informational purposes only, and Aurora does not
          endorse any project listed here. DYOR before interacting with any of
          the projects listed below.
        </p>
        <div className={inputContainerCN}>
          <div className="flex items-center justify-center w-10">
            <Image
              src="/icons/search.svg"
              width={20}
              height={20}
              alt="Search"
            />
          </div>
          <input
            className={inputCN}
            type="text"
            onChange={onSearch}
            placeholder="Search projects by name"
          />
        </div>
      </div>
    </div>
  );
};
