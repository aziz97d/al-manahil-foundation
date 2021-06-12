import React from 'react'
import { Link } from 'react-router-dom'
import { carouselData } from './CarouselData'
import './FeatureCauses.scss'
import Slider from "react-slick";
import FeatureCausesItem from '../FeatureCausesItem/FeatureCausesItem';

function FeatureCauses() {
    const settings = {
        dots: false,
        fade: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        className: "slides"
    }

    return (
        <div className="feature-cause">
            <div className="volunteer">
                <h5>
                    Become a
                    Volunteer?
                </h5>
                <p className="brandDescriptionOne">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem temporibus quisquam voluptas natus, provident porro et odio perferendis ipsam, amet sint</p>
                <Link className="brand-btn">Sign Up Today!</Link>
            </div>
            <div className="causes">
                <Slider {...settings}>
                    {
                        carouselData.map(data => <FeatureCausesItem data={data}></FeatureCausesItem>)
                    }
                </Slider>

            </div>
        </div>
    )
}

export default FeatureCauses
