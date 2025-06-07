import hospital from "../assets/img/hospital.webp";
import crud from "../assets/img/crud.png";


import Expo from "../assets/svg/Expo";
import Express from "../assets/svg/Express";
import MySQL from "../assets/svg/MySQL";
import NodeJS from "../assets/svg/NodeJS";
import TypeScript from "../assets/svg/TypeScript";

export const projects = [
    {
        id: 1,
        description: "Aplicación móvil desarrollada con Expo para ayudar a los pacientes adultos mayores a orientarse en el Hospital. Incluye visualización de mapas, información relevante, números de contacto, escaneo de códigos QR y reserva de medicamentos.",
        technologies: [
            { id: 1, name: "Expo", icon: Expo, background: "#262D3A" },
            { id: 2, name: "TypeScript", icon: TypeScript, background: "#3178c6" },
            { id: 3, name: "NodeJS", icon: NodeJS, background: "#3C873A" },
            { id: 4, name: "Express", icon: Express, background: "#222" },
            { id: 5, name: "MySQL", icon: MySQL, background: "#00758F" },
        ],
        functions: [
            { id: 1, description: "Consulta y realiza reservas de medicamentos directamente desde la app" },
            { id: 2, description: "Escanea los códigos QR en las entradas del establecimiento para acceder a mapas detallados de cada área." },
            { id: 3, description: "Explora mapas específicos de sectores y unidades según tus necesidades." },
            { id: 4, description: "Recibe instrucciones mediante audio para llegar al servicio o unidad que buscas" },
        ],
        backgroundImage: hospital,
        website: "https://play.google.com/store/apps/details?id=com.hovdeveloper.hov"
    },
    {
        id: 2,
        description: "",
        technologies: [
            { id: 1, name: "Expo", icon: Expo, background: "#262D3A" },
            { id: 2, name: "TypeScript", icon: TypeScript, background: "#3178c6" },
            { id: 3, name: "NodeJS", icon: NodeJS, background: "#3C873A" },
            { id: 4, name: "Express", icon: Express, background: "#222" },
            { id: 5, name: "MySQL", icon: MySQL, background: "#00758F" },
        ],
        functions: [
            { id: 1, description: "Consulta y realiza reservas de medicamentos directamente desde la app" },
            { id: 2, description: "Escanea los códigos QR en las entradas del establecimiento para acceder a mapas detallados de cada área." },
            { id: 3, description: "Explora mapas específicos de sectores y unidades según tus necesidades." },
            { id: 4, description: "Recibe instrucciones mediante audio para llegar al servicio o unidad que buscas" },
        ],
        backgroundImage: crud,
        website: "https://play.google.com/store/apps/details?id=com.hovdeveloper.hov",
    }
]