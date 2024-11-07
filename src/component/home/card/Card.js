import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineZoomIn } from "react-icons/ai";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import "../../styles/home/card.css";

const Card = (props) => {
  const Navigate = useNavigate();
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true
  // };  

  return (
    <>
      <div>
        <div className="mainHeader">
          {props.item.map((item) => {
            return <h3>{item.cadegaryName}</h3>;
          })}
          {/* <h3>Featured</h3> */}
          <div className="line"></div>
        </div>
        <div className="Border-Box">
        {/* <Slider {...settings}> */}
          {props.item.map((items, index) => {
            return (
              
                <div key={index} className="CardFetured">
                  <div className="image-Div">
                    <img
                      onClick={() => Navigate(`/productdetail`)}
                      src={items.image}
                      alt="img"
                    />
                  </div>

                  <span className="zoomicon">
                    <AiOutlineZoomIn
                      className="zoom-icon-in"
                      title="Quickview"
                      size={20}
                    />
                  </span>

                  {items.steacker > 0 ? (
                    <div className="steack">Ne</div>
                  ) : null}

                  <div className="mt-2 ms-2">
                    <h2 className=" Descreption h5 font-bold">{items.des}</h2>
                    <p className="mt-1 ms-1 h5   font-bold">₹{items.price}</p>
                  </div>
                </div>
             
            );
          })}
           {/* </Slider> */}
        </div>
      </div>
    </>
  );
};

export default Card;
