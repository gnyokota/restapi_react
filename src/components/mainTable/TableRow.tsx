// import libraries:
import React from "react";
//import components:
import { CountriesI, Languages } from "../../types/types";

function TableRow({ flag, name, population, languages, region }: CountriesI) {
  return (
    <tr>
      <td>
        <img src={flag} alt="country flag" />
      </td>
      <td>{name}</td>
      <td>{population}</td>
      <td>
        {languages.map((language: Languages) => (
          <li key={language.iso639_1}>{language.name}</li>
        ))}
      </td>
      <td>{region}</td>
    </tr>
  );
}

export default TableRow;
