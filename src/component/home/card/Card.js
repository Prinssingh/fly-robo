import React from "react";

import { AiOutlineZoomIn } from "react-icons/ai";


import "../../styles/home/card.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { item } = props;
  const Navigate = useNavigate();
 

  return (
    <>
    

      <div className="MyCard rounded-md">
        <div className="content">
          <div className="imgBx">
            <img
              onClick={() => Navigate(`/productdetails`)}
              src={item.image}
              alt="img"
            />
          </div>
          <span className="zoomicon" 
          onClick={props.open}
          >
            <AiOutlineZoomIn
              className="zoom-icon-in"
              title="Quickview"
              size={24}
              color="white"
            />
          </span>

          {item.steacker > 0 ? <div className="steack">New</div> : null}

          <div class="contentBx">
            <p>{item.des}</p>
          </div>
          <ul class="Price_section">
            {item.price > 100 ? (
              <span className="mt-1  h5 font-bold"> ₹ {item.price}</span>
            ) : (
              <span className="span1 mt-1  h5 font-bold"> ₹ {item.price}</span>
            )}

            <del className="mt-1  ">{item.crossprice}</del>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Card;
