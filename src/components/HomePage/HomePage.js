import { useEffect, useState } from "react";
import Card from "../Card/Card.js";
import Loading from "../Loading/Loading.js";
import Search from "../Search/Search.js";
import { getCountries } from "../../helpers/getCountries.helpers.js";
import { Row } from "react-bootstrap";

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
    if (!countries.length) {
      setIsLoading(true);
      loadCountries();
    }
    return;
  }, []);

  const countryCards = countries.map(({ name, flags }, i) => {
    if (showCountriesMap[i]) {
      return <Card name={name} flags={flags} key={i} />;
    }
    return null;
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
