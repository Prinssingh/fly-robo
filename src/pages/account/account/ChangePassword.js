import React from "react";
// import { useNavigate } from "react-router-dom";
import "../../styles/account/ChangePassword.css";
// import "../../styles/account/EditAccount.css";

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirmPassword: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const { password, confirmPassword } = this.state;
    if (password === confirmPassword) {

      console.log("Password changed successfully!");
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  render() {
    const { password, confirmPassword } = this.state;
    // const navigate = useNavigate();

    return (
      <div className="changepassword-page">
        <h1 className="changepassword-page-title">
          <span>Change Password</span>
        </h1>
        <hr />
        <div className="changepassword-page-container">
          <div className="section-title">
            Your Password
            <span></span>
          </div>
          <form className="changepassword-page-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="password" className="changepassword-page-form-label">
              Password <span className="required">*</span>
            </label>
            <input
              type="password"
              className="changepassword-page-form-input"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              placeholder="Password"
            />

            <label htmlFor="confirmPassword" className="changepassword-page-form-label">
              Password Confirm <span className="required">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleInputChange}
              placeholder="Password Confirm"
              className="changepassword-page-form-input"
            />
          </form>

          <div className="changepassword-page-btn">
            <button type="button" className="back-btn" >
              BACK
            </button>
            <button type="button" className="continue-btn" onClick={this.handleSubmit}>
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePassword;
