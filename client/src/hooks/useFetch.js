import { useState, useEffect } from "react";
import makeRequest from "../makeRequest";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {

    const fetchData=async()=>{
      try {
        setLoading(true)
        const response= await makeRequest.get(url)
        setData(response.data.data)
      } catch (error) {
        setError(true)
      }
      setLoading(false)
    }

fetchData()
  }, [url]);
  return { data, loading, error };
};
export default useFetch;
