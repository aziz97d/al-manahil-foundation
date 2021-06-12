import React from 'react'
import './FeatureCausesItem.scss'
function FeatureCausesItem(props) {
    const {image,title, description, raised, goal}  = props.data;
    return (
        <div className="carousel-item">
            <img src={image} />
            <div className="details">
                <h6>Feature Causes</h6>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default FeatureCausesItem
