import React from "react";
import "../../styles/account/ChangePassword.css";

export default class ChangePassword extends React.Component {
  render() {
    return (
      <div className="changepassword-page">
        <h1 className="changepassword-title">
          <span>Forgot Your Password?</span>
        </h1>
        <hr />
        <div className="changepassword-container">
          <p>
            Enter the e-mail address associated with your account. Click submit
            to have a password reset link e-mailed to you.
          </p>
          <div className="changepassword-form-group">
            <h3>Your E-Mail Address</h3>
            <form>
            <label for="email">E-Mail Address <span>*</span></label>
            <input type="email" id="email" placeholder="E-Mail Address" />
            </form>
          </div>
          <div className="changepassword-buttons">
            <button className="back">BACK</button>
            <button className="continue">CONTINUE</button>
          </div>
        </div>
      </div>
    );
  }
}
