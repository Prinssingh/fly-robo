import { useNavigate } from "react-router-dom";
import "../../styles/account/AddNewAddress.css";

export default function AddNewAddress() {
  const navigate = useNavigate();

  const handleCardClick = (url) => {
    navigate(url);
  };

  return (
    <div className="addNewaddress-container">
      <div class="section-title">
        Your Personal Details
        <span></span>
      </div>
      <form className="addNewaddress-form">
        <label for="first-name" className="addNewaddress-form-label">
          First Name <span class="required">*</span>
        </label>
        <input
          type="text"
          className="addNewaddress-form-input"
          id="first-name"
          name="first-name"
          value=""
        />

        <label for="last-name" className="addNewaddress-form-label">
          Last Name <span class="required">*</span>
        </label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          value=""
          placeholder="last-name"
          className="addNewaddress-form-input"
        />

        <label for="Company" className="addNewaddress-form-label">
          Company
        </label>
        <input
          type="text"
          id="Company"
          name="Company"
          value=""
          placeholder="Company"
          className="addNewaddress-form-input"
        />

        <label for="Address1" className="addNewaddress-form-label">
          Address 1 <span className="required">*</span>
        </label>
        <input
          type="text"
          id="Address1"
          name="Address1"
          value=""
          placeholder="Address 1"
          className="addNewaddress-form-input"
        />

        <label for="Address 2" className="addNewaddress-form-label">
          Address 2
        </label>
        <input
          type="text"
          id="Address2"
          name="Address2"
          placeholder="Address 2"
          className="addNewaddress-form-input"
        />

        <label for="City" className="addNewaddress-form-label">
          City <span class="required">*</span>
        </label>
        <input
          type="text"
          id="City"
          name="City"
          value=""
          placeholder="City"
          className="addNewaddress-form-input"
        />
        <label for="Post Code" className="addNewaddress-form-label">
          Post Code <span class="required">*</span>
        </label>
        <input
          type="text"
          id="Post Code"
          name="Post Code"
          value=""
          placeholder="Post Code"
          className="addNewaddress-form-input"
        />
        <label for="Country " className="addNewaddress-form-label">
        Country  <span class="required">*</span>
        </label>
        <select id="country" className="addNewaddress-form-input">
          <option>India</option>
        </select>

        <label for="Region / State" className="addNewaddress-form-label">
          Region / State <span class="required">*</span>
        </label>
        <select id="region" className="addNewaddress-form-input">
          <option>--- Please Select ---</option>
          <option>rewa</option>
          <option>satnta</option>
          <option>bhopal</option>
          <option>indor</option>
        </select>

        
        <label for="Default Address" className="addNewaddress-form-label">
        Default Address <span class="required">*</span>
        </label>
        <div className="radio-group">
                    <label for="default-yes">Yes</label>
                    <input type="radio" id="default-yes" name="default-address" />
                    <label for="default-no">No</label>
                    <input type="radio" id="default-no" name="default-address" checked />
                </div>
        
      </form>

      <div className="addNewaddress-btn">
        <button type="button" className="back-btn">
          BACK
        </button>
        <button
          type="button"
          className="continue-btn"
          onClick={() => handleCardClick("/pages/account/Address")}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}

// /pages/account/Address
