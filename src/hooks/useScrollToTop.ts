import { useEffect, useRef, useState } from "react";

export const useScrollToTop = () => {

    const [scrollProgressPercent, setScrollProgressPercent] = useState(0);
    const [showButtonProgress, setShowButtonProgress] = useState(false);
    const scrollToTopRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const handleScrollToTop = () => {

            const position = document.documentElement.scrollTop;
            const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const value = Math.round((position * 100) / calcHeight);
            setScrollProgressPercent(value);
            setShowButtonProgress(position > 50);
        };

        window.addEventListener("scroll", handleScrollToTop);
        return () => window.removeEventListener("scroll", handleScrollToTop);

    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return {

        // Properties
        scrollProgressPercent,
        showButtonProgress,
        scrollToTopRef,

        // Methods
        handleClick,
    };
};
