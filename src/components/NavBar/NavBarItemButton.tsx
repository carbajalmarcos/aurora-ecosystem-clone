import React from "react";
import Image from "next/image";
import { navBarInnerButton } from "../../interfaces/navBar";
import cntl from "cntl";

interface Props {
  btnButton?: navBarInnerButton[][];
}

const buttonCN = cntl`
  flex
  items-center
  justify-center
  w-full 
  gap-2 
  py-2 
  rounded 
  bg-translucent 
  hover:bg-white 
  hover:bg-opacity-40
`;

export const NavBarItemButton = ({ btnButton }: Props) => {
  return (
    <div className="flex flex-col gap-2 mt-2">
      {btnButton?.map((btnValue, index) => {
        return (
          <div className="flex w-full gap-3" key={index}>
            {btnValue?.map((btn, i) => {
              return (
                <a
                  key={`btn-${i}`}
                  href={btn.url}
                  target="_blank"
                  className={buttonCN}
                >
                  <Image
                    src={`/icons/${btn.icon}`}
                    height={24}
                    width={24}
                    alt={btn.title}
                  />
                  <p>{btn.title}</p>
                </a>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
