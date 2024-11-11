import React from "react";
import "../../styles/account/Logout.css";
export default class Logout extends React.Component {
  render() {
    return (
      <div className="logout-page">
        <h1 className="logoutpage-title">
          <span>Account Logout</span>
        </h1>
        <hr />
        <div className="logout-container">
          <p>
            You have been logged off your account. It is now safe to leave the
            computer.
          </p>
          <p>
            Your shopping cart has been saved, the items inside it will be
            restored whenever you log back into your account.
          </p>
             
           <button className="logout-button">CONTINUE</button>  

        </div>
      </div>
    );
  }
}
