// import libraries:
import React, { useState } from "react";
// import components:
import SearchBar from "./components/searchBar/SearchBar";
import TableWrapper from "./components/mainTable/TableWrapper";
import useFetch from "./hooks/useFetch";
// import styles:
import "./styles/App.scss";

function App() {
  const [countries, error] = useFetch("https://restcountries.eu/rest/v2/all");
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="app-wrapper">
      <SearchBar search={search} handleChange={handleChange} />
      {countries ? (
        <TableWrapper countries={countries} />
      ) : (
        <div>
          <h1>{error}</h1>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}

export default App;
