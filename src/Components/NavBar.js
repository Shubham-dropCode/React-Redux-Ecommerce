import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <header className="header sticky-top bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <Link to="/">
                  <img src="../assets/img/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu d-flex align-item-center justify-content-center">
                <ul>
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="./Cart">Cart</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <a href="/">
                      <i className="fa fa-heart"></i> <span>0</span>
                    </a>
                  </li>
                  <li>
                    <Link to="/cart">
                      <i className="fa fa-shopping-bag"></i>{" "}
                      <span>{items.length}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
