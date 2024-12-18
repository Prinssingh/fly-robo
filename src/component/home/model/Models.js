import "../../styles/home/model.css";
import { FaAngleUp } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const Models = ({  isOpen, onClose, title, description }) => {
  if (!isOpen) return  null;
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={onClose}>
            &times;
          </span>

          <div className="image-productDetails">
            <div className="image-main-div">
            <img
              src="https://www.flyrobo.in/image/cache/wp/gj/50-watt-soldering-iron-siron/50-watt-soldering-iron-siron-1%20(3)-550x550.webp"
              alt={title}
            />
            <div className="img-small-all-box">
              <div className="small-box"><img src="https://www.flyrobo.in/image/cache/wp/gj/50-watt-soldering-iron-siron/50-watt-soldering-iron-siron-1%20(3)-80x80.webp" alt="img" /></div>
              <div className="small-box"><img src="https://www.flyrobo.in/image/cache/wp/gj/50-watt-soldering-iron-siron/50-watt-soldering-iron-siron-1%20(3)-80x80.webp" alt="img" /></div>
              <div className="small-box "><img src="https://www.flyrobo.in/image/cache/wp/gj/50-watt-soldering-iron-siron/50-watt-soldering-iron-siron-1%20(3)-80x80.webp" alt="img" /></div>
              <div className="small-box"><img src="https://www.flyrobo.in/image/cache/wp/gj/50-watt-soldering-iron-siron/50-watt-soldering-iron-siron-1%20(3)-80x80.webp" alt="img" /></div>

            </div>
            </div>

            <div className="Image-right-product-Detaials" >
            <div className="modal-details">
            {/* <h2>{title}</h2> */}
            <p>{description}</p>
          </div>
          <div className="description-box">
            <p>descrept Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt consequatur alias accusantium </p>
             <button>show more</button>

             <div className="brand-details-box">
              <li className="dot-circle"> <div> </div><span>IN STOCK</span></li>
              <li>Brond: <a herf="#" > FLY-RoBo</a> </li>
              <li>0 FlyRobo Cashback.</li>
              <p>5 or more ₹539</p>
              <p>15 or more ₹53</p>
              <hr/>
             </div>
             <div className="brand-details-box-price">
             <div className="d-flex gap-3"> <h2>₹600</h2><del className="mt-2">700</del></div>
              <p>(Inc GST)</p>
             </div>
             </div>
             
            </div>
          </div>
      <div className="button-section-bottom">
      <div className="button1div">
                <div className=" first11  ">
                  <div className="second11  ">
                    <span className="mt-2">11</span>
                  </div>

                  <div className=" third11  ">
                    <div className="main11">
                      <FaAngleUp size={17} />
                    </div>
                    <div className="third11line "></div>
                    <div className="main11">
                      <IoChevronDownSharp size={17} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="button_2div">
                <button className="addtocardbutton">
                  <span className="shopIcon">
                    <GiShoppingCart size={20} />
                  </span>{" "}
                  <span>ADD TO CARD</span>
                </button>
              </div>
              <div className="button_3div">
              <div className="heart-icon"><IoIosHeartEmpty color="white" size={30} /></div>
                <div className="Buynowbutton"><FaArrowRightLong size={30}/> </div>
              </div>
      </div>
          
        </div>
      </div>
    </>
  );
};

export default Models;
