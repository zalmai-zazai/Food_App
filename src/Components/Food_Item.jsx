import React from 'react';

const Food_Item = ({ food }) => {
  return (
    <div className="card" style={{ width: '14rem' }}>
      <img src={food.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{food.title}</h5>
        <p className="card-text">{food.description}</p>
        <p className="card-text">${food.price}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Food_Item;
