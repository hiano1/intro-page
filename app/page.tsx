"use client";
import { useState, useRef, useEffect, forwardRef } from "react";
import { Intro, Stack } from "@/components";
import SideNavigation from "@/components/sideNavigation";

export default function Home() {
    const mainDiv = useRef<HTMLElement>(null);
    const [pageIndex, setPageIndex] = useState(0);

    useEffect(() => {
        if (mainDiv && mainDiv.current) {
            const ref = mainDiv.current;
            const wheelHandler = (e: any) => {
                e.preventDefault();
                // add timer
                const { deltaY } = e;
                const { scrollTop } = ref;
                const pageHeight = window.innerHeight;
                deltaY > 0 ? setPageIndex(pageIndex + 1) : deltaY < 0 ? setPageIndex(pageIndex - 1) : null;
                // console.log(pageHeight * pageIndex);
                // ref.scrollTo({
                //     top: pageHeight * pageIndex,
                //     left: 0,
                //     behavior: "smooth",
                // });
            };
            ref.addEventListener("wheel", wheelHandler);
            return () => {
                ref.removeEventListener("wheel", wheelHandler);
            };
        }
    }, [pageIndex]);

    return (
        <div className="flex h-screen">
            <SideNavigation />
            <main ref={mainDiv} className="w-full h-full p-16">
                {/* nav 세로로 할까 */}
                {/* intro */}
                {/* 소개 짠 */}
                {/* 자기소개 */}
                <Intro />
                {/* 스택 (점수 제거하고 image card list 후 클릭이나 호버시 설명) */}
                <Stack />
                {/* 포폴 펼치기.. */}
                {/* 간단한 contact */}
            </main>
        </div>
    );
}
