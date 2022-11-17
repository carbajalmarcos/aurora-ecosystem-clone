import React from "react";
import Image from "next/image";
import { NavBarListItem } from "../../interfaces/navBar";
import cntl from "cntl";

interface Props {
  navBarItemList: NavBarListItem[];
}

const itemListWrapperCN = cntl`
  relative 
  flex 
  items-center 
  justify-start 
  w-auto 
  cursor-pointer
`;

const itemListContainerCN = cntl`
  flex 
  items-center 
  justify-between 
  gap-4 
  group
`;
const imgItemContainerCN = cntl`
  flex 
  items-center 
  content-center 
  justify-center 
  w-10 
  h-10 
  p-1 
  bg-white 
  rounded-full 
  group-hover:bg-opacity-40 
  bg-opacity-20
`;
const textingItemWrapperCN = cntl`
  flex 
  flex-col 
  items-start 
  justify-start
  h-max
`;

const textingItemContainerCN = cntl`
  flex 
  items-center 
  justify-center 
  gap-2
`;

export const NavBarItemList = ({ navBarItemList }: Props) => {
  return (
    <>
      {navBarItemList?.map((item, index) => {
        return (
          <div className={itemListWrapperCN} key={`item-list-${index}`}>
            <div className={itemListContainerCN}>
              <div className={imgItemContainerCN}>
                <Image
                  src={`/icons/${item.icon}`}
                  width={18}
                  height={18}
                  alt={`menu item ${item.title}`}
                  className=" opacity-60"
                />
              </div>
              <div className={textingItemWrapperCN}>
                <div className={textingItemContainerCN}>
                  <p className="text-base font-normal">{item.title} </p>
                  {item.nextIcon && (
                    <div className={item.nextIconStyle}>
                      <Image
                        src={`/icons/${item.nextIcon}`}
                        alt="arrow"
                        width={14}
                        height={14}
                      />
                    </div>
                  )}
                </div>
                <p
                  className={`text-base text-slate-400 ${
                    !item?.subtitle && "hidden"
                  }`}
                >
                  {item?.subtitle}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
