import cntl from "cntl";
import React, { useEffect, useState } from "react";

const meteorWrapperCN = (value: string) => cntl`
    ${value}
    absolute 
    z-10
    rotate-135  
    flex 
    flex-col 
    gap-16 
    h-[2px] 
    rounded-full 
    w-2/3
`;
const meteorContainerCN = cntl`
    absolute 
    flex 
    items-center 
    justify-end 
    h-full 
    text-right 
    rounded-full 
    w-52 
    bg-gradient-to-r 
    from-transparent 
    to-slate-500 
    animate-loading
`

const meteorCN = cntl`
    w-1
    h-1
    rounded-full
    shadow-meteor
    bg-gradient-to-r
    from-transparent
    to-white
`

export const Meteors = () => {
    const [currentIndex, setCurrentIndex] = useState(3);

    const randomExcluded = (min: number, max: number, excluded: number) => {
        let n = Math.floor(Math.random() * (max - min) + min);
        if (n >= excluded) n++;
        return n;
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            let randomNumber = randomExcluded(0, 3, currentIndex);
            setCurrentIndex(randomNumber);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    const renderMeteor = (position: string) => {
        return (
            <div className={meteorWrapperCN(position)}>
                <div className={meteorContainerCN}>
                    <div className={meteorCN}></div>
                </div>
            </div>
        );
    };

    const meteors = [
        renderMeteor("top-[10rem] -left-[10%]"),
        renderMeteor("top-[15rem] -left-[5%]"),
        renderMeteor("top-[15rem] left-[25%]"),
        renderMeteor("top-[15rem] left-[60%]")
    ];

    return (
        <div className="relative inset-0 w-full max-h-[100vh]">{meteors[currentIndex]}</div>
    );
};
