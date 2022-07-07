import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../App.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">made with ❤ by Sandy</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;