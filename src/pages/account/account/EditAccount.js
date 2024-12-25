import React from "react";
import "../../styles/account/EditAccount.css";

class EditAccount extends React.Component {
  render() {
    return (
      <div className="edit-account-page">
        <h1 className="edit-accountpage-title">
          <span>My Account</span>
        </h1>
        <hr />
        <div className="edit-account-container">
          <div class="section-title">
            Your Personal Details
            <span></span>
          </div>
          <form className="edit-account-form">
            <label for="first-name" className="edit-account-form-label">
              First Name <span class="required">*</span>
            </label>
            <input
              type="text"
              className="edit-account-form-input"
              id="first-name"
              name="first-name"
              value="aman"
            />

            <label for="last-name" className="edit-account-form-label">
              Last Name <span class="required">*</span>
            </label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              value=""
              className="edit-account-form-input"
            />

            <label for="email" className="edit-account-form-label">
              E-Mail <span class="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value=""
              className="edit-account-form-input"
            />

            <label for="mobile" className="edit-account-form-label">
              Mobile No. +91 <span className="required">*</span>
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value=""
              className="edit-account-form-input"
            />

            <label for="alt-mobile" className="edit-account-form-label">
              Alternate Mobile No. +91
            </label>
            <input
              type="text"
              id="alt-mobile"
              name="alt-mobile"
              placeholder="Alternate Mobile No. +91"
              className="edit-account-form-input"
            />
          </form>

          <div className="edit-account-btn">
            <button type="button" className="back-btn">
              BACK
            </button>
            <button type="button" className="continue-btn">
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default EditAccount;
