import React, { useState } from "react";
import Image from "next/image";
import cntl from "cntl";

const popUpContainerCN = cntl`
    absolute
    cursor-pointer
    top-2
    right-2
    w-max
`;
const imgCN = cntl`
    text-white
    transition-opacity
    opacity-50
    fill-current
    hover:opacity-100
`;

const spanCN = cntl`
    absolute
    right-0
    px-2
    py-1
    text-sm
    font-semibold
    text-black
    bg-white
    rounded
    text-opacity-90
    top-7
    w-max
`;

export const GrantPopUp = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <>
      <div
        className={popUpContainerCN}
        onMouseOver={() => setShowPopUp(true)}
        onMouseLeave={() => setShowPopUp(false)}
      >
        <Image
          src="/icons/grantverify.svg"
          width={24}
          height={24}
          className={imgCN}
          alt="Received a grant"
        />
        {showPopUp && <span className={spanCN}>Received a grant</span>}
      </div>
    </>
  );
};
