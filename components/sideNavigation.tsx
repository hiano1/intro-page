import React from "react";

function SideNavigation() {
    return (
        <section
            className="
        fixed left-0 top-0 w-full z-10
        lg:w-1/4 lg:max-w-80 lg:h-full lg:static lg:rounded-2xl lg:p-2
        bg-gray-100/80 dark:bg-zinc-800/30
        font-semibold text-xl mb-8
        "
        >
            <div
                className="
         flex w-full justify-center items-center pb-4 pt-4
         lg:h-full lg:flex-col
         dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
        "
            >
                <div className="group px-6 py-3 rounded-full lg:border-2 hover:bg-blue-200/50 dark:hover:bg-gray-700 transition-[background-color] duration-300">
                    <span className="inline-block transition-transform lg:group-hover:scale-110 duration-300">
                        Introduce
                    </span>
                </div>
                <div className="w-0 h-0 lg:w-1 lg:h-16 lg:border-2 border-black"></div>
                <div className="group px-6 py-3 rounded-full lg:border-2 hover:bg-blue-200/50 dark:hover:bg-gray-700 transition-[background-color] duration-300">
                    <span className="inline-block transition-transform lg:group-hover:scale-110 duration-300">
                        Stack
                    </span>
                </div>
                <div className="w-0 h-0 lg:w-1 lg:h-16 lg:border-2 border-black"></div>
                <div className="group px-6 py-3 rounded-full lg:border-2 hover:bg-blue-200/50 dark:hover:bg-gray-700 transition-[background-color] duration-300">
                    <span className="inline-block transition-transform lg:group-hover:scale-110 duration-300">
                        Work
                    </span>
                </div>
                <div className="w-0 h-0 lg:w-1 lg:h-16 lg:border-2 border-black"></div>
                <div className="group px-6 py-3 rounded-full lg:border-2 hover:bg-blue-200/50 dark:hover:bg-gray-700 transition-[background-color] duration-300">
                    <span className="inline-block transition-transform lg:group-hover:scale-110 duration-300">
                        Contact
                    </span>
                </div>
            </div>
        </section>
    );
}

export default SideNavigation;
