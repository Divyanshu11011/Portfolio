import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1.png";
import projImg2 from "../assets/img/2.png";
import projImg3 from "../assets/img/3.png";
import p4 from "../assets/img/4.png";
import p5 from "../assets/img/5.png";
import p6 from "../assets/img/6.png";
import p7 from "../assets/img/7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

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
      repoUrl: "https://github.com/Divyanshu11011/OpenAI-CLI-GO"
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

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore my key projects live and direct, or check out the GitHub repositories.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.slice(0, 3).map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {projects.slice(3, 6).map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {projects.slice(6).map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Decorative Background"></img>
    </section>
  );
};
