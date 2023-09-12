import { useState, useEffect } from "react";


// Create useFetch for fetching data from that url we
// pass in, and we could use this component for each
// url we want in diffrent component
export default function useFetch(url) {
  const [ data, setData ] = useState([]);
  const [ isDataReceive, setIsDataReceive ] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    // Using abortController for removing fetch api
    // when we are not using component that use useFetch()
    const abortController = new AbortController();
    
    // Fetching data
    fetch(url, { signal: abortController.signal })
      .then(res => {
        if(!res.ok) {
          throw Error("Could not fetch data for that resource.");
        }
        return res.json();
      })
      .then(data => {
        setIsDataReceive(true);
        setData(data);
      })
      .catch(err => {
        if(err.name !== "AbortError") {
          setError(err.message);
        }
      });

      return () => abortController.abort();
  }, [url]);

  // Return that data we fetch
  return { data, isDataReceive, error }
}