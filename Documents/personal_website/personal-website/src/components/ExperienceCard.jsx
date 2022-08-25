import React from "react";

import "./styles/ExperienceCard.css";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

function ExperienceCard(props) {
    return (
        <Card className="experience-card">
            <div className="card-ribbon">
                <br />
            </div>
            <CardMedia
                component="img"
                image={props.image}
                alt="Experience Logo"
                className="experience-img"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="experience-title">
                    {props.experienceTitle}
                </Typography>
                <Typography gutterBottom variant="p" component="div" className="experience-date">
                    {props.date}
                </Typography>
                <Typography variant="body1" color="text.primary" className="experience-description">
                    {props.description}
                </Typography>
            </CardContent>
            <Stack direction='row' spacing={1} alignItems="center" justifyContent="center" className="technology-stack">
                {props.technologies.map(technology => <Chip label={technology} size="small" className="technology-chip" />)}
            </Stack>
        </Card>
    );
}

export default ExperienceCard;
