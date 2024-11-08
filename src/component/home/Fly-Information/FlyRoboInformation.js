
import React from 'react'
import { PiCarProfileFill } from "react-icons/pi";
import { FcUpLeft } from "react-icons/fc";
import { GrShieldSecurity } from "react-icons/gr";
import { FcOnlineSupport } from "react-icons/fc";
import "../../styles/home/FlyRoboInformatio.css"

const FlyRoboInformation = () => {
  return (
    <>
   
       <div className='DisContainer'>
        <div className="boxdiv">
        <div className='secound-div '>
        <h1 className='font-weight-bold mt-1'>FlyRobo: The One-stop Destination for Robotics and Electronics</h1>
        </div>
        </div>
        <div className='third-Div'>
            <div className='third-Under-div'>
            <div className='icons1'>
                <div className='icon'>
                    <PiCarProfileFill size={40} color='orange' className='mt-2'/>
                </div>
                <div className='text-white mt-4 ms-3'>
                    <h5 > Free Shopping</h5>
                    <p className='h6 text-secondary'>Free Delevery over Rs.499</p>
                </div>

            </div>
            <div className='icons2'>
            <div className='icon'>
                    <FcUpLeft size={40} color='yellow' className='mt-2 '/>

                </div>
                <div className='text-white mt-4 ms-3'>
                    <h5 > Free Returns</h5>
                    <p className='h6 text-secondary'>Replacement / Refund</p>
                </div>
            </div>
            <div className='icons3'>
            <div className='icon'>
                    <GrShieldSecurity size={40} color='orange' className='mt-2'/>
                </div>
                <div className='text-white mt-4 ms-3'>
                    <h5 > Secure Shopping</h5>
                    <p className='h6 text-secondary'>Best security features</p>
                </div>
            </div>
            <div className='icons4'>
            <div className='icon'>
                    <FcOnlineSupport size={40} color='orange' className='mt-2'/>
                </div>
                <div className='text-white mt-4 ms-3'>
                    <h5 > Technical Support</h5>
                    <p className='h6 text-secondary'>Ask us if you need help</p>
                </div>
            </div>

        </div>
        </div>
      </div>
    </>
  )
}

export default FlyRoboInformation
