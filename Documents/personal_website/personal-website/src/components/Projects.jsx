import React from "react";

import ProjectCard from "./ProjectCard";

import "./styles/Projects.css";
import mediumImg from "../assets/medium.png";
import pneumoMLImg from "../assets/pneumo-ml.png";
import researchpaperImg from "../assets/adversarialexamples.png";
import againstAmbiguityImg from "../assets/against-ambiguity.png";
import courseProjectsImg from "../assets/course-projects.png";
import { pneumoMLDescription, mediumDescription, researchpaperDescription, againstAmbiguityDescription, courseProjectsDescription } from "./ProjectDescriptions";

function Projects() {
    return (
        <section id="projects">
            <h1 className="section-title">Projects</h1>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <ProjectCard
                        image={pneumoMLImg}
                        projectTitle="PneumoML"
                        description={pneumoMLDescription}
                    />
                </div>
                <div className="col-lg-6 col-md-6">
                    <ProjectCard
                        image={mediumImg}
                        projectTitle="Medium Articles"
                        description={mediumDescription}
                    />
                </div>
                <div className="col-lg-6 col-md-6">
                    <ProjectCard
                        image={researchpaperImg}
                        projectTitle="Research Paper"
                        description={researchpaperDescription}
                    />
                </div>
                <div className="col-lg-6 col-md-6">
                    <ProjectCard
                        image={againstAmbiguityImg}
                        projectTitle="Against Ambiguity"
                        description={againstAmbiguityDescription}
                    />
                </div>
                <div className="col-lg-8 col-md-8 course-projects">
                    <ProjectCard 
                        image={courseProjectsImg}
                        projectTitle="Course Projects"
                        description={courseProjectsDescription}
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;
