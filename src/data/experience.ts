import hdo from "../assets/img/hdo.webp";
import { ExperienceProps } from "../interfaces/interface";

export const experiences: ExperienceProps[] = [
    {
        title: "Desarrollador de Aplicaciones Móviles",
        company: "Hospital Provincial de Ovalle",
        icon: hdo,
        iconBg: "#2C2C2C",
        date: "Abril 2024 - Junio 2024",
        description: [
            "Desarrollo de una aplicación móvil utilizando Expo, TypeScript, MySQL, Node.js y Express.",
            "Control de versiones con Git y GitHub, facilitando la colaboración en equipo.",
            "Documentación y publicación de la aplicación móvil en Play Store, incluyendo la creación de políticas de privacidad y otros requisitos necesarios para la publicación.",
            "Diseño de diversos mockups para las secciones de la aplicación utilizando Figma, además de la creación de mapas del hospital para su integración en la app.",
            "Desarrollo de APIs REST con Node.js para la gestión de datos de reserva de medicamentos."
        ]
    },
    
];