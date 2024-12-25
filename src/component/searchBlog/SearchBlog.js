import React, { Component } from "react";
import Card from "../blogList/Card";
import "../styles/blog/Search.css";
import Slider from "react-slick";
import { IoSearchSharp } from "react-icons/io5";
import SearchSlide from "./SearchSlide";
import PaginationApp from "../Pagination/PaginationApp";
class SearchBlog extends Component {
<<<<<<< shubhashni
    list() {
        const Products = [
            {
              name: "Building a DIY Angle Measurement Device with Arduino and MPU6050",
              Introduction: "In the world of do-it-yourself electronics, building your own gadgets may be a fulfil..",
              src: "https://www.flyrobo.in/image/cache/wp/gj/blog/Building%20a%20DIY%20Angle%20Measurement%20Device%20with%20Arduino%20and%20MPU6050/Building%20a%20DIY%20Angle%20Measurement%20Device%20with%20Arduino%20and%20MPU6050-1060x400h.webp"
            }
        ]
       return Products;
    }       
    render() { 
        const Products = this.list();
        return (
            <div className="Container2" >
                <div id="Search">
                   <input type="text" placeholder="Search Here. . . ." />
                   <button className="BtnIcon" ><IoSearchSharp /></button>            
                </div>
                <div className="latest">
                    <button>Latest Posts</button>                
                </div>    
                <br/>
                <br/>            
                <div className="mostRead">
                    <button className="most">MostRead</button>
                </div>
                
                <div id="blog">
                    {Products.map((Product) => (
                    <Card
                    name={Product.name}
                    Introduction={Product.Introduction}
                    src={Product.src}
                    
                    />                
                  ))}
                </div>
=======
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
        <div id="SearchB1">
          <input
            className="searchInput"
            type="text"
            placeholder="Blog Search. . . ."
          />

          <div id="searchBtn">
            <p style={{ marginLeft: "1.6%" }}>
              <IoSearchSharp />
            </p>
          </div>
        </div>

        <div id="SearchB2">
          <div className="letestBlog">
            {/* <button
              type="button"
              class="btn btn-secondary"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Tooltip on bottom"
            >
              Tooltip on bottom
            </button> */}
>>>>>>> local
            
            {/* <div class="tooltip-container">
        <button class="tooltip-button">Hover me</button>
        <span class="tooltip-text">This is a tooltip!</span>
    </div> */}
    


    <br/><br/><br/><br/><br/>
            <div className="R-M">MOST READ</div>
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
      </div>
    );
  }
}

export default SearchBlog;
