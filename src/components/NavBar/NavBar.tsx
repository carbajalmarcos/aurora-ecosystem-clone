import cntl from "cntl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { data } from "./data";
import { Item } from "./Item";

const navBarWrapperCN = (isOnTop : boolean) => cntl`
  z-50
  w-full
  m-0
  ${!isOnTop? 'fixed top-0' :  'absolute top-12'}
`;

const navBarContainerCN = cntl`
  relative
  flex
  items-center
  w-full
  h-20
  px-10
  mx-auto
  max-w-[1400px]
  bg-transparent
  z-50
`

const menuItemsCN = cntl`
  flex
  items-center
  justify-between
  h-full
  gap-12
  text-white
  cursor-default
`

const getStartedButtonCN = cntl`
  flex
  items-center
  h-8
  px-3 
  text-sm 
  font-medium
  transition-transform
  bg-white
  rounded-md
  cursor-pointer
  hover:scale-105
  text-aurora-black
  active:scale-95 
`

const blurCN = cntl`
  absolute
  inset-0
  w-full
  h-20
  backdrop-filter
  backdrop-blur-xl
`

export const NavBar = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e: any) => {
    const { pageYOffset } = window;
    console.log(pageYOffset);
    setIsOnTop(pageYOffset <= 50);
  };
  return (
    <nav className={navBarWrapperCN(isOnTop)}>
      <div className={navBarContainerCN}>
        <div className="flex justify-start flex-1">
          <Image alt="Aurora" src="/aurora.svg" width={126} height={28} />
        </div>
        <div className={menuItemsCN}>
          {data.map((item, index) => (
            <Item
              itemData={item}
              isOnTop={isOnTop}
              key={`navBar-item-${index}`}
            />
          ))}
        </div>
        <div className="flex justify-end flex-1 ">
          <a className={getStartedButtonCN}>
            Get Started
          </a>
        </div>
      </div>
      {!isOnTop && (
        <div className={blurCN}></div>
      )}
    </nav>
  );
};
