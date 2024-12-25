import React from "react";
import "../styles/account/OrderHistory.css";

const OrderHistory = () => {
  
  return (
    <div className="orderhistory-page">
      <h1 className="orderhistory-title">
        <span>Order History</span>
      </h1>
      <hr />
      <div className="orderhistory-container">
        <div className="orderhistory-text-empty">You have not made any previous orders!</div>
        <button className="orderhistory-continue-button">CONTINUE</button>
      </div>
    </div>
  );
};

export default OrderHistory;
