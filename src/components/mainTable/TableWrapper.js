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
      {/* I cannot have a empty tbody  */}
      {countries ? (
        <tbody>
          {countries.map((country) => (
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
      ) : (
        <tbody>
          <tr>
            <td colSpan="5">
              <h1>Loading...</h1>
            </td>
          </tr>
        </tbody>
      )}
    </Table>
  );
}

export default TableWrapper;
