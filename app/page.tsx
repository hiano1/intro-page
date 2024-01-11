import { FireIcon, SunIcon, RocketLaunchIcon, Cog8ToothIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

export default function Home() {
    // const searchParams = useSearchParams();
    // const x = searchParams.get("x");

    return (
        <main className="w-full max-w-5xl flex flex-col min-h-screen min-w-full p-16">
            {/* header */}
            <section className="w-full items-center justify-center lg:flex font-semibold text-xl mb-8">
                <div
                    className="
                    fixed left-0 top-0 flex w-full justify-evenly border-b pb-6 pt-8 items-center
                    dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
                    lg:static  lg:rounded-2xl lg:border lg:bg-gray-100/80 lg:p-2 lg:dark:bg-zinc-800/30"
                >
                    <p className="group px-6 py-3 rounded-full hover:bg-blue-200/50 dark:hover:bg-gray-700 transition-[background-color] duration-300">
                        <span className="inline-block transition-transform lg:group-hover:scale-110 duration-300">
                            Introduce
                        </span>
                    </p>
                    <p className="group px-8 py-4 rounded-full hover:bg-blue-200/50 dark:hover:bg-gray-700 transition-[background-color] duration-300">
                        <span className="inline-block transition-transform lg:group-hover:scale-110 duration-300">
                            Stack
                        </span>
                    </p>
                    <p className="group px-8 py-4 rounded-full hover:bg-blue-200/50 dark:hover:bg-gray-700 transition-[background-color] duration-300">
                        <span className="inline-block transition-transform lg:group-hover:scale-110 duration-300">
                            Work
                        </span>
                    </p>
                    <p className="group px-8 py-4 rounded-full hover:bg-blue-200/50 dark:hover:bg-gray-700 transition-[background-color] duration-300">
                        <span className="inline-block transition-transform lg:group-hover:scale-110 duration-300">
                            Contact
                        </span>
                    </p>
                </div>
            </section>
            {/* intro */}
            <section className="lg:bg-gray-100/80 p-6 rounded-2xl flex flex-grow justify-evenly">
                <div className="flex flex-col text-3xl font-bold p-4 gap-4">
                    <Cog8ToothIcon width={60} />
                    <p>주니어 개발자</p>
                    <p>최정우</p>
                </div>
                <div className="grid grid-cols-2 p-6 gap-6 text-sm w-3/4 tracking-wide text-pretty text-white">
                    <div className="flex flex-col p-6 rounded-2xl bg-indigo-600 duration-300 hover:scale-110">
                        <AcademicCapIcon width={40} />
                        <p className="text-xl font-semibold my-4">학업 및 경력</p>
                        <div className="mb-2">
                            <p>~~~졸업</p>
                            <p>~~~졸업</p>
                            <p>~~~근무</p>
                        </div>
                        <p>
                            학교 졸업당시에는 JAVA, 안드로이드를 주로 공부했고 이전 직장에서 JS,PHP 기반 풀스택 개발자로
                            근무했습니다.
                        </p>
                    </div>
                    <div className="group flex flex-col p-6 rounded-2xl bg-indigo-600 duration-300 hover:scale-110">
                        <FireIcon width={40} />
                        <p className="text-xl font-semibold my-4">프론트엔드 전향 계기</p>
                        <p className="line-clamp-4 group-hover:line-clamp-none">
                            짧은 기간이지만 사내 솔루션 유지보수, 외주 개발, 신규 프로젝트 개발등 여러 일들을 경험해봤고
                            그 중에서 기획, 디자인 팀 분들과 직접 소통하며 신규 프로젝트를 개발할때 요구 사항에 맞춰
                            어떤 기술을 사용할지 고민하고 피드백을 받으며 작업물을 개선해 나가는 부분이 즐겁고 좋은
                            기억으로 남아 사용자들과의 소통이 많은 프론트엔드에 집중해보고 싶어 공부를 하고있습니다.
                        </p>
                    </div>
                    <div className="flex flex-col p-6 rounded-2xl bg-indigo-600 duration-300 hover:scale-110">
                        <SunIcon width={40} />
                        <p className="text-xl font-semibold my-4">강점</p>
                        <p></p>
                    </div>
                    <div className="flex flex-col p-6 rounded-2xl bg-indigo-600 duration-300 hover:scale-110">
                        <RocketLaunchIcon width={40} />
                        <p className="text-xl font-semibold my-4">지향점</p>
                        <p>
                            React, Next.js, Tailwindcss 등을 사용해 공부하고있으며 사용 언어와 개발 기술에 매몰되지 않고
                            사용자 입장에서 좋은 프로그램을 만드는 개발자가 되고싶습니다.
                        </p>
                    </div>
                </div>
            </section>
            {/* card */}
            {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"> */}
            {/* <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Docs{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Find in-depth information about Next.js features and API.
                </p>
            </a>

            <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Learn{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Learn about Next.js in an interactive course with&nbsp;quizzes!
                </p>
            </a>

            <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Templates{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Explore starter templates for Next.js.</p>
            </a>

            <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                    Deploy{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    Instantly deploy your Next.js site to a shareable URL with Vercel.
                </p>
            </a> */}
            {/* </div> */}
            {/* footer */}
            {/* <div className="fixed bottom-0 left-0 flex h-16 w-full items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
                <a
                    className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    By{" "}
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className="dark:invert"
                        width={100}
                        height={24}
                        priority
                    />
                </a>
            </div> */}
        </main>
    );
}
