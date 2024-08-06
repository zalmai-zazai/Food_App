import React from 'react';
import logo from '../assets/resturantLogo.png';
import cartImg from '../assets/cart.png';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand me-auto" href="#">
          <img src={logo} alt="" />
        </a>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <Nav.Link
                  className="nav-link mx-lg-2 active"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link className="nav-link mx-lg-2" href="#about">
                  About
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link className="nav-link mx-lg-2" href="#menu">
                  Service
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link className="nav-link mx-lg-2" href="#contact">
                  Contact
                </Nav.Link>
              </li>
            </ul>
          </div>
        </div>
        <a className="navbar-brand " href="#">
          <img className="cart-img" src={cartImg} alt="" />
        </a>
        <a className="navbar-brand " href="#">
          <img
            className="user-logo"
            src="https://media.istockphoto.com/id/1162434010/vector/person-icon-flat-red-round-button-vector-illustration.jpg?s=612x612&w=0&k=20&c=vPNCU73SuZYKX3NGFU6-M5XNOtUON30_K9fIPUFeeHo="
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
