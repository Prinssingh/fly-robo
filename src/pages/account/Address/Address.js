import { useNavigate } from "react-router-dom";

function Address() {
  const navigate = useNavigate();

  const navigateTo = (url) => {
    navigate(url);
  };

  return (
    <div className="edit-account-page">
      <h1 className="edit-accountpage-title">
        <span>Address Book Entries</span>
      </h1>
      <hr />
      <div className="edit-account-container">
        <p>You have no addresses in your account.</p>

        <div className="edit-account-btn">
          <button
            type="button"
            className="back-btn"
            onClick={() => navigateTo(-1)} 
          >
            BACK
          </button>
          <button
            type="button"
            className="continue-btn"
            onClick={() => navigateTo("/pages/account/Address/AddNewAddress")}
          >
            New Address
          </button>
        </div>
      </div>
    </div>
  );
}

export default Address;
