import React, { Component } from "react";
import Card from "../blogList/Card";
import "../styles/blog/Search.css";
import { FaSearch } from 'react-icons/fa'
import SearchSlide from "./SearchSlide";
import PaginationApp from "../Pagination/PaginationApp";
class SearchBlog extends Component {
  list() {
    const Products = [
      {
        name: "Building a DIY Angle Measurement Device with Arduino and MPU6050",
        Introduction:
          "In the world of do-it-yourself electronics, building your own gadgets may be a fulfil..",
        src: "https://www.flyrobo.in/image/cache/wp/gj/blog/Building%20a%20DIY%20Angle%20Measurement%20Device%20with%20Arduino%20and%20MPU6050/Building%20a%20DIY%20Angle%20Measurement%20Device%20with%20Arduino%20and%20MPU6050-1060x400h.webp",
      },
    ];
    return Products;
  }
  render() {
    const Products = this.list();
    return (
      <div className="Container2">
          <div id="S_Search1">
            
            <br/>

            <div className="d-flex " style={{width:"150%"}}>
              <input
                type="text"
                placeholder="Blog Search. . . ."
                className="S_SearchInput  pl-10 pr-4 py-2  "
                // style={{border:"solid 2px gray",borderRadius:"3px",width:"13rem",paddingLeft:"5px "}}
              />

              {/* --------Search Icon--------- */}
              <div className="absolute inset-y-0 right-0 pl-3 flex items-center "
              style={{backgroundColor:"blue",width:"15%",textAlign:"center",paddingTop:"3px",fontSize:"20px",cursor:"pointer",borderRadius:"3px"}}>
                <FaSearch className="h-5 w-5 text-gray-400 "  />
                {/* <FaSearch /> */}
              </div>
            </div>
          </div>

            <div className="S_RM">
              Read Most
            </div>
        
          <div className="B2List">
            {Products.map((Product) => (
              <Card
                name={Product.name}
                Introduction={Product.Introduction}
                src={Product.src}
              />
            ))}

            {/* ----- react-slick---- */}
            <div className="react-slick">
              
            {/* <PaginationApp/>             */}
             
            </div>
          </div>
        </div>
     
    );
  }
}

export default SearchBlog;
