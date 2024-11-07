
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
       <div className="curoseldiv" onClick={OpenLink}>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
            // loading="lazy"
              className=" img d-block w-100"
              src="https://www.flyrobo.in/image/cache/wp/gj/Banner/3d-printer-and-cnc-960x450w.webp"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            // loading="lazy"
              className="img d-block w-100"
              src="https://www.flyrobo.in/image/cache/wp/gp/Banner/arduino-slider-960x450w.webp"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div> 
    </>
  )
}

export default Curosel
