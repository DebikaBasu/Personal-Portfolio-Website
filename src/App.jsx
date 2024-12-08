import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"

const App = () => {
    return (
        <div className="overflow-x-hidden text-stone-300 antialised">
            <div className="fixed inset-0 -z-10 overflow-x-hidden">

                <div class="relative h-full w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
                </div>
            </div>
        
            <div className="container mx-auto px-8">
                <Navbar />
                <Hero />
                <Technologies />
                <Projects />
                <Experience />
                <Contact />
            </div>
        </div>
    )
}

export default App