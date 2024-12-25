
import React from "react";
// import { FaQuoteLeft } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import  "../../styles/home/testemonial.css"
const Testemonial = () => {
 
  const settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
               
     },
     {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
       
}  ,
{
  breakpoint: 1280 ,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 1,
    // infinite: true,
    // dots: true,
  },
   
}       
    ]
  };
 
  const testimonialData = [
    {
      des: "I' But there  their Product Quality and Technical support. Very happy with the product! Thank you! ",
      name: "Himanshu Ku",
    },
    {
      des: " I received my order in just 1 day. Very happy with the  shipping and product quality as well.",
      name: "Aman singh",
    },
    {
      des: "  I bought a drone kit which was almost at double price on other websites. Thank you FlyRobo.",
      name: "Shubhasini ku",
    },
  ];
  return (
    <>
      

<div className="main-container">
     <div className="flex_container">
     <div className="wraper_container">
      <div className="header-section">
        <h5 className="headertext">What are people saying about us?</h5>
        <div className="line-div"></div>
      </div>

      <div className="testimonial-container">
        <Slider {...settings}>
          {testimonialData.map((item, index) => (
            <div key={index} className="testimonial-box">
              <div className="icon-box-container">
               
                {/* Optional: Add an icon */}
                <span className="quote-icon"> <BiSolidQuoteAltLeft color="orange" size={65}/> </span>
              </div>
              <div className="testimonial-text">
                <p>{item.des}</p>
              </div>
              <div className="testimonial-name">
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </div>
     </div>
    </div>
    </>
  );
};

export default Testemonial;
