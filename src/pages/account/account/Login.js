import React from "react";
import "../../styles/account/Login.css";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordError: "",
      emailError: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value, passwordError: "", emailError: "" }); 
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;

    let valid = true; 

    
    this.setState({ emailError: "", passwordError: "" });

    if (email === "") {
      this.setState({ emailError: "Email is required." });
      valid = false;
    }

    if (password.length < 10) {
      this.setState({ passwordError: "Password is not valid." });
      valid = false;
    }

    if (valid) {

      this.setState({ email: "", password: "" });
    }
  }

  render() {
    const { email, password, passwordError, emailError } = this.state;

    return (
      <div className="login-container">
        <div className="section-container">
          <div className="section-1">
            <h2>
              New Customer <span></span>
            </h2>
            <p>
              By creating an account you will be able to shop faster, be up to
              date on an order's status, and keep track of the orders you have
              previously made.
            </p>
            <button className="btn">CONTINUE</button>
          </div>
          <div className="section-2">
            <h2>
              Returning Customer <span></span>
            </h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">E-Mail Address</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="E-Mail Address"
                  onChange={this.handleInputChange}
                />
                {emailError && (
                  <div className="error-message" style={{ color: "red" }}>
                    {emailError}
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.handleInputChange}
                />
                {passwordError && (
                  <div className="error-message" style={{ color: "red" }}>
                    {passwordError}
                  </div>
                )}
              </div>
              <div className="form-group">
                <a href="#">Forgotten Password</a>
              </div>
              <button type="submit" className="btn">
                LOGIN
              </button>
            </form>
          </div>
        </div>
        <div className="section-google-btn">
        <button className="google-btn">
          <i className="fab fa-google"></i> Sign in
        </button>
        </div>
      </div>
    );
  }
}