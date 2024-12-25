import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const ListSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, //It's for Meedeam screen 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, //It's for small screen
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    // { id: 1, content: "Slide 1", image: "https://via.placeholder.com/300" },
    // { id: 2, content: "Slide 2", image: "https://via.placeholder.com/300" },
    // { id: 3, content: "Slide 3", image: "https://via.placeholder.com/300" },
    // { id: 4, content: "Slide 4", image: "https://via.placeholder.com/300" },
    // { id: 5, content: "Slide 5", image: "https://via.placeholder.com/300" },
    // { id: 1, content: "Slide 1", image: "https://via.placeholder.com/300" },
    // { id: 2, content: "Slide 2", image: "https://via.placeholder.com/300" },
    // { id: 3, content: "Slide 3", image: "https://via.placeholder.com/300" },
    // { id: 4, content: "Slide 4", image: "https://via.placeholder.com/300" },
    // { id: 5, content: "Slide 5", image: "https://via.placeholder.com/300" },
    { id: 1, content: "1" },
    { id: 2, content: "2" },
    { id: 3, content: "3" },
    { id: 4, content: "4" },
    { id: 5, content: "5" },
    { id: 1, content: "6" },
    { id: 2, content: "7" },
    { id: 3, content: "8" },
    { id: 4, content: "9" },
    { id: 10,content: "10" },
    { id: 1, content: "11" },
    { id: 2, content: "12" },
    { id: 3, content: "13" },
    { id: 4, content: "14" },
    { id: 5, content: "15" },
    { id: 1, content: "16" },
    { id: 2, content: "17" },
    { id: 3, content: "18" },
    { id: 4, content: "19" },
    { id: 10, content: "20" },
     { id: 10, content: "20" },
  ];
  return (
    <div style={{ marginLeft: "40px", color: "black", }}>
      {/* <h2>Google-Style Slider</h2> */}
      <Slider {...settings}>
        {slides.map((slide) => (
          <button className="sider-btn"style={{color:"black"}}>
            <div key={slide.id}>
              {/* <img
                  src={slide.image}
                  alt={slide.content}
                  style={{ width: "100%", borderRadius: "10px" }}
                /> */}

              <p style={{ textAlign: "center", marginTop: "10px" }}>
                {slide.content}
              </p>
            </div>
          </button>
        ))}
      </Slider>
    </div>
  );
};
export default ListSlider;
