import React,{Component} from "react";
import Card from "./Card";
// import ListSlider from "./ListSlider";
class CardList extends Component {
    list() {
        const Products = [
            {
                name:"Understanding Soil Moisture Sensors: Capacitive Soil Moisture Sensor V2.0 vs. FC-28 ",
                Introduction:"For gardeners and enthusiasts, soil moisture sensors are indispensable instruments.. ",
                src:"https://www.flyrobo.in/image/cache/wp/gj/blog/Understanding-Soil-Moisture-Sensors-Capacitive-Soil-Moisture-Se,nsor-V2-0-vs-FC-28/Understanding-Soil-Moisture-Sensors-Capacitive-Soil-Moisture-Se,nsor-V2-0-vs-FC-283-1060x400h.webp ", 
            },
            {
                name:"Exploring the iMAX B6-AC: Your Guide to a Reliable RC Battery Charger ",
                Introduction:"If you're a serious fan of remote control (RC), you understand how crucial a trustworthy battery c.. ",
                src:"https://www.flyrobo.in/image/cache/wp/gj/blog/Exploring-the-iMAX-B6-AC-Your-Guide-to-a-Reliable-RC-Battery-Charger/Exploring-the-iMAX-B6-AC-Your-Guide-to-a-Reliable-RC-Battery-Charger1-1060x400h.webp ", 
            }
            ,
            {
                name:"DIY WiFi-Controlled Car Project Using Blynk and ESP8266 NodeMCU ",
                Introduction:"We're going to go on an exciting adventure to build our very own WiFi-controlled car .. ",
                src:"https://www.flyrobo.in/image/cache/wp/gj/blog/DIY-WiFi-Controlled-Car-Project-Using-Blynk-and-ESP8266-NodeMCU/DIY-WiFi-Controlled-Car-Project-Using-Blynk-and-ESP8266-NodeMCU1-1060x400h.webp ",
            },
            {
                
                name:"Building a Temperature-Controlled Fan System with Arduino",
                Introduction:" Using an Arduino, a DHT11 temperature sensor, a 5V fan, a potentiometer, and.. ",
                src:"https://www.flyrobo.in/image/cache/wp/gj/blog/Building-a-Temperature-Controlled-Fan-System-with-Arduino/Building-a-Temperature-Controlled-Fan-System-with-Arduino-1060x400h.webp",

            }
            ,
            {
                name:"Exploring the DJI Naza-M Lite V1.1 with GPS Kit ",
                Introduction:"Looking for a dependable flight controller for your drone hobby? The DJI Naza-M Lite V1.1 with GPS K.. ",
                src:"https://www.flyrobo.in/image/cache/wp/gj/blog/Exploring-the-DJI-Naza-M-Lite-V1-1-with-GPS-Kit/Exploring-the-DJI-Naza-M-Lite-V1-1-with-GPS-Kit-1060x400h.webp ", 
            },
            {
                name: "Building a DIY Angle Measurement Device with Arduino and MPU6050",
                Introduction: "In the world of do-it-yourself electronics, building your own gadgets may be a fulfil..",
                src: "https://www.flyrobo.in/image/cache/wp/gj/blog/Building%20a%20DIY%20Angle%20Measurement%20Device%20with%20Arduino%20and%20MPU6050/Building%20a%20DIY%20Angle%20Measurement%20Device%20with%20Arduino%20and%20MPU6050-1060x400h.webp"
              }
            ,
            {
                name:"Exploring the Cellmeter 8: Your Guide to a Multi-Functional Digital Power Servo Tester ",
                Introduction:"If you have any interest in electronics or remote-controlled cars, you have undoubtedly heard the te.. ",
                src:"https://www.flyrobo.in/image/cache/wp/gj/blog/Exploring-the-Cellmeter-8-Your-Guide-to-a-Multi-Functional-Digital-Power-Servo-Tester/Exploring-the-Cellmeter-8-Your-Guide-to-a-Multi-Functional-Digital-Power-Servo-Tester1-1060x400h.webp ", 
            },
            {
                name:"Exploring the TC-T7-H Full-Color, Multifunction Tester: A Quick Guide ",
                Introduction:"A valuable tool for anyone interested in electronics and circuit testing, the TC-T7-H Full-Color, Mu.. ",
                src:"https://www.flyrobo.in/image/cache/wp/gj/blog/Exploring-the-TC-T7-H-Full-Color-Multifunction-Tester-A-Quick-Guide/Exploring-the-TC-T7-H-Full-Color-Multifunction-Tester-A-Quick-Guide1-1060x400h.webp ", 
            },
            {
                name:"DIY Fingerprint Door Lock with Arduino ",
                Introduction:"There has never been a more important time to secure your house or place of business .. ",
                src:"https://www.flyrobo.in/image/cache/wp/gj/blog/DIY-Fingerprint-Door-Lock-with-Arduino/DIY-Fingerprint-Door-Lock-with-Arduino1-1060x400h.webp ", 
            },
            {
                name:"Exploring the World of RC: A Guide to 2CH RC Remote Control Set so you can make RC Car at Home ",
                Introduction:"Hobbyists and enthusiasts have always been captivated by remote-controlled (RC).. ",
                src:"https://www.flyrobo.in/image/cache/wp/gj/blog/Exploring-the-World-of-RC-A-Guide-to-2CH-RC-RemoteControl-Set-so-you-can-make-RC-Car-at-Home/Exploring-the-World-of-RC-A-Guide-to-2CH-RC-RemoteControl-Set-so-you-can-make-RC-Car-at-Home1-1060x400h.webp ", 
            },
            // {
            //     name:" ",
            //     Introduction:" ",
            //     src:" ", 
            // },   
        ]
        return Products;
    } 
    render() { 
        const Products = this.list();
        return (
            <div className="container-fluid">
                 
            <div className="card-container" >
              {Products.map((Product) => (
                <Card
                 name={Product.name}
                 Introduction={Product.Introduction}
                  src={Product.src}
                  
                />   
                             
              ))} 
               
            </div>
            <div id="Slid-Box">
                {/* <div id="Sliderr">
                     <ListSlider/>
                </div> */}

                
            </div>
            
          </div>
        );
    }
}
 
export default CardList;