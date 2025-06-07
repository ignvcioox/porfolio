import { useEffect, useState } from "react";

import { MeteorProps, StarProps } from "../interfaces/interface";

export const useAnimatedBackground = () => {

    const [starts, setStarts] = useState<StarProps[]>([]);
    const [meteors, setMeteors] = useState<MeteorProps[]>([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
    }, []);

    const generateStars = () => {

        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight) / 9000;
        const newStars = []

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 1 + 2,
            })
        };

        setStarts(newStars);
    };

    const generateMeteors = () => {

        const numberOfMeteors = 4;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 30,
                animationDuration: Math.random() * 4 + 4,
            })
        };

        setMeteors(newMeteors)
    };

    return {
        
        // Properties
        starts,
        meteors,
        
    };
};
