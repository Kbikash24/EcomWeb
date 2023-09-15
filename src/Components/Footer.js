import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook, BsYoutube, BsSpotify } from "react-icons/bs";

const Footer = (props) => {
  return (
    <>
      <div style={{ marginLeft: "42%",  }}>
        
      </div>
      <footer className="bg-dark text-light py-1">
        <Container>
          <Row  style={{paddingTop:'20px'}}>
            <Col md={6}>
              {/* Your footer content on the left */}
              <p>&copy; 2023 The-Generics</p>
            </Col>

            <Col className="icons">
              <div className="text-right">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook className="mx-4 icon-large fb" />
                </a>
                <a
                  href="https://youtube.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsYoutube className="mx-4 icon-large youtube" />
                </a>
                <a
                  href="https://www.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsSpotify className="mx-4 icon-large spoti" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
