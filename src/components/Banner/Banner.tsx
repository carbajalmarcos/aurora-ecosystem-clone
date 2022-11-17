import cntl from "cntl";
import Image from "next/image";
import React from "react";

const bannerContainerCN = cntl`
    absolute
    top-0
    z-30
    flex
    justify-center
    w-full
    h-12
    text-sm
    leading-none
    bg-gradient-to-r
    from-[#FCFC48]
    via-[#ABF348]
    to-[#5FEB5B]
`;

const auroraLinkCN = cntl`
    flex
    items-center
    justify-center
    flex-1
    px-3
    font-medium
    text-black
    grou
`;

export const Banner = () => {
    return (
        <div className={bannerContainerCN}>
            <a href="https://aurora.plus" className={auroraLinkCN}>
                <Image src="/auroraplus.svg" alt="aurora plus" width={90} height={16} />
                <div className="flex-shrink-0 w-0.5 h-4 mx-4 bg-black"></div>
                <span>Claim your free transactions</span>
                <Image
                    src="/aurorabanner.svg"
                    alt="aurora plus"
                    width={12}
                    height={12}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                />
            </a>
        </div>
    );
};
