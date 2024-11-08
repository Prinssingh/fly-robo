
import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import "../../styles/home/testemonial.css"


const Testemonial = () => {
  return (
    <>
        <div className='main-container'>
      <div className='d-flex justify-content-center'>
      <div className='mt-5'>
      <h5 className='headertext fw-bold'>What are people saying about us</h5>
      <div className="d-flex justify-content-center mt-3"><div className="line-div"></div></div>
      </div>
      </div>
      <div className='main-box-container'>
      <div className='box-container'>

<div className="box1">
  <div className='d-flex justify-content-center mt-2'>
    <FaQuoteLeft size={45} color='orange'/>
  </div>
  <div className='text'>
    <p className='text-center d-flex justify-content-center'>
    I've purchased so many Robotics part in last few months. 
     But there is nothing close to their Product Quality and 
      Technical support.  Very happy with the product! Thank you!</p>
  </div>
  <div className='namediv'><h3 className="name">Himanshu Ku.</h3></div>
</div>

<div className="box1">
<div className='d-flex justify-content-center mt-2'>
    <FaQuoteLeft size={45} color='orange'/>
  </div>
  <div className='text'>
    <p className='text-center d-flex justify-content-center'>
   

I received my order in just 1 day. Very happy with the shipping and product quality as well.</p>
  </div>
  <div className='namediv'><h3 className="name">Aman Singh</h3></div>
</div>
<div className="box1">
<div className='d-flex justify-content-center mt-2'>
    <FaQuoteLeft size={45} color='orange'/>
  </div>
  <div className='text'>
    <p className='text-center d-flex justify-content-center'>
   

I bought a drone kit which was almost at double price on other websites. Thank you FlyRobo.</p>
  </div>
  <div className='namediv'><h3 className="name">Shubhasini Ku.</h3></div>
</div>
</div>
      </div>
    </div>
    </>
  )
}

export default Testemonial
