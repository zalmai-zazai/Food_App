import React from 'react';
import data from '../assets/data.json';
import Food_Item from './Food_Item';

const FoodList = () => {
  return (
    <div className="food-list">
      <h2>Choose Your Favorit Meal To Start Your Order</h2>
      <div className="container mt-5 food-list-container row-cols-xl-6">
        {data.map((food) => (
          <Food_Item key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
