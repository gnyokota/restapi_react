// import libraries:
import React from "react";
import Table from "react-bootstrap/Table";
// import components:
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
// import styles:
import "./styles/Table.scss";

function TableWrapper({ countries }) {
  return (
    <Table responsive>
      <TableHeader />
      <tbody>
        {countries &&
          countries.map((country) => (
            <TableRow
              key={country.alpha2Code}
              flagUrl={country.flag}
              name={country.name}
              population={country.population}
              languages={country.languages}
              region={country.region}
            />
          ))}
      </tbody>
    </Table>
  );
}

export default TableWrapper;
