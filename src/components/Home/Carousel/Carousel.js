import './Carousel.css'
import React, { useEffect, useState } from 'react'
import { IoChevronForwardCircleOutline, IoChevronBackCircleOutline } from "react-icons/io5";
import { images } from './carouselData'

function Carousel() {

    const [currImage, setCurrImage] = useState(0)
    let carouselBackground = {
        backgroundImage: `url(${images[currImage].image})`
    }

    return (
        <div className="carousel">
            <div className="carouselInner" style={carouselBackground}>
                <div className="left">
                    <IoChevronBackCircleOutline onClick={() => currImage > 0 && setCurrImage(currImage - 1)} className="arrow-icon" />
                </div>
                <div className="center"></div>
                <div className="right">
                    <IoChevronForwardCircleOutline onClick={() => currImage < 2 && setCurrImage(currImage + 1)} className="arrow-icon" />
                </div>
            </div>
        </div>
    )
}

export default Carousel
