import { CardProps } from "../../interfaces/interface"

export const Card = ({ children, title, description }: CardProps) => {

    return (
        <div className="flex flex-col items-center bg-light-mode-bg dark:bg-dark-mode-secondary-bg rounded-xl transform transition-transform duration-300 hover:scale-105 shadow-md p-6">
            <div className="size-16">
                {children}
            </div>
            <h2 className="text-light-mode-text dark:text-dark-mode-text font-semibold mt-2 text-center">
                {title}
            </h2>
            <hr className="my-2 w-full border-t-2 border-indigo-200 opacity-50 mx-auto" />
            <p className="text-light-mode-text dark:text-dark-mode-text text-sm text-center md:text-xs lg:text-sm">
                {description}
            </p>
        </div>

    );
};
