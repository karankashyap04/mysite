import React from "react";

import "./styles/BrownEducationCard.css";
import brownULogo from "../assets/brownU-logo.svg";
import fsabLogo from "../assets/fsab-logo.jpeg";
import browndatascienceLogo from "../assets/browndatascience-logo.png";
import ccgLogo from "../assets/ccg-logo.png";
import bhigLogo from "../assets/bhig-logo.png";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";


function CourseItem(props) {
    return (
        <Chip label={props.label} variant="outlined" size="small" className="card-chip" />
    );
}


function BrownEducationCard() {
    return (
        <Card className="education-card">
            <CardMedia
                component="img"
                image={brownULogo}
                alt="Brown University Logo"
                className="card-img"
            />
            <CardContent className="card-content">
                <div className="card-content-div">
                    <Typography gutterBottom variant="h5" component="div">
                        Sc.B. Computer Science  |  A.B. Behavioral Decision Sciences
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        2021 - 2025
                    </Typography>
                    <Card variant="outlined" className="info-row-card">
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Computer Science Courses
                            </Typography>
                            <Typography variant="body2" color="text.primary" className="card-info-row-text">
                                <Stack direction={{sm: 'column', md: 'row', lg: 'row'}} spacing={1} alignItems="center" justifyContent="center">
                                    <CourseItem label="CS170: Intro CS" />
                                    <CourseItem label="CS200: Data Structures & Algorithms" />
                                    <CourseItem label="CS220: Discrete Structures" />
                                </Stack>
                                <Stack direction={{sm: 'column', md: 'row', lg: 'row'}} spacing={1} alignItems="center" justifyContent="center">
                                    <CourseItem label="MATH100: Calculus II" />
                                    <CourseItem label="MATH520: Linear Algebra" />
                                    <CourseItem label="APMA1650: Statistical Inference" />
                                </Stack>
                            </Typography>

                            <br />

                            <Typography gutterBottom variant="h6" component="div">
                                Behavioral Decision Sciences Courses
                            </Typography>
                            <Typography variant="body2" color="text.primary" className="card-info-row-text">
                                <Stack direction={{sm: 'column', md: 'row', lg: 'row'}} spacing={1} alignItems="center" justifyContent="center">
                                    <CourseItem label="CLPS220: Making Decisions" />
                                    <CourseItem label="ECON110: Principles of Economics" />
                                </Stack>
                                <Stack direction={{sm: 'column', md: 'row', lg: 'row'}} spacing={1} alignItems="center" justifyContent="center">
                                    <CourseItem label="POBS910: On the Dawn of Modernity" />
                                </Stack>
                            </Typography>

                            <br />

                            <Typography gutterBottom variant="h6" component="div">
                                Ongoing Courses
                            </Typography>
                            <Typography variant="body2" color="text.primary" className="card-info-row-text">
                                <Stack direction={{sm: 'column', md: 'row', lg: 'row'}} spacing={1} alignItems="center" justifyContent="center">
                                    <CourseItem label="CS320: Software Engineering" />
                                    <CourseItem label="CS1470: Deep Learning" />
                                </Stack>
                                <Stack direction={{sm: 'column', md: 'row', lg: 'row'}} spacing={1} alignItems="center" justifyContent="center">
                                    <CourseItem label="ECON1110: Microeconomics" />
                                    <CourseItem label="CLPS200: Human Cognition" />
                                </Stack>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Typography gutterBottom variant="h6" component="div">
                        Clubs
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        <div className="row club-row">
                            <div className="col-lg-3 col-md-6 club-col">
                                <img src={fsabLogo} alt="FullStack@Brown Logo" className="fsab-logo" />
                                <br />
                                <strong>FullStack@Brown</strong>
                                <br />
                                Full Stack Software Engineer
                            </div>
                            <div className="col-lg-3 col-md-6 club-col">
                                <img src={browndatascienceLogo} alt="Brown Data Science Logo" className="bds-logo" />
                                <br />
                                <strong>Brown Data Science</strong>
                                <br />
                                Executive Board Member (Projects Team)
                            </div>
                            <div className="col-lg-3 col-md-6 club-col">
                                <img src={ccgLogo} alt="CCG Logo" className="ccg-logo" />
                                <br />
                                <strong>Collegiate Consulting Group</strong>
                                <br />
                                Project Leader
                            </div>
                            <div className="col-lg-3 col-md-6 club-col">
                                <img src={bhigLogo} alt="BHIG Logo" className="bhig-logo" />
                                <br />
                                <strong>Brown Healthcare Investment Group</strong>
                                <br />
                                Investment Analyst
                            </div>
                        </div>
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}

export default BrownEducationCard;