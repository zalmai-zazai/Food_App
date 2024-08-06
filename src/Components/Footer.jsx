import React from 'react';
import { Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-contact">
              <h2>Get In Touch</h2>
              <p>
                <i className="fa fa-map-marker-alt"></i>201 Central Ave N,
                Settle, WA, USA, 98032
              </p>
              <p>
                <i className="fa fa-phone-alt"></i>+153 550 4110
              </p>
              <p>
                <i className="fa fa-envelope"></i>MyResturant@gmail.com
              </p>
              <div className="footer-social">
                <a className="btn" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-link">
              <h2>Popular Links</h2>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
              <Nav.Link href="#service">Our Service</Nav.Link>
              <Nav.Link href="#location">Service Points</Nav.Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            {/* <div className="footer-link">
              <h2>Useful Links</h2>

              <a href="">Privacy policy</a>
              <a href="">Cookies</a>
              <a href="">Help</a>
              <a href="">FQAs</a>
            </div> */}
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-newsletter">
              <h2>Newsletter</h2>
              <form>
                <input className="form-control" placeholder="Full Name" />
                <input className="form-control" placeholder="Email" />
                <button className="btn btn-custom">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container copyright">
        <p>
          &copy; <a href="#">MyResturant.com</a>, All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
