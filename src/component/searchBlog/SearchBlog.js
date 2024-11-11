import React,{Component} from "react";
import Card from "../blogList/Card";
import '../styles/blog/Search.css';
import { IoSearchSharp } from "react-icons/io5";
class SearchBlog extends Component {
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
                   <button ><IoSearchSharp /></button>
                   
                  
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
            
            
            </div>          
             
        );
    }
}
 
export default SearchBlog;