import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineZoomIn } from "react-icons/ai";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../styles/home/card.css";

const Card = ({item}) => {
  const Navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }; 

  return (
    <>
      {/* <div className="card-main-container">
        <div className="mainHeader">
          {item.map((item) => {
            return <h3>{item.cadegaryName}</h3>;
          })}
          <div className="line"></div>
        </div>

        <div className="Border-Box" >
         <Slider {...settings}>
              
         {item.map((items, index) => {
            return (
              
                <div key={index}  className="CardFetured">
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
                    <div className="steack">New</div>
                  ) : null}

                  <div className="mt-2 ms-2">
                    <h2 className=" Descreption h5 font-bold">{items.des}</h2>
                    <p className="mt-1 ms-1 h5   font-bold">₹{items.price}</p>
                  </div>
                </div>
             
              );
            })}
         </Slider>
          
        </div>
    
      </div> */}




      <div className="wraper-box">
      <div className="mainHeader">
          {item.map((item) => {
            return <h3>{item.cadegaryName}</h3>;
          })}
          <div className="line"></div>
        </div>
      <div class="container">
      <Slider {...settings}>
{item.map((items)=>{
  return (
    <>
       <div class="card">
				<div class="content">
					<div class="imgBx">
						<img
            onClick={() => Navigate(`/productdetail`)}
            src={items.image} alt="img"/>
					</div>
          
          {/* <span className="zoomicon">
                    <AiOutlineZoomIn
                      className="zoom-icon-in"
                      title="Quickview"
                      size={20}
                    /> */}

          {items.steacker > 0 ? (
                    <div className="steack">New</div>
                  ) : null}
					<div class="contentBx">
						<h3 className="Descreption mt-2"><span> {items.des} </span></h3>
					</div>
				</div>
				<ul class="sci">
          {items.price > 100 ?  <span className="mt-1  h5    font-bold"> ₹ {items.price}</span> 
          : <span className="span1 mt-1  h5   font-bold"> ₹ {items.price}</span>}
				
						
					
					
						<del className="mt-1  ">{items.crossprice}</del>
					
					
				</ul>
			</div>
    </>
  )
})}
         

      </Slider>
            </div>
			
		</div>
    </>
  );
};

export default Card;


