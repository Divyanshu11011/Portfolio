import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p>Explore more About Me ↗️ Connect</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/divyanshu-kumar-400543202/"><img src={navIcon1} alt="Icon" /></a>
             
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
