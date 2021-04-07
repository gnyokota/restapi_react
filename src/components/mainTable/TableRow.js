// import libraries:
import React from "react";

function TableRow({ flagUrl, name, population, languages, region }) {
  return (
    <tr>
      <td>
        <img src={flagUrl} alt="country flag" />
      </td>
      <td>{name}</td>
      <td>{population}</td>
      <td>
        {languages.map((language) => (
          <li key={language.iso639_1}>{language.name}</li>
        ))}
      </td>
      <td>{region}</td>
    </tr>
  );
}

export default TableRow;
