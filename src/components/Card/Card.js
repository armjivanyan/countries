import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import "./Card.css";

const Card = ({ name, flags }) => {
  return (
    <Col xs={6} sm={4} lg={3}>
      <Link to={name} className="countryLink">
        <div className="card">
          <img alt={`${name}'s flag`} src={flags.png} />
          <h3>{name}</h3>{" "}
        </div>
      </Link>
    </Col>
  );
};

export default Card;
