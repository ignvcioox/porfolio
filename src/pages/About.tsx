import { Card } from "../components/ui/Card";

import database from "../assets/img/database.png";
import frontend from "../assets/img/frontend.png";
import responsive from "../assets/img/responsive.png";

export const About = () => {

    return (
        <div className="bg-light-mode-bg dark:bg-dark-mode-bg p-10">

            <h2 className="mt-10 text-light-mode-text dark:text-dark-mode-text text-center leading-relaxed md:max-w-2xl lg:max-w-3xl mx-auto">
                💻 Analista programador especializado en desarrollo web, con una sólida capacidad de aprendizaje autodidacta y adaptación a nuevas tecnologías. 🚀 Busco oportunidades que me permitan crecer profesionalmente mientras contribuyo al logro de los objetivos del equipo. 🌟
            </h2>

            <h1 className="text-light-mode-text dark:text-dark-mode-text text-2xl font-black text-center mt-4 mb-6">
                Habilidades
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-2 max-w-screen-lg mx-auto">

                <Card
                    title="Desarrollador Frontend"
                    description="Creando interfaces interactivas y fáciles de usar, enfocadas en el rendimiento y la accesibilidad."
                    children={
                        <img src={frontend} alt="Frontend Icon" className="w-full h-full object-contain" />
                    }
                />
                <Card
                    title="Desarrollador Backend"
                    description="Construyendo soluciones del lado del servidor seguras y escalables, así como APIs y bases de datos."
                    children={
                        <img src={database} alt="Database Icon" className="w-full h-full object-contain" />
                    }
                />
                <Card
                    title="Diseño Responsivo"
                    description="Creando interfaces que se adaptan a cualquier dispositivo o tamaño de pantalla para una experiencia de usuario consistente."
                    children={
                        <img src={responsive} alt="Responsive Design Icon" className="w-full h-full object-contain" />
                    }
                />
            </div>
        </div >
    );
};
