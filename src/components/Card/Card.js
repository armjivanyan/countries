import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Card = ({ name, flags }) => {
  return (
    <Col xs={4}>
      <div className="card">
        <img src={flags.png} />
        <Link to={name}>
          <h3>{name}</h3>
        </Link>
      </div>
    </Col>
  );
};

export default Card;
