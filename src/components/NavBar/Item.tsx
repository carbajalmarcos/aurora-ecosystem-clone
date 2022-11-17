import cntl from "cntl";
import React, { useState } from "react";
import { NavBarItem } from "../../interfaces/navBar";
import { NavBarItemButton } from "./NavBarItemButton";
import { NavBarItemList } from "./NavBarItemList";

const noItemListContainerCN = cntl`
  relative
  flex
  flex-col
  items-center
  justify-center
  h-full
`;
const noItemListSpanCN = cntl`
  flex
  items-center
  justify-center
  h-full
  transition 
  hover:opacity-60
`;

const itemListContainerCN = cntl`
  relative
  flex
  flex-col
  items-center
  justify-center
  h-full 
`;

const itemListSpanCN = (showMenu: boolean) => cntl`
  flex
  items-center
  justify-center
  h-full
  transition
  hover:opacity-60
  ${showMenu && "opacity-60"}
`;

const menuCN = (isOnTop: boolean) => cntl`
  absolute
  flex
  flex-col
  gap-5
  p-5
  overflow-scroll
  w-max
  min-w-[16rem]
  top-full
  backdrop-filter
  backdrop-blur-xl
  ${isOnTop ? "rounded-xl" : "rounded-b-xl"}
`

interface Props {
  itemData: NavBarItem;
  isOnTop: boolean;
}

export const Item = ({ itemData, isOnTop }: Props) => {
  const { type, title, navBarItemList, btnButton, url } = itemData;
  const [showMenu, setSetShowMenu] = useState(false);
  if (type && type === "url")
    return (
      <div className={noItemListContainerCN}>
        <span className={noItemListSpanCN}>
          <a href={url} target="_blank">
            {title}
          </a>
        </span>
      </div>
    );
  return (
    <div
      className={itemListContainerCN}
      onMouseOver={() => setSetShowMenu(true)}
      onMouseLeave={() => setSetShowMenu(false)}
    >
      <span
        className={itemListSpanCN(showMenu)}
      >
        {title}
      </span>
      {showMenu && (
        <div
          className={menuCN(isOnTop)}
          onMouseLeave={() => setSetShowMenu(false)}
        >
          {navBarItemList && <NavBarItemList navBarItemList={navBarItemList} />}
          {btnButton && <NavBarItemButton btnButton={btnButton} />}
        </div>
      )}
    </div>
  );
};
