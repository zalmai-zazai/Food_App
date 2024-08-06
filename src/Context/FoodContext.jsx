import React, { useState, createContext, useEffect } from 'react';

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const apiKey = 'dd84a805a14b40b9b8ad08c3fff463e6';

export const FoodsContext = createContext();
const FoodContextProvider = ({ children }) => {
  //   const [searchData, setSearchData] = useState('');
  //   const [apiData, setApiData] = useState([]);

  //   useEffect(() => {
  //     async function fetchFood() {
  //       const res = await fetch(`${URL}?apiKey=${apiKey}`);
  //       const data = await res.json();

  //       setApiData(data.results);
  //     }
  //     fetchFood();
  //   });

  return <FoodsContext.Provider value={{}}>{children}</FoodsContext.Provider>;
};

export default FoodContextProvider;
