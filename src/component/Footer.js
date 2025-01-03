import React from "react";
import { Link} from "react-router-dom"; 
import Recently from "./Footer_component/Recently";
import MostViewed from "./Footer_component/MostViewed";
import "./styles/footer/footer.css";

export default class Footer extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'recently'
    };
  }

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  }

  renderTabContent = () => {
    switch (this.state.activeTab) {
      case 'recently':
        return <Recently />;
      case 'most-viewed':
        return <MostViewed />;
      default:
        return <Recently />;
    }
  }
  
 
  render() {
    const { activeTab } = this.state;
    return (
      <footer className="footer">
      <br/>
        <div className="footer-contents">
           <div className="Footer-card grid-col">
            <div className="grid-col-1">
              <div className="flex-1">

              <ul className="nav-tab">
                <li>
                <button
                      className={activeTab === 'recently' ? 'active' : ''}
                      onClick={() => this.setActiveTab('recently')}
                    >
                      Recently Viewed
                    </button>
                </li>
                <li>
                <button
                      className={activeTab === 'most-viewed' ? 'active' : ''}
                      onClick={() => this.setActiveTab('most-viewed')}
                    >
                      Most Viewed
                    </button>

                </li>
              </ul>

              {/* Display Recently component or the clicked link's content */}

              </div>
              {this.renderTabContent()}
            </div> 

           </div>  

            <div className="grid-row-2">

           <div className="flex-row">
             <div className="quick-links">
               <div className="quick-title"><h3>QUICK LINKS</h3></div>
               
                 
            <ul className="links-menu">
              <li>
                <i className="fas fa-user"></i>
                <Link to="#" className="link">About Us</Link>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <Link to="#" className="link">Contact Us</Link>
              </li>
              <li>
                <i className="fas fa-undo"></i>
                <Link to="#" className="link">Refund Policy</Link>
              </li>
              <li>
                <i className="fas fa-truck"></i>
                <Link to="#" className="link">Delivery Information</Link>
              </li>
              <li>
                <i className="fas fa-file-alt"></i>
                <Link to="#" className="link">Privacy Policy</Link>
              </li>
              <li>
                <i className="fas fa-file-contract"></i>
                <Link to="#" className="link">Terms & Conditions</Link>
              </li>
              <li>
                <i className="fas fa-dollar-sign"></i>
                <Link to="/" className="link">Affiliate</Link>
              </li>
            </ul>
               
          </div>
             
             <div className="newsletter">
               <div className="footer-title"><h3>Newsletter</h3></div>
               <p>
                 Stay up to date with news and promotions by signing up for our
                 newsletter
               </p>
               <div className="newsletter-form">
                 <input
                   type="email"
                   placeholder="Your email"
                   className="email-input"
                 />
                 <button className="submit-button">Send</button>
               </div>
               <div className="privacy-checkbox">
                 <input type="checkbox" id="privacy-policy" />
                 <label htmlFor="privacy-policy">
                   I have read and agree to the{" "}
                   <Link to="#" className="privacy-link">
                     Privacy Policy
                   </Link>
                 </label>
               </div>
             </div>
           </div>
          </div>  


          <div className="grid-row-3">
          <div className="grid-container-3">

            <div className="copyright" style={{padding: '0'}}>
              <ul className="copyright-menu">
                <li>
                  <Link to="#" className="link">Copyright © 2024, Aman, All Rights Reserved.</Link>
              
                </li>
                </ul>
            
            </div>
            <div className="social-icons">
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard"></i>
                <i className="fab fa-cc-paypal"></i>
                <i className="fab fa-cc-amazon-pay"></i>
                <i className="fas fa-money-bill-wave"></i>
            </div>
          </div>
          </div>

        </div>
      </footer>

            
    );
  }


}
