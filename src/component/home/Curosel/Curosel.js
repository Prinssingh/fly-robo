
import React from 'react'
import "../../styles/home/Curosal.css"
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./IndividualIntervalsEx.css";
import { useNavigate } from "react-router-dom";


const Curosel = () => {
    const Navigate = useNavigate();
    const OpenLink =()=>{
      Navigate("/")
    }
  return (
    <>
 <div className="d-flex g-3 mainContainer" onClick={OpenLink}>
  <div className="curoseldiv" >
        <Carousel data-bs-theme="dark" className="flex-image">
          <Carousel.Item>
            <img
            // loading="lazy"
              className=" img "
              src="https://www.flyrobo.in/image/cache/wp/gj/Banner/3d-printer-and-cnc-960x450w.webp"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            // loading="lazy"
              className="img "
              src="https://www.flyrobo.in/image/cache/wp/gp/Banner/arduino-slider-960x450w.webp"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div> 


      <div className="rightCarousel">
        <div  className="main">
          <div className="secdiv">
            <img
              className="img1"
              src="https://www.flyrobo.in/image/cache/wp/gj/Banner/Untitled-design2-320x210h.webp"
              alt="img"
            />
          </div>
          <div className="text-on-image ">
            <h2 className="">
              <span className="textHeader text-primary">RC REMOTE</span>
              <br />

              <p className="textComponent">
                Long
                <br />
                Range Like
                <br />
                Your Version
                <br />
              </p>
            </h2>
          </div>
        </div>

        <div  className="main">
          <div className="secdiv">
            <img
              className="img1"
              src="https://www.flyrobo.in/image/cache/wp/gj/Banner/Untitled-design-320x210h.webp"
              alt="img"
            />
          </div>
          <div className="text-on-image1">
            <h2 className="">
              <span className=" textHeader text-primary">QUADCOPTER</span>
              <br />
              <p className="textComponent">
                Build Your
                <br />
                own high
                <br />
                Powered
                <br />
                Drone
              </p>
            </h2>
          </div>
        </div>
      </div>
  </div>






       {/* <div className="curoseldiv" >
        <Carousel data-bs-theme="dark" className="flex-image">
          <Carousel.Item>
            <img
              className=" img d-block w-100"
              src="https://www.flyrobo.in/image/cache/wp/gj/Banner/3d-printer-and-cnc-960x450w.webp"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="img d-block w-100"
              src="https://www.flyrobo.in/image/cache/wp/gp/Banner/arduino-slider-960x450w.webp"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>  */}
    </>
  )
}

export default Curosel
