import { Link } from "react-scroll";

import { Icon } from "./ui/Icon";

import GitHub from "../assets/icons/GitHub";
import Instagram from "../assets/icons/Instagram";
import LinkedIn from "../assets/icons/LinkedIn";

export const Footer = () => {

    return (
        <footer className="w-full py-8 px-10 bg-light-mode-bg dark:bg-dark-mode-bg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                    <div className="flex flex-col md:items-start items-center cursor-pointer md:text-left text-zinc-100 text-sm">

                        <Link
                            to="home"
                            href="/home"
                            className="text-light-mode-text dark:text-dark-mode-text p-2">
                            Inicio
                        </Link>

                        <Link
                            to="experience"
                            href="/experience"
                            className=" text-light-mode-text dark:text-dark-mode-text p-2">
                            Experiencia
                        </Link>

                        <Link
                            to="projects"
                            href="/projects"
                            className="text-light-mode-text dark:text-dark-mode-text p-2">
                            Proyectos
                        </Link>

                        <Link
                            to="contact"
                            href="/contact"
                            className="text-light-mode-text dark:text-dark-mode-text p-2">
                            Contáctame
                        </Link>
                        
                    </div>

                    <div className="flex justify-center gap-6">

                        <Icon
                            href="https://github.com/ignvcioox"
                            ariaLabel="Visit my GitHub profile"
                            children={<GitHub className="size-6" />}
                        />

                        <Icon
                            href="https://www.linkedin.com/in/ignvcioox/"
                            ariaLabel="Visit my LinkedIn profile"
                            children={<LinkedIn className="size-6" />}
                        />

                        <Icon
                            href="https://www.instagram.com/nach0_bmx_/"
                            ariaLabel="Visit my Instagram profile"
                            children={<Instagram className="size-6" />}
                        />

                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-light-mode-text dark:text-dark-mode-text text-sm">© 2025 Benjamín López</p>
                        <p className="text-light-mode-text dark:text-dark-mode-text text-xs mt-1">Portafolio con fines educativos</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};
