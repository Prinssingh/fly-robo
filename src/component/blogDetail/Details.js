import React,{Component} from "react";
import Coments from "./Coments";
import '../styles/blog/BlogDetail.css';
import SearchBlog from "../searchBlog/SearchBlog";
class Details extends Component {
    state = {  } 
    render() { 
        return (
            <div className="d-flex justify-content-between">
            <div className="Details-boxx"style={{ maxWidth:"auto",maxHeight:"aoto",justifyContent:"center",alignItems:"center",margin:"0 auto"}}>
                
                 {/* <div className=""style={{fontSize:'30px',fontWeight:'750'}}>
                    Building a DIY Angle Measurement Device with Arduino and MPU6050
                </div> */}
                <hr style={{width:"100%"}} />
            <div className="Detailss">
               
                <div className="image">
                    <img src=" https://www.flyrobo.in/image/cache/wp/gj/blog/Building%20a%20DIY%20Angle%20Measurement%20Device%20with%20Arduino%20and%20MPU6050/Building%20a%20DIY%20Angle%20Measurement%20Device%20with%20Arduino%20and%20MPU6050-1060x400h.webp"/>
                </div>
               <div className="">
                    <span style={{fontSize:'20px',fontWeight:'700'}}>Introduction :</span>
                    <p>In the world of do-it-yourself electronics, building your own gadgets may be a fulfilling
                     and instructive endeavor. Using an Arduino microcontroller, the MPU6050 gyroscope, and an 
                     accelerometer sensor, we'll walk you through the process of making a DIY angle measurement 
                     device in this article. In addition to being entertaining, this project offers opportunities
                      for motion tracking, robotics, and other applications.</p>
               </div>
               <div className="Dic">
                    <h2 style={{fontSize:'20px',fontWeight:'700'}}>Materials Required:</h2>
                   <ol>
                        <li>Arduino Board (e.g., Arduino Uno)</li>
                        <li>MPU6050 Gyroscope and Accelerometer module</li>
                        <li>LiquidCrystal_I2C Display</li>
                        <li>Jumper wires</li>
                   </ol>
                   <h2 style={{fontSize:'20px',fontWeight:'700'}}>Step 1: Gather Your Components </h2>
                   <p>Make sure you have all the required components mentioned above. Familiarize yourself
                     with the pin configurations of the MPU6050 and the LiquidCrystal_I2C display.</p>
                    <h3>Step 2: Install Required Libraries</h3>
                    <p>Open your Arduino IDE and install the necessary libraries. Go to "Sketch" -
                    "Include Library" - "Manage Libraries" and search for "MPU6050" and "LiquidCrystal_I2C."
                     Install these libraries to ensure your code runs smoothly.</p>
                     
                          
                    <h2 style={{fontSize:'20px',fontWeight:'700'}}>Conclusion:</h2>
                    <p>Well done! You've successfully used Arduino and the MPU6050 sensor to build a DIY angle measuring device.
                         This study lays the groundwork for investigating more intricate motion detection and control
                          applications. Please feel free to modify this configuration for your larger projects or to experiment
                           with other sensors and display options. Have fun experimenting!</p>
                          
                     <div className="otherProduct ">
                    
                    </div>
                </div>
                </div>
                
 {/* ----calling cimment.js here--- */}
                <div className="comnts-call">
                    <Coments/>
                </div>
  {/* ----calling searchBlog.js here---  */}
                
                <div className=" DetailSearch">
                    <SearchBlog />
                </div>
            </div>
            
        </div>
        );
    }
}
 
export default Details;