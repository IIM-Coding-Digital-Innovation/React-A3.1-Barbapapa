import React, { useState, useEffect } from "react";

const api = () => { 
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(`https://yummly2.p.rapidapi.com/feeds/list?limit=10&start=0`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fb10d2be60msh7e23a669d9c6628p136c7fjsn40a6b3370e73',
          'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
        }
      })
          .then((response) => response.json())
          .then((actualData) => console.log(data.feed[0].type))

          .then((actualData) => console.log(actualData))
          .catch((err) => {
              console.log(err.message);
            });
    }, []);
};




export default api;