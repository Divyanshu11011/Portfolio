import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './a.css';
import im1 from "../assets/img/1.JPG";
import im2 from "../assets/img/2.JPG";
import im3 from "../assets/img/3.JPG";
import im4 from "../assets/img/4.JPG";
import im5 from "../assets/img/5.jpeg";
import im6 from "../assets/img/6.jpeg";
import im7 from "../assets/img/7.jpeg"


const images = [im1, im2, im3,im4,im5,im6,im7]; // Array of images

const Achievements = ({ achievements }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  console.log(images); // Debugging to check image array

  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="achievements-bx wow zoomIn">
              <h2>🏆Achievements🏆</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme achievements-slider" autoPlay={true} autoPlaySpeed={3000}>
                {achievements.map((achievement, index) => (
                  <div key={index} className="item d-flex align-items-center justify-content-center">
                    <img src={images[index % images.length]} alt="Achievement" className="achievement-image" />
                    <p className="achievement-text">{achievement}</p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;