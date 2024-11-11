// Shopping Cart

import React from "react";
import "../styles/account/ShoppingCart.css";
export default class ShoppingCart extends React.Component {
  render() {
    return (
      <div className="shoppingcart-page">
        <h1 className="shoppingcart-title">
          <span>Shopping Cart</span>
        </h1>
        <hr />
        <div className="shoppingcart-container">
        <div className="shoppingcart-google-signin">
            <button>
                <i class="fab fa-google"></i> Sign in
            </button>
        </div>
        <div className="shoppingcart-text-empty">text_empty</div>
        <button className="shoppingcart-continue-button">CONTINUE</button>
        </div>
      </div>
    );
  }
}


