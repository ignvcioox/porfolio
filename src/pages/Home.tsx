import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";

import resume from "../assets/pdf/curriculum.pdf";
import { Background } from "../components/ui/Background";

export const Home = ({ id }: { id: string }) => {

    const codeToCopy = "npm create vite@latest";

    const [copy, setCopy] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(codeToCopy);
        setCopy(true);
        setTimeout(() => setCopy(false), 3000);
    };

    return (
        <section
            className="bg-light-mode-secondary-bg dark:bg-dark-mode-secondary-bg pt-52 md:pt-[312px] xl:pt-40 overflow-hidden relative pb-24 flex sm:justify-center"
            id={id}
        >
            <Background />
            <div className="grid md:grid-cols-2 md:items-center md:p-4 lg:p-6 z-10">
                <div className="m-4 p-2">
                    <h1 className="text-4xl sm:text-6xl md:text-4xl xl:text-7xl lg:text-left text-light-mode-text dark:text-dark-mode-text font-black">
                        <br />
                        Hi! I'm Benjamín,
                        <span className="flex items-center">
                            a web
                            <span className="inline-block align-middle mt-2 bg-gradient-to-t bg-animated-gradient rounded-xl rounded-br-none px-[0.75rem] py-2 md:py-1 lg:py-2 text-sm from-button to-[#745eff] md:px-6 md:ml-2 mx-2 text-center ml-2">
                                <span className="font-black text-white text-4xl sm:text-6xl md:text-3xl lg:text-4xl xl:text-6xl">
                                    Developer
                                </span>
                            </span>
                        </span>
                    </h1>

                    <h2 className="text-light-mode-text dark:text-dark-mode-text text-lg mt-4 max-w-[348px] sm:max-w-[440px] md:max-w-3xl mx-auto sm:text-center md:text-left" >
                        Soy un <span className="font-bold text-blue-400">desarrollador de software</span> dedicado a crear
                        <span> soluciones digitales impactantes</span> para
                        <span className="font-bold text-indigo-400"> marcas</span> y
                        <span className="font-bold text-blue-500"> usuarios.</span>
                    </h2>

                    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center mt-4 gap-4">
                        <a href={resume} download className="bg-primary-button-bg p-4 flex items-center gap-2 rounded-lg text-white text-sm font-medium shadow-md hover:bg-primary-button-hover transition">
                            Descargar CV
                            <ArrowDownTrayIcon className="size-5" />
                        </a>
                    </div>
                </div>


                <div className="hidden md:block z-10">
                    <div className="flex px-3 min-h-[40px] items-center rounded-t-md bg-gray-800 font-mono">
                        <button
                            className="ml-auto text-gray-400 p-1 hover:text-white transition"
                            type="button"
                            aria-label="Copy code"
                            onClick={handleCopy}
                        >
                            <svg className="size-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" />
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" />
                            </svg>
                            <span className="sr-only">Copy code</span>
                        </button>
                        {copy && (
                            <span className="ml-2 text-green-400 text-xs">Copied!</span>
                        )}
                    </div>
                    <div className="bg-black p-4 rounded-b-md text-white">
                        <pre className="flex items-center">
                            <code className="text-gray-500">- </code>
                            <code className="text-pink-500">npm </code>
                            <code className="relative flex items-center">
                                <span
                                    className="absolute block whitespace-nowrap overflow-hidden animate-[inputs_8s_steps(22)_infinite]"
                                >
                                    create vite@latest
                                </span>
                                <span className="absolute block h-full border-r-2 border-pink-500 animate-[cursor_0.5s_step-end_infinite_alternate]"></span>
                            </code>
                        </pre>
                    </div>
                </div>

            </div>

            <div className="absolute w-[840px] h-[640px] opacity-60 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 animate-[wave_55s_infinite_linear]" />
            <div className="absolute w-[540px] h-[700px] opacity-50 left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 animate-[wave_50s_infinite_linear]" />
            <div className="absolute w-[540px] h-[700px] opacity-40 left-1/2 top-[75%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 animate-[wave_45s_infinite_linear]" />

        </section>
    );
};