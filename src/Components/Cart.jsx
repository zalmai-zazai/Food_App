import React, { useContext } from 'react';
import FoodReducer from '../Reducers/FoodReducer';
import { FoodsContext } from '../Context/FoodContext';
import foodImage from '../assets/food-png-2951.png';

const Cart = () => {
  const { cart, removeItem } = useContext(FoodsContext);
  return (
    <div
      className="modal fade "
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className=" modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Your Orders
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {cart.length ? (
              cart.map((item) => (
                <div key={item.foodId}>
                  <div className="card  col-md-5 food-item">
                    <img
                      src={item.foodImage ? item.foodImage : foodImage}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body d-flex flex-column ">
                      <h5 className="card-title fs-6">{item.foodTitle}</h5>

                      <p className="card-text">${item.foodPrice}</p>
                      <div className="buttons">
                        <a
                          href="#"
                          className="btn"
                          style={{
                            backgroundColor: '#d1282d',
                            color: 'white',
                          }}
                          onClick={() => removeItem(item.foodId)}
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h5>Cart is Empty</h5>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
