// module export
import { Intro, Stack } from "@/components";

export default function Home() {
    // const searchParams = useSearchParams();
    // const x = searchParams.get("x");

    return (
        <main className="w-full flex flex-col min-h-screen p-16">
            {/* nav 세로로 할까 */}
            <section className="w-full items-center justify-center lg:flex font-semibold text-xl mb-8">
                <div
                    className="
                    fixed left-0 top-0 flex w-full justify-evenly border-b pb-6 pt-8 items-center
                    dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
                    lg:static  lg:rounded-2xl lg:border lg:bg-gray-100/80 lg:p-2 lg:dark:bg-zinc-800/30"
                >
                    <div className="group px-6 py-3 rounded-full hover:bg-blue-200/50 dark:hover:bg-gray-700 transition-[background-color] duration-300">
                        <span className="inline-block transition-transform lg:group-hover:scale-110 duration-300">
                            Introduce
                        </span>
                    </div>
                    <div className="group px-8 py-4 rounded-full hover:bg-blue-200/50 dark:hover:bg-gray-700 transition-[background-color] duration-300">
                        <span className="inline-block transition-transform lg:group-hover:scale-110 duration-300">
                            Stack
                        </span>
                    </div>
                    <div className="group px-8 py-4 rounded-full hover:bg-blue-200/50 dark:hover:bg-gray-700 transition-[background-color] duration-300">
                        <span className="inline-block transition-transform lg:group-hover:scale-110 duration-300">
                            Work
                        </span>
                    </div>
                    <div className="group px-8 py-4 rounded-full hover:bg-blue-200/50 dark:hover:bg-gray-700 transition-[background-color] duration-300">
                        <span className="inline-block transition-transform lg:group-hover:scale-110 duration-300">
                            Contact
                        </span>
                    </div>
                </div>
            </section>
            {/* intro */}
            {/* 소개 짠 */}
            {/* 자기소개 */}
            <Intro />
            {/* 스택 (점수 별론가 피드백?) */}
            <Stack />
            {/* 포폴 펼치기.. */}
            {/* 간단한 contact */}
        </main>
    );
}
