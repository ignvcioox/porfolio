import { useAnimatedBackground } from "../../hooks/useAnimatedBackground";

export const Background = () => {

    const { starts, meteors } = useAnimatedBackground();

    return (

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="hidden dark:block w-full h-full">
                
                {starts.map((star) => (
                    <div key={star.id} className="star animate-animate-pulse-subtle"
                        style={{
                            animationDuration: star.animationDuration + "s",
                            height: star.size + "px",
                            left: star.x + "%",
                            opacity: star.opacity,
                            top: star.y + "%",
                            width: star.size + "px",
                        }} />
                ))}

                {meteors.map((meteor) => (
                    <div key={meteor.id} className="meteor animate-animate-meteor"
                        style={{
                            animationDelay: `${meteor.delay}s`,
                            animationDuration: meteor.animationDuration + "s",
                            height: meteor.size + "px",
                            left: meteor.x + "%",
                            top: meteor.y + "%",
                            width: meteor.size + "px",
                        }} />
                ))}

            </div>
        </div>
    );
};