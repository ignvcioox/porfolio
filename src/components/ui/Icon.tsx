import { IconProps } from "../../interfaces/interface";

export const Icon = ({ href, ariaLabel, children, className, onClick, disableStyleHover = false }: IconProps) => {
    
    if (href) {
        return (
            <a
                href={href}
                className={
                    "flex items-center justify-center size-10 rounded-lg cursor-pointer text-zinc-800 dark:text-zinc-100/90" +
                    (disableStyleHover ? "" : " hover:bg-zinc-100 dark:hover:bg-zinc-800") +
                    (className ? ` ${className}` : "")
                }
                aria-label={ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>

        );
    }

    return (
        <button
            type="button"
            className={
                "flex items-center justify-center size-10 rounded-lg cursor-pointer text-zinc-800 dark:text-zinc-100/90" +
                (disableStyleHover ? "" : " hover:bg-zinc-100 dark:hover:bg-zinc-800") +
                (className ? ` ${className}` : "")
            }
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {children}
        </button>
    );
};