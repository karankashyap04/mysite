import React from "react";

import "./styles/Experience.css";
import ExperienceCard from "./ExperienceCard";

import tdlLogo from "../assets/tdl-logo.jpeg";
import sitareLogo from "../assets/sitare-logo.png";
import wolframLogo from "../assets/wolfram-logo.png";
import spcsLogo from "../assets/spcs-logo.jpeg";
import { tdlInternshipDescription, tdlTechnologies, sitareInternshipDescription, sitareTechnologies, wolframDescription, wolframTechnologies, spcsDescription, spcsTechnologies } from "./ExperienceDescriptions";

function Experience() {
    return (
        <section id="experience">
            <h1 className="section-title">Experience</h1>
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <ExperienceCard
                        image={tdlLogo}
                        experienceTitle="Machine Learning Intern"
                        date="June 2022 – August 2022"
                        description={tdlInternshipDescription}
                        technologies={tdlTechnologies}
                    />
                </div>
                <div className="col-lg-6 col-md-6">
                    <ExperienceCard
                        image={sitareLogo}
                        experienceTitle="Software Engineering Intern"
                        date="June 2020 – August 2020"
                        description={sitareInternshipDescription}
                        technologies={sitareTechnologies}
                    />
                </div>
                <div className="col-lg-6 col-md-6">
                    <ExperienceCard
                        image={wolframLogo}
                        experienceTitle="Student Researcher"
                        date="July 2020 – July 2020"
                        description={wolframDescription}
                        technologies={wolframTechnologies}
                    />
                </div>
                <div className="col-lg-6 col-md-6">
                    <ExperienceCard
                        image={spcsLogo}
                        experienceTitle="Student"
                        date="June 2019 – July 2019"
                        description={spcsDescription}
                        technologies={spcsTechnologies}
                    />
                </div>
            </div>
        </section>
    );
}

export default Experience;
