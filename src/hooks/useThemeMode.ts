import { useEffect, useState } from "react";

export const useThemeMode = () => {

    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        return "light";
    });

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html")?.classList.add("dark");
        } else {
            document.querySelector("html")?.classList.remove("dark");
        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
    };

    return {

        // Properties
        theme,

        // Method
        handleChangeTheme
        
    };
};
