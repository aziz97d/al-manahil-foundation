import React from 'react'
import './FeatureCausesItem.scss'
function FeatureCausesItem(props) {
    const {image,title, description, raised, goal}  = props.data;
    return (
        <div className="carousel-item">
            <img src={image} />
            <div className="details">
                <h6>Feature Causes</h6>
                <h4 className="title">{title}</h4>
                <p className="brandDescriptionTwo">{description}</p>
                <div><p>Raised : {raised}</p> <p>Goals : {goal}</p></div>
            </div>
        </div>
    )
}

export default FeatureCausesItem
