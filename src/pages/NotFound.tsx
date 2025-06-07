import { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

export const NotFound = () => {

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setRedirect(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (redirect) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-light-mode-text dark:text-dark-mode-text text-4xl font-black">404</h1>
            <p className="text-light-mode-text dark:text-dark-mode-text font-medium text-2xl">Página no encontrada</p>
            <p className="text-light-mode-text dark:text-dark-mode-text font-medium">Redirigiendo al inicio</p>
            <span className="size-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mt-4" />
        </div>
    );
}
