import React from "react";

import "./styles/ProjectCard.css";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ProjectCard(props) {
    return (
        <Card className="project-card">
            <div className="card-ribbon">
                <br />
            </div>
            <CardMedia
                component="img"
                image={props.image}
                alt="Project image"
                className="project-img"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="project-title">
                    {props.projectTitle}
                </Typography>
                <Typography variant="body1" color="text.primary" className="project-description">
                    {props.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ProjectCard;
