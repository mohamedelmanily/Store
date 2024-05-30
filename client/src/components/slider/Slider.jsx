import React, { useState } from "react";
import "./Slider.scss";
import img1 from "../../../public/imgs/pexels-olly-842811.jpg";
import img2 from "../../../public/imgs/pexels-rfera-432059.jpg";
import img3 from "../../../public/imgs/pexels-1000hk-1496647.jpg";
import { EastOutlined, WestOutlined } from "@mui/icons-material";

const Slider = () => {
    const data = [img1, img2, img3];
    const [currentSlide,setCurrentSlide]=useState(0);
    function previosSlide(){
        setCurrentSlide(currentSlide === 0 ? 2 :(prev)=>prev-1)
    }
    function nextSlide(){
        setCurrentSlide(currentSlide === 2 ? 0 :(prev)=>prev+1)

    }

    return (
        <div className="slider">
            <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            {data.map((img) => (
          <img key={img} src={img} />
        ))}
            </div>
            <div className="icons">
                <div className="icon" onClick={previosSlide}><WestOutlined /></div>
                <div className="icon" onClick={nextSlide}><EastOutlined /></div>
            </div>
        </div>
    );
};

export default Slider;
