// this cart only passing data
import React, { Component } from "react";
import { GoArrowRight } from "react-icons/go";
import { Bs1SquareFill } from "react-icons/bs";
import { BsChatDotsFill } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "../styles/blog/BlogList.css";
import { Link } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        {/* --mistake by imageBox so change it-- */}
        <div className="S_imageBox">

          <div className="imgstiker">
            <p style={{color:"white"}}><b style={{marginLeft:"4px"}}>01</b> Nov</p>
          </div>

          <img src={this.props.src} className="S_cardImage" />
          
          <div id="imgtext">
            <FaUser />
            khatan
            <BsChatDotsFill style={{ margin: "0.2rem", fontSize: "1rem" }} />0
            <FaRegEye style={{ margin: "0.1rem", fontSize: "1rem" }} />
            2660
          </div>
        </div>
        {/* <br/> */}
        <div className="S_card-content">
          <div style={{ color:"red"}} >
          <p className="S_cardtitle">{this.props.name}</p>
          </div>
          <p className="S_cardIntro">Introduction: {this.props.Introduction}</p>
        </div>

        <Link to="/pages/blog/BlogDetails">
            <p>
             <span className="readmore">ReadMore <GoArrowRight  /></span> 
            </p>
        </Link>
      </div>
    );
  }
}

export default Card;
