// import libraries:
import React, { useEffect, useState } from "react";
// import components:
import SearchBar from "./components/searchBar/SearchBar";
import TableWrapper from "./components/mainTable/TableWrapper";
import useFetch from "./hooks/useFetch";
import { CountriesI } from "./types/types";
// import styles:
import "./styles/App.scss";

function App() {
  const [countries, error] = useFetch("https://restcountries.eu/rest/v2/all");
  const [search, setSearch] = useState<string>("");
  const [fData, setFData] = useState<CountriesI[]>([]);

  //initially the filtered data is equal to all countires. It will render the whole component again.
  useEffect(() => {
    setFData(countries);
    console.log(countries);
  }, [countries]);

  //the search values changes with the event value
  //when the search field is empty, filtered data will be equal all countries
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
    if (search.length === 1) {
      setFData(countries);
    }
  };

  //this function filters according to the input value and will set the fData with filtered data.
  const handleClick = () => {
    if (search) {
      const filteredCountries = fData?.filter((country: CountriesI) => {
        return (
          country.name.toLowerCase().includes(search.toLowerCase().trim()) ||
          country.nativeName
            ?.toLowerCase()
            .includes(search.toLowerCase().trim())
        );
      });
      setFData(filteredCountries);
    }
  };

  return !error ? (
    <div className="app-wrapper">
      <SearchBar
        search={search}
        handleChange={handleChange}
        handleClick={handleClick}
      />
      {fData && <TableWrapper countries={fData} />}
    </div>
  ) : (
    <p className="error-message">{error.message}</p>
  );
}

export default App;
