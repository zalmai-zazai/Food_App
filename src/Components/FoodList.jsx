import React from 'react';
import data from '../data.json';
import Food_Item from './Food_Item';
import img from '../assets/food-png-2951.png';

const FoodList = ({}) => {
  return (
    <div className="food-list" id="menu">
      <h2>Choose Your Favorit Meal To Start Your Order</h2>

      <div className=" container mx-5 mt-5 food-list-container row ">
        {data.map((food) => (
          <Food_Item key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
