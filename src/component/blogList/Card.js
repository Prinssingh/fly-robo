// this cart only passing data 
import React,{Component} from "react";
import { GoArrowRight } from "react-icons/go";
import { Bs1SquareFill } from "react-icons/bs";
import { BsChatDotsFill } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import '../styles/blog/BlogList.css';
import { Link } from "react-router-dom";
// import { Link } from "lucide-react";
class Card extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return (
            
              <div className="card"> 
                  <div className="card-image">
                    <div className="str">
                    <Bs1SquareFill className="stiker"/>
                    {/* <p>Nov</p> */}
                    </div>
                  <img src={this.props.src}  className="cardImage"/>
                  <div id="text">
                    <FaUser />
                   khatan
                    <BsChatDotsFill style={{margin:'0.2rem',fontSize:'1rem'}} />0
                    <FaRegEye style={{margin:'0.2rem',fontSize:'1rem'}}/>2660
                  </div>
                 
                </div>
                {/* <br/> */}
              <div className="card-content">
                <p className="card-title">{this.props.name}</p>
                <p className="card-Intro">{this.props.Introduction}</p>

              </div>
              <div className="">
                
                <span className=" more">
                
                <Link to='/Details'className="l">ReadMore<GoArrowRight /></Link>
            
                </span>
              </div>
                      
          </div>

        );
    }
}
 
export default Card;