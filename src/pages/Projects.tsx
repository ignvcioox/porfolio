import { LinkIcon } from "@heroicons/react/16/solid";
import hospital from "../assets/img/hospital.webp";

import codeDarkMode from "../assets/img/projects/code-darkmode.png";
import codeLightMode from "../assets/img/projects/code-lightmode.png";
import Github from "../assets/svg/Github";
import { projects } from "../data/projects";

import { useThemeMode } from "../hooks/useThemeMode";

export const Projects = ({ id }: { id: string }) => {

    const { theme } = useThemeMode();

    return (

        <section className="bg-light-mode-bg dark:bg-dark-mode-bg max-w-screen-xl mx-auto p-10" id={id}>
            
            <div className="flex gap-4 items-center">
                <img
                    src={theme === "dark" ? codeLightMode : codeDarkMode}
                    className="size-8"
                    alt="Icon Projects"
                />
                <h2 className="text-light-mode-text dark:text-dark-mode-text text-2xl font-black">Proyectos</h2>
            </div>

            {
                projects.map((project) => (
                    <div className="flex flex-col lg:flex-row items-start gap-8 mt-6">

                        <div className="rounded-xl overflow-hidden shadow-lg max-w-full max-h-72 lg:max-h-64">
                            <img
                                src={hospital}
                                alt="Proyecto Hospital"
                                className="object-contain w-full h-full transition duration-500 hover:scale-105"
                            />
                        </div>

                        <div className="flex-1 space-y-4">

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map(({ id, name, icon: Icon, background }) => (
                                    <div
    className="flex items-center gap-2 rounded-full py-1 px-2"
    key={id}
    style={{ background }}
>
    <Icon className="size-4" />
    <span className="text-white text-xs font-medium">{name}</span>
</div>
                                ))}
                            </div>

                            <p className="text-light-mode-text dark:text-dark-mode-text text-sm">
                                {project.description}
                            </p>

                            <ul className="list-disc list-inside text-slate-400 text-sm space-y-1">
                                {project.functions.map(({ id, description }) => (
                                    <li
                                        key={id}
                                        className="text-light-mode-text dark:text-dark-mode-text"
                                    >
                                        {description}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-3 items-center">

                                <a href="#" className="bg-primary-button-bg text-light-mode-text dark:text-dark-mode-text px-4 py-2 rounded font-medium flex items-center gap-2">
                                    Vista Previa
                                    <LinkIcon className="size-4"/>
                                </a>

                                <a
                                    href="#"
                                    className="bg-light-mode-secondary-bg dark:bg-dark-mode-secondary-bg font-medium rounded text-light-mode-text dark:text-dark-mode-text px-4 py-2 flex gap-2 items-center"
                                >
                                    <Github className="size-4" />
                                    Código
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section >
    );
};
