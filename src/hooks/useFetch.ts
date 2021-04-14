// import libraries:
import { useState, useEffect } from "react";
//import components: 
import {CountriesI} from '../types/types'; 



function useFetch(url:string):[CountriesI[], Error | null]{

  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

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
  }, [url]);

  return [countries, error];
}

export default useFetch;
