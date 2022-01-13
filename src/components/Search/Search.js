import React from "react";
import { useEffect, useRef } from "react";
import { InputGroup, FormControl, Row } from "react-bootstrap";
import "./Search.css";

const Search = ({
  searchText,
  setSearchText,
  countries,
  setShowCountriesMap,
}) => {
  const inputElement = useRef(null);

  const handleInput = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);

    const newMap = countries.map(({ name }) => {
      if (name.toLowerCase().includes(newSearchText.toLowerCase())) return 1;
      return 0;
    });
    setShowCountriesMap(newMap);
  };

  useEffect(() => {
    inputElement["current"].value = searchText;
    return;
  }, []);

  return (
    <Row className="search">
      <div className="col-12">
        <InputGroup size="lg">
          <InputGroup.Text id="inputGroup-sizing-lg">Search</InputGroup.Text>
          <FormControl
            ref={inputElement}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            onChange={(e) => handleInput(e)}
          />
        </InputGroup>
      </div>
    </Row>
  );
};

export default Search;
