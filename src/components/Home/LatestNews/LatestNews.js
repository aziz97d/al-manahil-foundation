import React from 'react'
import './LatestNews.scss'

import { Link } from 'react-router-dom'
function LatestNews() {
    return (
        <div className="latest-news">
            <div className="heading">
                <div className="causes-title">
                    <p>What we can do?</p>
                    <h1>Latest News.</h1>
                </div>
                <div className="causes-description">
                    <p className="brandDescriptionTwo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus hic suscipit <br />  doloremque deleniti  ipsa quia dolor laborum natus tenetur, excepturi?</p>
                </div>
            </div>
            <div className="news-list">
                <div className="news-card">
                    <img src="http://html.kodesolution.live/html/nonprofit/charity/charitypress-html/v3.1/demo/images/project/1.jpg" alt="" />
                    <div className="details">
                        <h4>Sponsor a child</h4>
                        <p className="brandDescriptionTwo">Lorem ipsum dolor sit amet, consectetur adipisici elit. Illo, laudantium, accusantium impedit magnam nobis</p>
                        <div className="amount">
                            <p>Raised : $500</p>
                            <p>Goals : $700</p>
                        </div>
                        <Link className="brand-btn">Donate Now</Link>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestNews
