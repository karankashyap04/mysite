
import "./styles/AboutMe.css";
import karankashyapImage from "../assets/karankashyap.png";
import karankashyapResume from "../assets/karan-kashyap-resume.pdf";
import DownloadIcon from '@mui/icons-material/Download';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function AboutMe() {
    return (
        <section id="aboutme">
            <div className="row aboutme-row">
                <div className="col-lg-7 col-md-7 aboutme-left">
                    <h1 className="name-header">KARAN KASHYAP</h1>
                    <p className="tagline">Web Developer | Machine Learning Engineer | Philosopher</p>
                    <div className="partial-span"><hr /></div>
                    <div className="description">
                        Hi there! <br />
                        I solve the most interesting problems, all with the use of code! <br />
                        I'm a sophomore at Brown University, where I study Computer Science and
                        Behavioral Decision Sciences. My talent, passion, and calling find
                        themselves in Software Engineering and Artificial Intelligence, and also
                        the ethics surrounding both of them.
                    </div>
                    <a href={karankashyapResume} target="_blank" download="karan-kashyap-resume" rel="noreferrer">
                        <button className="btn btn-outline-primary resume-download-button">My Resume <DownloadIcon /></button>
                    </a>
                    <a href="mailto:karan_kashyap@brown.edu">
                        <button className="btn btn-primary contact-me-button"><MailIcon /> Contact Me</button>
                    </a>
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/karan-kashyap04" target="_blank" rel="noreferrer noopener"><LinkedInIcon fontSize="large" className="social-icon" /></a>
                        <a href="https://github.com/karankashyap04" target="_blank" rel="noreferrer noopener"><GitHubIcon fontSize="large" className="social-icon" /></a>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 aboutme-right">
                    <img src={karankashyapImage} alt="karan kashyap"></img>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;