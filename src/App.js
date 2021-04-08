// import libraries:
import React, { useEffect, useState } from "react";
// import components:
import SearchBar from "./components/searchBar/SearchBar";
import TableWrapper from "./components/mainTable/TableWrapper";
import useFetch from "./hooks/useFetch";
// import styles:
import "./styles/App.scss";

function App() {
  const [countries, error] = useFetch("https://restcountries.eu/rest/v2/all");
  const [search, setSearch] = useState("");
  const [fData, setFData] = useState(null);

  //initially the filtered data is equal to all countires.
  useEffect(() => {
    setFData(countries);
  }, [countries]);

  //the search values changes with the event value
  //when the search field is empty, filtered data will be equal all countries
  const handleChange = (e) => {
    setSearch(e.target.value);
    if (search.length <= 1) {
      setFData(countries);
    }
  };

  //this function filters according to the input value and will set the fData with filtered data.
  const handleClick = () => {
    if (fData && search) {
      const filteredCountries = fData.filter((country) => {
        return country.name.toLowerCase().includes(search.toLowerCase());
      });
      setFData(filteredCountries);
    }
  };

  return (
    <div className="app-wrapper">
      <SearchBar
        search={search}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      {fData && <TableWrapper countries={fData} />}
    </div>
  );
}

export default App;
