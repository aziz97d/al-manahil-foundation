import React from 'react'
import { Link } from 'react-router-dom'
import './ConnectUs.scss'

import { connectUsData } from './connectUsData';
import ConnectUsItem from '../ConnectUsItem/ConnectUsItem';

function ConnectUs() {

    return (
        <div className="connect-us nav-container">
            <div className="top">
                {
                    connectUsData.map(data => <ConnectUsItem data={data}></ConnectUsItem>)
                }
            </div>
            <div className="bottom">
                <div className="fund">
                    <h5>We are CharityPress Funding Network Worldwide.</h5>
                    <p>We care for children, protect their welfare, and prepare them for the future are the most important issues we face during our lifetime.</p>
                    <Link className="brand-btn">View Details</Link>
                </div>
                <div className="our-causes">
                    <div className="cause">
                        <img src="http://html.kodesolution.live/html/nonprofit/charity/charitypress-html/v3.1/demo/images/photos/2.jpg" />
                        <h5>Adopt With Us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsa ullam dicta suscipit ipsum porro molestias cum nihil quasi culpa.</p>
                        <Link>Read more &#187;</Link>
                    </div>
                    <div className="cause">
                        <img src="http://html.kodesolution.live/html/nonprofit/charity/charitypress-html/v3.1/demo/images/photos/2.jpg" />
                        <h5 className="title">Adopt With Us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsa ullam dicta suscipit ipsum porro molestias cum nihil quasi culpa.</p>
                        <Link>Read more &#187;</Link>
                    </div>
                    <div className="cause">
                        <img src="http://html.kodesolution.live/html/nonprofit/charity/charitypress-html/v3.1/demo/images/photos/2.jpg" />
                        <h5>Adopt With Us</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsa ullam dicta suscipit ipsum porro molestias cum nihil quasi culpa.</p>
                        <Link>Read more &#187;</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectUs
