// import libraries:
import React, { useState, useEffect } from "react";

function useFetch(url) {
  const [countries, setCountries] = useState("");
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [countries, error];
}

export default useFetch;
