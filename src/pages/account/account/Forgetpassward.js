import React from "react";
import "../../styles/account/ForGetpassward.css";

export default class ForGetpassward extends React.Component {
  render() {
    return (
      <div className="forgetpassword-page">
        <h1 className="forgetpassword-title">
          <span>Forgot Your Password?</span>
        </h1>
        <hr />
        <div className="forgetpassword-container">
          <p>
            Enter the e-mail address associated with your account. Click submit
            to have a password reset link e-mailed to you.
          </p>
          <div className="forgetpassword-form-group">
            <h3>Your E-Mail Address</h3>
            <form>
            <label for="email">E-Mail Address <span>*</span></label>
            <input type="email" id="email" placeholder="E-Mail Address" />
            </form>
          </div>
          <div className="forgetpassword-buttons">
            <button className="back">BACK</button>
            <button className="continue">CONTINUE</button>
          </div>
        </div>
      </div>
    );
  }
}
