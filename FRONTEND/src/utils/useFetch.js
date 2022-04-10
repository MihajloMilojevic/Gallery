import {useState, useEffect} from "react";

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if(!url) return;
    const fetchData = async () => {
      try {
        const response = await fetch(url, options || {});
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, error };
};

export default useFetch;


// import {useState, useEffect} from "react";

// const useFetch = (url, options) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
  
//   useEffect(() => {
//     if(!url) return;
//     const fetchData = async () => {
//       try {
// 		    setLoading(true)
//         const response = await fetch(url, options || {});
//         const json = await response.json();
//         setData(json);
//       } catch (error) {
//         setError(error);
//       } finally {
// 		    setLoading(false)
// 	    }
//     };

//     fetchData();
//   }, [url, options]);

//   return { data, error, loading };
// };

// export default useFetch;