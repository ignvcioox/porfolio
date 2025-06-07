import { useState, useRef, useEffect } from "react";

export const useNavigation = (onClose?: () => void) => {

    const [openMenu, setOpenMenu] = useState(false);
    const [activeId, setActiveId] = useState<string>("home");

    const menuRef = useRef<HTMLElement | null>(null);

    const handleSetActive = (id: string) => {
        setActiveId(id);
    };

    const handleCloseMenu = () => {
        setOpenMenu(false);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                onClose!();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);


    return {

        // Properties
        activeId,
        menuRef,
        openMenu,

        // Methods
        handleCloseMenu,
        handleSetActive,
        setOpenMenu,
        
    };
};
