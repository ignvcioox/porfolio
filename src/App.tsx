import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer";
import { useScrollToTop } from "./hooks/useScrollToTop";

import { About } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Header } from "./pages/Header";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Projects } from "./pages/Projects";

import { ArrowUpIcon } from "@heroicons/react/16/solid";
import { Contact } from "./pages/Contact";



export const App = () => {

    const { showButtonProgress, handleClick, scrollToTopRef, scrollProgressPercent } = useScrollToTop();

    return (

        <BrowserRouter>
            <Header />
            {
                showButtonProgress && (
                    <div
                        className="fixed bottom-6 right-6 rounded-full size-12 flex items-center justify-center cursor-pointer z-10 bg-red-900"
                        onClick={handleClick}
                        ref={scrollToTopRef}
                        style={{
                            background: `conic-gradient(#6366f1  ${scrollProgressPercent}%, #f3f3f3 ${scrollProgressPercent}%)`
                        }}
                    >
                        <span className="scroll-progress-inner bg-light-mode-bg rounded-full flex justify-center items-center ">
                            <ArrowUpIcon className="size-4 text-indigo-500" />
                        </span>
                    </div>
                )}
            <Routes>
                <Route path="/" element={
                    <>
                        <Home id="home" />
                        <main>
                            <About />
                            <Experience id="experience" />
                            <Projects id="projects" />
                            <Contact />
                        </main>
                    </>
                } />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};