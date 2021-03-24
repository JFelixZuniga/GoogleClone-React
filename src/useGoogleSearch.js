import { useEffect, useState } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "9ff961cd626c711f7";

// useGoogleSearch va a actuar cada vez que cambie el término de búsqueda
const useGoogleSearch = (textString) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${textString}`;

    const fetchData = () => {
      fetch(URL)
        .then((response) => response.json())
        .then((result) => setData(result));
    };
    fetchData();
  }, [textString]);
  // Llamada a la API de google - Search Engine

  return { data };
};

export default useGoogleSearch;
