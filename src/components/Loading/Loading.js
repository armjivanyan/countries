import { Col, Row, Spinner } from "react-bootstrap";
import "./Loading.css";

const Loading = () => {
  return (
    <Row className="loading">
      <Col xs={12}>
        <h1>
          <Spinner animation="grow" />
          Loading . . .
        </h1>
      </Col>
    </Row>
  );
};

export default Loading;
