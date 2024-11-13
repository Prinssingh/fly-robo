import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./header_component/Dropdown";
import "./styles/header/header.css";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="header-row-1">
            <div className="header-row-1-container">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="search-input"
                />
                <button className="search-button">
                  <i className="fas fa-search"></i>
                </button>
              </div>

              <div className="header-image">
                <div className="image-cantainer">
                  <a href="#">
                    <img
                      src="https://www.flyrobo.in/image/cache/wp/gp/logo/flyrobo18kb-908x295.webp"
                      width="1000"
                      height="295"
                      alt="flyboro"
                    />
                  </a>
                </div>
              </div>

              <div className="header-icons">
                <div className="icon-list">
                  <ul className="action-item">
                    <li className="hover">
                      <Link to="./pages/account/account/Login" className="link">
                        <i className="fas fa-user"></i>

                        <span>Login</span>
                      </Link>
                    </li>
                    <li className="hover">
                      <Link to="./pages/account/account/Register" className="link">
                        <i className="fas fa-pencil-alt"></i>
                        <span>Register</span>
                      </Link>
                    </li>
                    <li className="wish-hover">
                      <Link to="./pages/account/account/WishList" className="link watlist">
                        <i class="fa fa-heart"></i>
                        <span>wishlist</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="header-shoppingcart">
                  <Link to="./pages/account/ShoppingCart" className="shoppingcart-detaill">
                    <pre>0 item(s) - ₹0 </pre>
                    <i class="fas fa-shopping-cart"> </i>
                  </Link>

                  <div className="shoppingcart-info">
                    <p>Your shopping cart is empty</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>


          <div className="header-row-2">
            <div className="header-row-2-containar">
              <div className="menu">
                <div className="menu-button">
                  <i class="fas fa-bars"></i>
                  <span>MENU</span>
                
                </div>
              </div>
              <div className="header-col-2-containar-2">
                <div className="blog">
                  <Link to="/" className="link">
                    BLOG
                  </Link>
                </div>
                <div className="flaroboimport">
                  <Link to="/" className="link">
                    FLAROBO IMPORT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>


        <header className="mobile-header">
          <div class="top-bar">
            <Link to="/pages/account/account/Login" className="link">
              <i class="fas fa-user"></i>
              Login
            </Link>

            <Link to="/" className="link">
              <i class="fas fa-pencil-alt"></i>
              Register
            </Link>
          </div>
          <div className="logo-bar">
            <img
              alt="FlyRobo Logo"
              height="50"
              src="https://www.flyrobo.in/image/cache/wp/gp/logo/flyrobo18kb-908x295.webp"
              width="150"
            />
          </div>
          <div className="search-bar">
            <i className="fas fa-bars menu-icon"></i>
            <input placeholder="Search here..." type="text" />
            <button>
              <i className="fas fa-search"></i>
            </button>
            <i className="fas fa-shopping-cart cart-icon"></i>
          </div>
        </header>

        <Dropdown/>

        {/* <Login/> */}

        {/* <Account/> */}
      </div>
    );
  }
}
