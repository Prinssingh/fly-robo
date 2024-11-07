
import React from 'react'
import "../../styles/home/LineItem.css"

const LineItems = () => {
    const list =[
        "Flysky","Drone kit","Drone combo","Bearing Slider","Brushless Moter",
        "Pulley","Sensors & Module","Miscellaneous","drone kit","Arduino Kit","Flight controller","drone","Battery and charger","Flysky"
    ]
  return (
    <>
    <div className="containe">
      <div className="contain">
  <div className="list">
    <span className=" Quick mx-2">Quick|inks</span>
    {list.map((item,index)=>{
        return(<>
                <li className='litag' key={index}>{item}</li>
        </>)
    })}
   
  </div>
</div>
</div>
    </>
  )
}

export default LineItems
