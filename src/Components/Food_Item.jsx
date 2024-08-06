import React, { useState } from 'react';
import foodImage from '../assets/food-png-2951.png';

const Food_Item = ({ food }) => {
  return (
    <div className="card  col-md-4 food-item">
      <img
        src={food.img ? food.img : foodImage}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body d-flex flex-column ">
        <h5 className="card-title">{food.title}</h5>
        <p className="card-text">{food.description}</p>
        <p className="card-text">${food.price}</p>
        <div className="buttons">
          <a
            href="#"
            className="btn"
            style={{
              backgroundColor: '#d1282d',
              color: 'white',
            }}
          >
            Add to Cart
          </a>
          <a
            href="#"
            className="btn"
            style={{
              border: 'solid 1px #d1282d',
              backgroundColor: 'white',
              color: '#d1282d',
              margin: '5px',
            }}
          >
            Show Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Food_Item;
