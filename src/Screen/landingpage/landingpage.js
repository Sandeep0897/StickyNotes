import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./Homepage.css";
import {Link} from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <Container>
        <Row>
          <div className="intro-text">
            <h1 className="title">Sticky Notes Web App</h1>
            <p className="subtitle">Add your day to day notes </p>

            <div className="buttonContainer">
              <Link to="/login">
              <Button size="lg" className="landingbutton" variant="info">
                LOGIN
              </Button>
              </Link>
              <Link to="/register">
              <Button
                variant="outline-dark"
                size="lg"
                className="landingbutton"
              >
                SIGNUP
              </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
