import cntl from "cntl";
import React from "react";

const bgWrapperCN = cntl`
  absolute
  z-0 top-0
  w-full
  h-[80vh]
  max-h-[75vh]
  bg-hero
  bg-cover
`

const bgContainerCN = cntl`
  h-full
  bg-gradient-to-b
  from-transparent
  to-aurora-black
`

export const TopBackground = () => {
  return (
    <div className={bgWrapperCN}>
      <div className={bgContainerCN}></div>
    </div>
  );
};
