import {useEffect, useState} from "react";

const {REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN} = process.env;

function useContentful (query){
  let [data, setData] = useState(null);
  let [errors, setErrors] = useState(null);

  useEffect(() => {
      fetch(`https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}`, {
        method: "POST",
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`
        },
        body: JSON.stringify({query})
      }).then(response => response.json()
        .then(({ data, errors }) => {
          if(errors) setErrors(errors);
          if(data) setData(data);
        }))
        .catch((error) => setErrors([errors]));
    }, [query, errors]
    // without this dependency array, useEffect would run after each render, with it, only runs once, when component is injected in DOM
  );
  return {data, errors};
}

export default useContentful;