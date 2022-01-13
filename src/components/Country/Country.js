import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { getCountryByName } from "../../helpers/getCountryByName.helpers";
import { Button, Col, Row } from "react-bootstrap";
import "./Country.css";

const Country = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [curCountry, setCurCountry] = useState(null);
  const { name } = useParams();

  async function loadCountry() {
    const tmpCountry = await getCountryByName(name);
    setCurCountry(tmpCountry);
    setIsLoading(false);
  }

  useEffect(() => {
    loadCountry();
    return;
  }, []);

  const country = () => {
    return (
      <Row className="country">
        <Col xs={12} className="backCol">
          <Link to={"/"}>
            <Button variant="primary">
              <h3>Back</h3>
            </Button>
          </Link>
        </Col>
        <Col xs={12} className="imgCol">
          <h1>{curCountry[0].name}</h1>
          <img alt={`${name}'s flag`} src={curCountry[0].flags.png} />
        </Col>
      </Row>
    );
  };

  return <Row> {isLoading ? <Loading /> : country()}</Row>;
};

export default Country;
