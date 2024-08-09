import React, { createContext, useEffect, useReducer } from 'react';
import FoodReducer from '../Reducers/FoodReducer';

export const FoodsContext = createContext();
const FoodContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(FoodReducer, []);

  useEffect(() => {}, [cart]);

  function addItem(foodId, foodTitle, foodImage, foodPrice) {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        foodId,
        foodTitle,
        foodImage,
        foodPrice,
      },
    });
  }
  function removeItem(foodId) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: foodId,
    });
  }
  {
    console.log(cart);
  }
  return (
    <FoodsContext.Provider value={{ addItem, removeItem, cart }}>
      {children}
    </FoodsContext.Provider>
  );
};

export default FoodContextProvider;
