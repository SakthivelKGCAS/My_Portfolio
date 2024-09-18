import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './App.css'; // Import the CSS file for styling

function Home() {
  return (
    <div>
      <h1>Welcome to D. Sakthivel's Portfolio</h1>
      <p>
        <h2>D.Sakthivel M.Sc CS.,MBA.,M.Phil.,(Ph.D)</h2>
        <br />
        Full Stack Trainer and Computer Science Educator.
      </p>

      {/* Bootstrap Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/ds3.jpg"} // Place your image in the public folder
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3>Full Stack Development</h3>
            <p>Mastering Frontend and Backend Technologies.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/ds1.jpg"} // Place your image in the public folder
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3>Cyber Security Expert</h3>
            <p>Specialized in Malware Analysis and Pen Testing.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/images/ds2.jpg"} // Place your image in the public folder
            alt="Slide 3"
          />
          <Carousel.Caption>
            <h3>Innovative Mentor</h3>
            <p>Mentoring Future Tech Leaders.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
