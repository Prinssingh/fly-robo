import React from "react";
import "../../styles/account/Register.css";
export default class Register extends React.Component {
  render() {
    return (
      <div className="registerpage">
        <div className="register-container">
          <h1>Register Account</h1>

          <a href="#" className="google-signin">
            <i className="fab fa-google-plus-g"></i>
            <span>Sign in</span>
          </a>
          <p className="info-text">
            If you already have an account with us, please login at the{" "}
            <a href="#">login page</a>.
          </p>
          <div className="section">
            <div className="section-title">
              Your Personal Details <span></span>
            </div>
            <div className="form-group">
              <label htmlFor="first-name">
                First Name <span className="required"></span>
              </label>
              <input type="text" id="first-name" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">
                Last Name <span className="required"></span>
              </label>
              <input type="text" id="last-name" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                E-Mail <span className="required"></span>
              </label>
              <input type="email" id="email" placeholder="E-Mail" />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">
                Mobile No. +91 <span className="required"></span>
              </label>
              <input type="text" id="mobile" placeholder="Mobile No. +91" />
            </div>
            <div className="form-group">
              <label htmlFor="alt-mobile">Alternate Mobile No. +91</label>
              <input
                type="text"
                id="alt-mobile"
                placeholder="Alternate Mobile No. +91"
              />
            </div>
          </div>
          <div className="section">
            <div className="section-title">
              Your Password <span></span>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                Password <span className="required"></span>
              </label>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <label htmlFor="password-confirm">
                Password Confirm <span className="required"></span>
              </label>
              <input
                type="password"
                id="password-confirm"
                placeholder="Password Confirm"
              />
            </div>

            <div className="newsletter-container">
              <h2 className="section-title">
                Newsletter<span></span>
              </h2>
              <form>
                <div className="form-group">
                  <label htmlFor="subscribe">Subscribe</label>
                  <div className="radio-group">
                    <div className="radio-option">
                      <input
                        type="radio"
                        id="subscribe-yes"
                        name="subscribe"
                        value="yes"
                      />
                      <label htmlFor="subscribe-yes">Yes</label>
                    </div>
                    <div className="radio-option">
                      <input
                        type="radio"
                        id="subscribe-no"
                        name="subscribe"
                        value="no"
                      />
                      <label htmlFor="subscribe-no">No</label>
                    </div>
                  </div>
                </div>

                

                <div className="privacy-policy">
                  <input type="checkbox" id="privacy-policy" required />
                  <label htmlFor="privacy-policy">
                    I have read and agree to the <a href="#">Privacy Policy</a>
                  </label>
                </div>
                <button type="submit" className="submit-btn">
                  CONTINUE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
