import React from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import "./Loading.css";
const Loading = () => {
  return (
    <Row className="loading">
      <Col xs={12}>
        <h2>
          <Spinner className="spinner" animation="grow" />
          Loading...
        </h2>
      </Col>
    </Row>
  );
};

export default Loading;
