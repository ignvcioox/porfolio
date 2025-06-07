import { Link } from "react-scroll";
import { XMarkIcon } from "@heroicons/react/16/solid";

import { navigation } from "../data/navbar";
import { useNavigation } from "../hooks/useNavigation";


export const Navigation = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {

    const { activeId, handleSetActive, menuRef } = useNavigation(onClose);

    return (
        <nav className={`fixed top-0 right-0 bottom-0 w-2/3 bg-light-mode-bg dark:bg-dark-mode-bg border-l border-zinc-200 dark:border-zinc-800 ${isOpen ? "flex" : "hidden"} lg:static lg:flex lg:border-none`} ref={menuRef}>

            <button className="fixed top-3 right-4 p-2 text-light-mode-text dark:text-dark-mode-text lg:hidden" onClick={onClose}>
                <XMarkIcon className="size-5" />
            </button>

            <div className="flex flex-col flex-grow lg:flex-row gap-6 justify-center text-light-mode-text dark:text-dark-mode-text items-center text-center">
                {
                    navigation.map(({ id, title }) => (
                        <Link
                            className={`text-light-mode-text dark:text-dark-mode-text justify-center hover:text-zinc-800  dark:hover:text-zinc-100 p-2 md:w-1/3 lg:w-auto cursor-pointer text-sm font-medium 
                                ${activeId === id
                                    ? "flex bg-primary-button-bg lg:text-indigo-500 lg:dark:text-indigo-400  rounded w-2/3 lg:bg-transparent"
                                    : ""
                                }`}
                            href={`${id}`}
                            key={id}
                            offset={-70}
                            onSetActive={() => handleSetActive(id)}
                            spy={true}
                            to={id}
                        >
                            {title}
                        </Link>
                    ))}
            </div>

        </nav >
    );
};