import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import p4 from "../assets/img/4.png";
import p5 from "../assets/img/5.png";
import p6 from "../assets/img/6.png";
import p7 from "../assets/img/7.png";
 // Assuming you have an image for the Blockchain project
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './project.css';

export const Projects = () => {
  const projects = [
    {
      title: "Virtual 3D Chatbot",
      description: "A real-time interactive 3D chatbot using OpenAI's GPT models.",
      imgUrl: projImg1,
      liveUrl: "https://virtual-avatar-bot.vercel.app/",
      repoUrl: "https://github.com/Divyanshu11011/virtual-avatar-bot"
    },
    {
      title: "Blog Dashboard",
      description: "A polished UI for managing blogs with CRUD operations on JSONPlaceholder API.",
      imgUrl: projImg2,
      liveUrl: "https://blog-dashboard-seven.vercel.app/",
      repoUrl: "https://github.com/Divyanshu11011/Blog-Dashboard/"
    },
    {
      title: "SCOREMINT (Mentor-Mentee Dashboard)",
      description: "Dashboard for mentor-mentee interaction and assignment management with integrated AI tools.",
      imgUrl: projImg3,
      liveUrl: "https://scoremint-1.onrender.com/",
      repoUrl: "https://github.com/Divyanshu11011/Scoremint/"
    },
    {
      title: "OpenAI - CLI Tool via Go",
      description: "A command-line interface (CLI) application in Go that interacts with the OpenAI API to generate responses.",
      imgUrl: p4,
      repoUrl: "https://github.com/Divyanshu11011/OpenAI-CLI-GO",  // Update with correct repo URL if available
    },
    {
      title: "Code Pen Clone",
      description: "A web application that allows users to edit, update, and preview HTML/CSS and JS code in the browser.",
      imgUrl: p5,
      repoUrl: "https://github.com/Divyanshu11011/CodePen-clone"
    },
    {
      title: "AI-AVATAR-INTERVIEWER",
      description: "AI-driven interviewing platform with real-time feedback.",
      imgUrl: p6,
     
      repoUrl: "https://github.com/Divyanshu11011/Profilify-latest"
    },
    {
      title: "Blockchain Based Certificate System",
      description: "A system that allows bulk uploading of resumes and creation/verification of certificates on Blockchain.",
      imgUrl: p7,
      repoUrl: "https://github.com/Divyanshu11011/SIH"
    }
  ];

  const totalProjects = projects.length;
  const lastRowItemCount = totalProjects % 3; // Assuming 3 items per row normally

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ color: "#FFF", textAlign: "center" }}>Key Projects</h2>
                  <p>Explore my projects, live and direct or check out my GitHub repositories.</p>
                  <Row>
                    {projects.map((project, index) => {
                      const isLastItem = index === totalProjects - 1; // Check if last project
                      let colSize = "4"; // Default to 4 columns per item
                      let offset = "";
                      if (isLastItem && lastRowItemCount === 1) {
                        // If last item is alone in the last row, center it
                        offset = "offset-md-4";
                      }
                      return (
                        <Col md={colSize} key={index} className={`${offset} mb-4`}>
                          <div className="project-card">
                            <img src={project.imgUrl} alt="Project" className="project-image" />
                            <h5 style={{ color: "#000" }}>{project.title}</h5>
                            <div className="project-description">
                              <p>{project.description}</p>
                            </div>
                            <div className="project-links">
                              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Live Demo <span role="img" aria-label="live-demo-emoji">🚀</span>
                              </a>}
                              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                View Code <span role="img" aria-label="view-code-emoji">👀</span>
                              </a>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Decorative Background"></img>
    </section>
  );
}