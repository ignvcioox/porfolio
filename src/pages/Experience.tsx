import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import { experiences } from "../data/experience";

export const Experience = ({ id }: { id: string }) => {
    return (
        <section className="bg-light-mode-secondary-bg dark:bg-dark-mode-secondary-bg text-center p-6" id={id}>
            <h2 className="text-light-mode-text dark:text-dark-mode-text text-3xl font-black">
                Experiencia Laboral
            </h2>

            <h3 className="text-light-mode-text dark:text-dark-mode-text mt-4 font-medium mb-10">
                Estas son las experiencias que han marcado mi trayectoria profesional.
            </h3>

            <VerticalTimeline>
                {experiences.map((experience, index) => (
                    <VerticalTimelineElement
                        key={`experience-${index}`}
                        contentStyle={{ background: "#745eff", color: "#f4f4f5", borderRadius: "5px" }}
                        contentArrowStyle={{ borderRight: "7px solid  #c4bdff" }}
                        date={experience.date}
                        dateClassName="text-left text-white lg:text-light-mode-text dark:text-dark-mode-text"
                        iconStyle={{ background: experience.iconBg }}
                        icon={
                            <div className="flex justify-center w-full h-full items-center">
                                <img src={experience.icon} alt="company" className="w-[50%] h-[50%]" />
                            </div>
                        }
                    >
                        <h3 className="text-white dark:text-dark-mode-text font-bold">{experience.title}</h3>
                        <ul className="list-disc mt-6 ml-4 space-y-1 text-left">
                            {experience.description.map((item) => (
                                <li key={item} className="text-white-100 text-[14px] pl-1 tracking-wider">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>

        </section>
    );
};