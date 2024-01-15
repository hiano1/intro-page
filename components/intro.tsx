import { FireIcon, SunIcon, RocketLaunchIcon, Cog8ToothIcon, AcademicCapIcon } from "@heroicons/react/24/outline";
function Intro() {
    return (
        <section className="lg:w-full lg:h-full lg:bg-gray-100/80 p-6 rounded-2xl lg:flex">
            <div className="flex flex-col text-3xl font-bold p-4 gap-4 items-center lg:items-start">
                <Cog8ToothIcon width={60} />
                <p>주니어 개발자</p>
                <p>최정우</p>
            </div>
            <div className="grid lg:grid-cols-2 lg:p-6 gap-6 text-sm lg:w-3/4 tracking-wide text-pretty text-white leading-6">
                <div className="flex flex-col p-6 rounded-2xl bg-indigo-600 duration-300 hover:scale-110">
                    <AcademicCapIcon width={40} />
                    <p className="text-xl font-semibold my-4">학업 및 경력</p>
                    <div className="mb-2">
                        <p>한국 폴리텍 2대학 컴퓨터 정보 전문학사(14.03 ~ 18.02)</p>
                        <p>국가평생교육 진흥원 컴퓨터공학 학사(18.07 ~ 20.08)</p>
                        <p>메이크봇 근무(21.01 ~ 21.11)</p>
                    </div>
                    <p>
                        학교 졸업당시에는 JAVA, 안드로이드를 주로 공부했고 이전 직장에선 JS,PHP 기반 풀스택 개발자로
                        근무했습니다.
                    </p>
                </div>
                <div className="group flex flex-col p-6 rounded-2xl bg-indigo-600 duration-300 hover:scale-110">
                    <FireIcon width={40} />
                    <p className="text-xl font-semibold my-4">프론트엔드 전향 계기</p>
                    <p>
                        짧은 기간이지만 사내 솔루션 유지보수, 외주 개발, 신규 프로젝트 개발등 여러 일들을 경험해봤고 그
                        중에서 기획, 디자인 팀 분들과 직접 소통하며 신규 프로젝트를 개발할때 요구 사항에 맞춰 어떤
                        기술을 사용할지 고민하고 피드백을 받으며 작업물을 개선해 나가는 부분이 즐겁고 좋은 기억으로 남아
                        사용자들과의 소통이 많은 프론트엔드에 집중해보고 싶어 공부를 하고있습니다.
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
    );
}

export default Intro;
