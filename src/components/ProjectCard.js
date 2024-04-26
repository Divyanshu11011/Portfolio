import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, liveUrl, repoUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">
              View Live
            </a>
          )}
           <br></br>
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary mt-2">
              View Code
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
