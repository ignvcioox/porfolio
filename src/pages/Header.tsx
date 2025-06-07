import { Link } from "react-scroll";

import { Icon } from "../components/ui/Icon";
import { Navigation } from "../components/Navigation";

import { useNavigation } from "../hooks/useNavigation";
import { useThemeMode } from "../hooks/useThemeMode";

import Bars from "../assets/icons/Bars";
import GitHub from "../assets/icons/GitHub";
import LinkedIn from "../assets/icons/LinkedIn";
import Moon from "../assets/icons/Moon";
import portfolioDarkMode from "../assets/img/portfolio-darkmode.webp";
import portfolioLightMode from "../assets/img/portfolio-lightmode.png";
import Sun from "../assets/icons/Sun";

export const Header = () => {

    const { openMenu, handleCloseMenu, setOpenMenu } = useNavigation();

    const { theme, handleChangeTheme } = useThemeMode();

    return (

        <header className="flex items-center justify-between px-2 m d:px-4 w-full fixed z-20 bg-light-mode-bg dark:bg-dark-mode-bg border-b border-zinc-100 dark:border-zinc-800">

            <Link to="home" className="flex items-center justify-center cursor-pointer size-16 mr-20" href="/">
                <img
                    src={theme === "dark" ? portfolioDarkMode : portfolioLightMode}
                    alt="Personal portfolio logo" />
            </Link>

            <Navigation isOpen={openMenu} onClose={handleCloseMenu} />

            <div className="flex items-center gap-2 lg:hidden">

                <Icon
                    ariaLabel="Toggle dark - light mode"
                    children={theme === "light" ? <Sun /> : <Moon />}
                    disableStyleHover
                    onClick={handleChangeTheme} />

                <Icon
                    ariaLabel="Open menu"
                    children={<Bars className="size-5" />}
                    disableStyleHover
                    onClick={() => setOpenMenu(!openMenu)} />

            </div>

            <div className="flex gap-1 max-md:hidden md:hidden lg:flex">

                <Icon
                    ariaLabel="Toggle dark - light mode"
                    children={theme === "light" ? <Sun /> : <Moon />}
                    onClick={handleChangeTheme} />

                <Icon
                    ariaLabel="Visit my LinkedIn profile"
                    children={<LinkedIn />}
                    href="https://www.linkedin.com/in/ignvcioox/" />

                <Icon
                    ariaLabel="Visit my GitHub profile"
                    children={<GitHub />}
                    href="https://github.com/ignvcioox" />

            </div>
        </header >
    );
};
