import React from "react";

import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
    return (
        <div className="main-div">
            <Navbar />
            <AboutMe />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;