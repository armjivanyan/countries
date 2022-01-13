import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Country from "./components/Country/Country";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  const [countries, setCountries] = useState([]);
  const [showCountriesMap, setShowCountriesMap] = useState([]);

  return (
    <Container fluid>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              countries={countries}
              setCountries={setCountries}
              showCountriesMap={showCountriesMap}
              setShowCountriesMap={setShowCountriesMap}
              searchText={searchText}
              setSearchText={setSearchText}
            />
          }
        />
        <Route path="/:name" element={<Country />} />
      </Routes>
    </Container>
  );
}

export default App;
