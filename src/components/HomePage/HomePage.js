import React from "react";
import { getCountries } from "../../helpers/getCountries.helpers.js";
import { useEffect, useState } from "react";
import Card from "../Card/Card.js";
import Loading from "../Loading/Loading.js";
import { Row } from "react-bootstrap";
import Search from "../Search/Search.js";
const HomePage = ({
  countries,
  setCountries,
  showCountriesMap,
  setShowCountriesMap,
  searchText,
  setSearchText,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  async function loadCountries() {
    const countriesList = await getCountries();
    const showMap = new Array(countriesList.length).fill(1);
    setShowCountriesMap(showMap);
    setCountries(countriesList);
    setIsLoading(false);
  }

  useEffect(() => {
    if (countries.length === 0) {
      setIsLoading(true);
      loadCountries();
    }

    return;
  }, []);

  const countryCards = countries.map(({ name, flags }, i) => {
    if (showCountriesMap[i]) return <Card name={name} flags={flags} key={i} />;
  });

  return (
    <Row>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        countries={countries}
        setShowCountriesMap={setShowCountriesMap}
      />
      {isLoading ? <Loading /> : countryCards}
    </Row>
  );
};

export default HomePage;
