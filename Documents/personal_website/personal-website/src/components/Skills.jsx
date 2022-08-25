import React from "react";
import StarIcon from '@mui/icons-material/Star';

import "./styles/Skills.css";

function Star() {
    return <StarIcon fontSize="small" className="star" />;
}

function Skills() {
    return (
        <section id="skills">
            <h1 className="section-title">Skills</h1>
            <div className="row">
                <div className="col-lg-6 col-md-6 skill-col">
                    <h2 className="skill-title">Languages</h2>
                    <p className="skill-entry">Python <Star /><Star /><Star /><Star /><Star /></p>
                    <p className="skill-entry">Java <Star /><Star /><Star /><Star /><Star /></p>
                    <p className="skill-entry">SQL <Star /><Star /><Star /></p>
                </div>
                <div className="col-lg-6 col-md-6 skill-col">
                    <h2 className="skill-title">Frontend</h2>
                    <p className="skill-entry">HTML <Star /><Star /><Star /><Star /><Star /></p>
                    <p className="skill-entry">CSS <Star /><Star /><Star /><Star /><Star /></p>
                    <p className="skill-entry">JavaScript <Star /><Star /><Star /><Star /></p>
                    <p className="skill-entry">ReactJS <Star /><Star /><Star /><Star /></p>
                </div>
                <div className="col-lg-6 col-md-6 skill-col">
                    <h2 className="skill-title">Backend</h2>
                    <p className="skill-entry">NodeJS <Star /><Star /><Star /><Star /></p>
                    <p className="skill-entry">Express <Star /><Star /><Star /><Star /></p>
                    <p className="skill-entry">Flask <Star /><Star /><Star /><Star /></p>
                    <p className="skill-entry">Django <Star /><Star /><Star /></p>
                    <p className="skill-entry">MongoDB <Star /><Star /><Star /></p>
                </div>
                <div className="col-lg-6 col-md-6 skill-col">
                    <h2 className="skill-title">ML/AI</h2>
                    <p className="skill-entry">SciKit-Learn <Star /><Star /><Star /><Star /><Star /></p>
                    <p className="skill-entry">Keras <Star /><Star /><Star /><Star /></p>
                    <p className="skill-entry">TensorFlow <Star /><Star /><Star /></p>
                    <p className="skill-entry">SpaCy <Star /><Star /><Star /><Star /><Star /></p>
                    <p className="skill-entry">Nltk <Star /><Star /><Star /><Star /></p>
                    <p className="skill-entry">Pandas <Star /><Star /><Star /><Star /><Star /></p>
                </div>
            </div>
        </section>
    );
}

export default Skills;