import { useEffect, useState } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "96457e4166e62755c";

// useGoogleSearch va a actuar cada vez que cambie el término de búsqueda
const useGoogleSearch = (textString) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${textString}`
      )
        .then((response) => response.json())
        .then((result) => setData(result));
    };
    fetchData();
  }, [textString]);

  return { data };
};

export default useGoogleSearch;
