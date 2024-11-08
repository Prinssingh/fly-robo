import { Component } from "react";

import "../pages/styles/ProductDetails.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaAngleUp } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { BiLike } from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";
// import Rate from "./Rate"
import { IoIosStarOutline } from "react-icons/io";


export default class ProductDetails extends Component {
    render(){
        return(
            <>
             <div className="mainContai min-vh-100">
        <div className="mainContai-secound">
        <div className="heraderIcon">
          <span className="iconContainer ">
            {" "}
            <IoHomeOutline size={20} />
          </span>{" "}
          <span className="icontext">- Electronic Components</span>
        </div>
        <div className="itemName">1030 Flat Mobile Phone Vibration Motor</div>
        <div>
          <div className="linehr"></div>
          <div className="linefull"></div>
        </div>

        <div className="imageDiv">
          <div className="leftproduct">
            <div className="image-main-box">
              <img
                src="https://www.flyrobo.in/image/cache/wp/gj/1030-3v-flat-mobile-phone-vibration-motor/1030-3v-flat-mobile-phone-vibration-motor-4-550x550.webp"
                alt="img"
              />
            </div>
            <div className="image-all-box">
              <div className="image-all-box-small">
                <img
                  src="https://www.flyrobo.in/image/cache/wp/gj/1030-3v-flat-mobile-phone-vibration-motor/1030-3v-flat-mobile-phone-vibration-motor-4-80x80.webp"
                  alt=""
                />
              </div>
              <div className="image-all-box-small">
                <img
                  src="https://www.flyrobo.in/image/cache/wp/ge/1030-3v-flat-mobile-phone-vibration-motor/1030-3v-flat-mobile-phone-vibration-motor-3-80x80w.webp"
                  alt=""
                />
              </div>
              <div className="image-all-box-small">
                <img
                  src="https://www.flyrobo.in/image/cache/wp/gj/1030-3v-flat-mobile-phone-vibration-motor/1030-3v-flat-mobile-phone-vibration-motor-2-80x80w.webp"
                  alt=""
                />
              </div>
              <div className="image-all-box-small">
                <img
                  src="https://www.flyrobo.in/image/cache/wp/gj/1030-3v-flat-mobile-phone-vibration-motor/1030-3v-flat-mobile-phone-vibration-motor-1-80x80h.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="down-icon-box">
              <div className="icon-box1">
                <FaPlus color="white" size={24} className="mt-1" />
              </div>
              <div className="icon-box2">
                <FaFacebook color="white" size={24} className="mt-1" />
              </div>
              <div className="icon-box3">
                <FaXTwitter color="white" size={24} className="mt-1" />
              </div>
              <div className="icon-box4">
                <MdWhatsapp color="white" size={26} className="mt-1" />
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="rightproduct">
            <div className=" firstlinerightproduct ">
              <div className="Star ">
                {[...Array(5)].map((_, i) => (
                  <IoIosStarOutline key={i} />
                ))}
              </div>
              <span className="texthover">0</span>
              <div className=" texthover">Based on 0 review</div> <span>-</span>
              <div className=" texthover ">Write a review</div> <span>/</span>
              <div className=" texthover ">Ask a Question</div>
            </div>
            <div className="linerightproduct mt-4 ">
              <hr />
            </div>
            <div className="priceContainer">
              <div className="pric">
                <div className=" pricein   ">
                  <div>
                    <h1 className=" pricetext ">₹29</h1>
                    <p className=" textGst ">(inc GST)</p>
                  </div>
                </div>
              </div>

              <div className="pric2">
                <div className="d-flex gap-1 mt-2 iconflex">
                  <IoCheckmark size={20} color="green" />{" "}
                  <p className="">IN STOCK</p>
                </div>
                <li className=" texticonflexdown text-center mt-[]">
                  SKU: FR-08-069
                </li>
              </div>
              <div className="pric3">
                <div className=" mt-2   ">
                  <p>10 or more ₹29</p>
                  <div>
                    <p className="ptag">50 or more ₹26</p>
                  </div>
                </div>
              </div>
              <div className="pric4">
                <div className="imagelogo h-24 w-full flex justify-center bg-cover ">
                  <img
                    src="https://www.flyrobo.in/image/cache/wp/gj/logo/Flyrobo-min-mobile-60x60w.webp"
                    alt="logo"
                  />
                </div>
                <hr />
                <div className="logotext mt-[-5px] ">
                  <p className="text-center  ">FlyRobo</p>
                </div>
              </div>
            </div>
            <div className="AddTocardbutton">
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
              <div className="button2div">
                <button className="addtocardbutton">
                  <span className="shopIcon">
                    <GiShoppingCart size={20} />
                  </span>{" "}
                  <span>ADD TO CARD</span>
                </button>
              </div>
              <div className="button3div">
                <button className="Buynowbutton">
                  <BiLike size={20} /> <span>BUY NOW</span>
                </button>
              </div>
            </div>
            <hr />
            <div className="add-to-wish-list">
              <div className="add-head-text">
                <IoIosHeartEmpty color="red" size={20} />{" "}
                <p className="list-text">Add to wish list</p>
              </div>
              <div className="wish-icon-details">
                <div className="wish-icon1">
                  <div className="icon-replace1">
                    <AiOutlineRetweet color="green" size={50} />
                  </div>
                  <div className="replace-icon-text">
                    <h6 className="mt-2">
                      7 Day Replacement <br />
                      <span className="replace-icon-text-span">
                        {" "}
                        Replacement available on this product
                      </span>{" "}
                    </h6>
                  </div>
                </div>

                <div className="wish-icon2">
                  <div className="icon-replace2">
                    <FaCarSide color="green" size={50} />
                  </div>
                  <div className="replace-icon-text">
                    <h6 className="mt-2">
                      Free shipping <br />
                      <span className="replace-icon-text-span">
                        Get free shipping above ₹ 499
                      </span>{" "}
                    </h6>
                  </div>
                </div>

                <div className="wish-icon3">
                  <div className="icon-replace3">
                    <MdOutlinePayments color="green" size={50} />
                  </div>
                  <div className="replace-icon-text">
                    <h6 className="mt-2">
                      COD Available <br />
                      <span className="replace-icon-text-span">
                        {" "}
                        Pay Cash at the time of Delivery
                      </span>{" "}
                    </h6>
                  </div>
                </div>

                <div className="wish-icon4">
                  <div className="icon-replace3">
                    <FaUserLarge color="green" size={50} />
                  </div>
                  <div className="replace-icon-text">
                    <h6 className="mt-2">
                      Support <br />
                      <span className="replace-icon-text-span">
                        {" "}
                        Get After-sale Technical Support
                      </span>{" "}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="imagesectionbarRight">
              <div className="maindivnav">
                <li>Related Products</li>
                <li>From Same Category</li>
                <li>From Same Brand</li>
              </div>
              <div className="textunderline"></div>
              <div className="card-div-1">
                <div className="main-card">
                  <div className="cards-main-div-1">
                    <img
                      src="https://www.flyrobo.in/image/cache/wp/gp/solderless-breadboard-400-point/solderless-breadboard-400-point-6-70x70.webp"
                      alt="img"
                    />
                  </div>
                  <div className="cards-main-div-2">
                    <div className="text-title">
                      <h6> Solderless Breadboard 400 Point</h6>
                    </div>
                    <div className="price-title">
                      <span>₹129</span>
                      <del>₹129</del>
                    </div>
                    <div className="icon-title">
                      <span>
                        {" "}
                        <GiShoppingCart size={20} />{" "}
                      </span>
                      <span>
                        <IoIosHeartEmpty color="black" size={20} />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="main-card">
                  <div className="cards-main-div-1">
                    <img
                      src="https://www.flyrobo.in/image/cache/wp/gj/eye-sensor/infrared-eye-blink-sensor-with-goggles-70x70w.webp"
                      alt="img"
                    />
                  </div>
                  <div className="cards-main-div-2">
                    <div className="text-title">
                      <h6> Infrared Eye Blink Sensor with Goggles</h6>
                    </div>
                    <div className="price-title">
                      <span>₹249</span>
                      <del>₹900</del>
                    </div>
                    <div className="stars-in">
                      <div className="start-2-in ">
                        {[...Array(5)].map((_, i) => (
                          <IoIosStarOutline key={i} />
                        ))}
                      </div>
                    </div>
                    <div className="icon-title">
                      <span>
                        {" "}
                        <GiShoppingCart size={20} />{" "}
                      </span>
                      <span>
                        <IoIosHeartEmpty color="black" size={20} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description section */}

        <div className="descraption-box">
          <ul>
            <li>DSCRIPTION</li>
            <li>SPECIFICATIONS</li>
            <li>FAQ</li>
            <li>REVIEWS</li>
          </ul>
        </div>
        <div className="under-line-description"></div>
        <div className="content-details">
          <div className="content-write">
            <p>
              {" "}
              The 1030 3V Flat Mobile Phone Vibration Motor is a compact and
              efficient vibration motor commonly used in mobile devices. With
              its 10mm diameter and 3mm thickness, it is ideal for applications
              where space is limited. It operates on a 3V DC input, providing
              reliable and consistent vibration feedback. The motor is designed
              for low power consumption, ensuring longer battery life in
              portable devices. Its flat, lightweight design makes it easy to
              integrate into slim gadgets. Perfect for phones, wearable devices,
              and other portable electronics requiring tactile feedback.
            </p>
          </div>
          <div className="Features-detials">
            <div className="features-list">
              <h4>Features:</h4>
              <ul>
                <li>Style：1030</li>
                <li>Operates at 3V</li>
                <li>Low Power Consumption</li>
                <li>High Vibration Intensity</li>
                <li>Flat and Lightweight Design</li>
                <li>Quiet Operation</li>
                <li>Fast Response Time</li>
              </ul>
            </div>
          </div>
          <div className="packing-include-details">
            <h4>Package Includes:</h4>
            <ul>
              <li>1 x 1030 3v Flat Mobile Phone Vibration Motor</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
            </>
        )
    }
}