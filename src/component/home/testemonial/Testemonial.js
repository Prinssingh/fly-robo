
import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";


import  "../../styles/home/testemonial.css"
const Testemonial = () => {
 

  return (
    <>
      

      <div className="grid-row grid-row-bottom-2  mt-5" style={{display:"flex",justifyContent:"center"}}>
            <div className="grid-cols" style={{maxWidth:"100%"}}>
              <div className="grid-col grid-col-bottom-2-1">
                <div className="grid-items">
                  <div className="grid-item grid-item-bottom-2-1-1">
                    <div className="module title-module module-title-281">
                      <div className="title-wrapper mb-5" style={{display:"flex",justifyContent:"center",fontSize:"30px",fontWeight:"700"}}>
                        <h3>What are people saying about us</h3>
                        <div className="title-divider" />
                        <div className="subtitle" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-col grid-col-bottom-2-2">
                <div className="grid-items">
                  <div className="grid-item grid-item-bottom-2-2-1">
                    <div className="module module-testimonials module-testimonials-256 blocks-grid carousel-mode">
                      <div className="module-body">
                        <div
                          className="swiper"
                          data-items-per-row='{"c0":{"0":{"items":3,"spacing":20},"760":{"items":2,"spacing":20},"470":{"items":1,"spacing":20}},"c1":{"0":{"items":3,"spacing":20},"760":{"items":2,"spacing":20},"470":{"items":1,"spacing":20}},"c2":{"0":{"items":2,"spacing":20},"470":{"items":1,"spacing":20}},"sc":{"0":{"items":1,"spacing":10}}}'
                          data-options='{"speed":500,"autoplay":false,"pauseOnHover":true,"loop":false}'
                        >
                          <div className="swiper-container d-flex justify-center">
                            <div className="swiper-wrapper d-flex" style={{display:"flex"}}>
                              <div className="module-item module-item-1 swiper-slide">
                                <div className="block-body">
                                  <div className="block-header">
                                  <span className="icon-example" aria-hidden="true"> <BiSolidQuoteAltLeft color="orange" size={65}/></span>
                                  </div>
                                  <div className="block-content block-text mb-5">
                                    I've purchased so many 
                                    few months.  Technical support.
                                    Very happy with the product! Thank you!
                                  </div>
                                  <div className="block-footer">
                                    - Sachin pole
                                  </div>
                                </div>
                              </div>
                              <div className="module-item module-item-2 swiper-slide">
                                <div className="block-body">
                                  <div className="block-header">
                                  <span className="icon-example" aria-hidden="true"> <BiSolidQuoteAltLeft color="orange" size={65}/></span>
                                  </div>
                                  <div className="block-content block-text mb-5">
                                    I received my order in just 1 day. Very happy
                                    with the shipping and product quality as well.
                                  </div>
                                  <div className="block-footer">
                                    - Viraj Sinha
                                  </div>
                                </div>
                              </div>
                              <div className="module-item module-item-3 swiper-slide">
                                <div className="block-body">
                                  <div className="block-header">
                                  <span className="icon-example " aria-hidden="true"> <BiSolidQuoteAltLeft color="orange" size={65}/></span>
                                  </div>
                                  <div className="block-content block-text mb-5">
                                    I bought a drone kit which was almost at
                                    double price on other websites. Thank you
                                    FlyRobo.
                                  </div>
                                  <div className="block-footer">
                                    - Vimal Pandya
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="swiper-pagination" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
    </>
  );
};

export default Testemonial;
