import { useEffect, useState } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const url = `${process.env.REACT_APP_BASE_URL}/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchData();
  }, [url]);
  return { data };
};
