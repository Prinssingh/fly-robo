
import React from 'react'
import { PiCarProfileFill } from "react-icons/pi";
import { FcUpLeft } from "react-icons/fc";
import { GrShieldSecurity } from "react-icons/gr";
import { FcOnlineSupport } from "react-icons/fc";
import "../../styles/home/FlyRoboInformatio.css"
// import "../../mainStyle/Style.css"
const FlyRoboInformation = () => {
  return (
    <>
   
       {/* <div className='DisContainer'>
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
      </div> */}
       <div className="grid-rows">
       <div className="grid-row grid-row-top-2  "style={{position:"relative",top:"10px",borderBottom:"none"}}>
            <div className="grid-cols">
              <div className="grid-col grid-col-top-2-1">
                <div className="grid-items">
                  <div className="grid-item grid-item-top-2-1-1">
                    <div className="module module-info_blocks module-info_blocks-355">
                      <div className="module-body">
                        <div className="module-item module-item-1 info-blocks info-blocks-icon">
                          <div className="info-block">
                            <div className="info-block-content">
                              <div className="info-block-title">
                                <h1>
                                  <span style={{ fontSize: 28 }}>
                                    FlyRobo: The One-stop Destination for Robotics
                                    and Electronics
                                  </span>
                                </h1>
                              </div>
                              <div className="info-block-text" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-row grid-row-top-3">
            <div className="grid-cols">
              <div className="grid-col grid-col-top-3-1">
                <div className="grid-items">
                  <div className="grid-item grid-item-top-3-1-1">
                    <div className="module module-info_blocks module-info_blocks-296">
                      <div className="module-body">
                        <div className="module-item module-item-1 info-blocks info-blocks-icon">
                          <div className="info-block">
                            <div className="info-block-content">
                              <div className="info-block-title">
                                Free Shipping
                              </div>
                              <div className="info-block-text">
                                Free delivery over ₹499
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="module-item module-item-2 info-blocks info-blocks-icon">
                          <div className="info-block">
                            <div className="info-block-content">
                              <div className="info-block-title">Free Returns</div>
                              <div className="info-block-text">
                                Replacement / Refund
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="module-item module-item-3 info-blocks info-blocks-icon">
                          <div className="info-block">
                            <div className="info-block-content">
                              <div className="info-block-title">
                                Secure Shopping
                              </div>
                              <div className="info-block-text">
                                Best security features
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="module-item module-item-4 info-blocks info-blocks-icon">
                          <div className="info-block">
                            <div className="info-block-content">
                              <div className="info-block-title">
                                Technical Support
                              </div>
                              <div className="info-block-text">
                                Ask us if you need help
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
    </>
  )
}

export default FlyRoboInformation
