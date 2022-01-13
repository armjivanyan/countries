import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getCountryByName } from "../../helpers/getCountryByName.helpers";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";

const Country = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [curCountry, setCurCountry] = useState(null);
  let { name } = useParams();
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
      <>
        <Col xs={12}>
          <Link to={"/"}>
            <h1>Back</h1>
          </Link>
        </Col>
        <Col xs={12}>
          <h1>{curCountry[0].name}</h1>
        </Col>
        <Col xs={10} offset={1}>
          <img src={curCountry[0].flags.png} />
        </Col>
      </>
    );
  };

  return <Row> {isLoading ? <Loading /> : country()}</Row>;
};

export default Country;
