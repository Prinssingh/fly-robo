import React from "react";
import "../../styles/account/WishList.css";
export default class WishList extends React.Component {
  render() {
    return (
      <div className="wishlist-page">
        <h1 className="wishlist-title">
          <span>Shopping Cart</span>
        </h1>
        <hr />
        <div className="wishlist-container">
        
        <div className="wishlist-text-empty">Your wish list is empty.</div>
        <button className="wishlist-continue-button">CONTINUE</button>
        </div>
      </div>
    );
  }
}
