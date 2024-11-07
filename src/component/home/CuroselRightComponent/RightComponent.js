
import React from 'react'
import "../../styles/home/RightComponent.css"
import { useNavigate } from "react-router-dom";


const RightComponent = () => {
    const Navigate = useNavigate();
  const OpenLink =()=>{
    Navigate("/about")
  }
  const OpenLink2 =()=>{
    Navigate("/post")
  }
  return (
    <>
     <div className='rightCarousel'>
    
    <div onClick={OpenLink} className='main'>
    <div className='firsdiv'>
  <img loading="lazy" className='img1' src="https://www.flyrobo.in/image/cache/wp/gj/Banner/Untitled-design2-320x210h.webp" alt="img" />
    </div>
    <div className='text-on-image '>
    <h2 className="">
    <span className="textHeader text-primary">RC REMOTE</span><br />


    <p className='textComponent'>
    Long<br />
    Range Like<br />
    Your Version<br />
    </p>
</h2>
    </div>
    </div>
    
    <div onClick={OpenLink2} className="main1">
    <div className='secdiv'>
    <img  className='img1' src="https://www.flyrobo.in/image/cache/wp/gj/Banner/Untitled-design-320x210h.webp" alt="img" />
    </div>
    <div className='text-on-image1'>
    <h2 className="">
    <span className=" textHeader text-primary">QUADCOPTER</span><br />
    <p className='textComponent'>
    Build Your<br />
    own high<br />
    Powered<br />
    Drone
    </p>
</h2>
    </div>
    </div>
      
      </div>  
    </>
  )
}

export default RightComponent
