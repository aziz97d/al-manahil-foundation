import './Carousel.css'
import React, {useState} from 'react'
import { IoChevronForwardCircleOutline, IoChevronBackCircleOutline } from "react-icons/io5";
import { images } from './carouselData'

function Carousel() {
    
    const [currImage, setCurrImage] = useState(0)
    return (
        <div className="carousel">
            <div className="carouselInner" style={{backgroundImage:`url(${images[currImage].image})`}}>
                <div className="left">
                    <IoChevronBackCircleOutline onClick={()=> currImage>0 && setCurrImage(currImage-1)} className="arrow-icon"/>
                </div>
                <div className="center"></div>
                <div className="right">
                    <IoChevronForwardCircleOutline onClick={()=>currImage<2 && setCurrImage(currImage+1)} className="arrow-icon"/>
                </div>
            </div>
        </div>
    )
}

export default Carousel
