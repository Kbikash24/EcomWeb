import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./About.css";

const About = () => {
  return (
    <>
      <Carousel className="carousel">
        <Carousel.Item interval={1000}>
          <img src="images\unsplash-e.jpg" alt="" />
          <div className="carousel-caption">
            <h1>About Us</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src="images\unsplash-c.jpg" alt="" />
          <div className="carousel-caption">
            <h1>About Us</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src="images\unsplash-d.jpg" alt="" />
          <div className="carousel-caption">
            <h1>About Us</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default About;
