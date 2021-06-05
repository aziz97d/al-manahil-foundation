import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import './Navbar.css'
import { IoMailOutline, IoLocationOutline, IoCallOutline } from "react-icons/io5";

function Navbar() {
    return (

        <div className="navbar">
            <div className="navbar-top nav-container" >
                <div className="nav-help">
                    <Link className="nav-item" to="/">FAQ</Link>
                    <Link className="nav-item" to="/">Help</Link>
                    <Link className="nav-item" to="/">Support</Link>
                </div>
                <div className="nav-social">
                    <Link className="nav-item social-icon" to="/"><AiFillFacebook /></Link>
                    <Link className="nav-item social-icon" to="/"><AiFillTwitterSquare /></Link>
                    <Link className="nav-item social-icon" to="/"><AiFillInstagram /></Link>
                    <Link className="nav-item social-icon" to="/"><AiFillYoutube /></Link>
                    <Link className="nav-item social-icon" to="/"><AiFillLinkedin /></Link>
                </div>
            </div>
            <div className="navbar-middle">
                <div className="logo">
                    <img src="https://amwfb.org/wp-content/uploads/2020/07/amwfLogo_footerLogo.png" class="" alt="" />
                </div>
                <div className="contact-us">
                    <div className="contact-us-item">
                        <div className="item-top">
                            <IoMailOutline className="icon" /><p>Mail Us Today</p>
                        </div>
                        <p className="item-bottom">info@yourdomain.com</p>
                    </div>
                    <div className="contact-us-item">
                        <div className="item-top">
                            <IoCallOutline className="icon" /><p>+880163333333</p>
                        </div>
                        <p className="item-bottom">Call for more details</p>
                    </div>
                    <div className="contact-us-item">
                        <div className="item-top">
                            <IoLocationOutline className="icon" /><p>Location</p>
                        </div>
                        <p className="item-bottom"> Muradpur, Chattogram</p>
                    </div>
                </div>
            </div>
            <div className="nav-bottom nav-container">
                <ul>
                    <li><Link className="nav-item">Home</Link></li>
                    <li><Link className="nav-item">Features</Link></li>
                    <li><Link className="nav-item">Get Involved</Link></li>
                    <li><Link className="nav-item">Volunteer</Link></li>
                    <li><Link className="nav-item">Portfolio</Link></li>
                    <li><Link className="nav-item">Blog</Link></li>
                </ul>

                <ul>
                    <li><Link className="nav-item nav-button">Donate Now</Link></li>
                    <li><Link className="nav-item nav-button">Join Us</Link></li>
                </ul>

            </div>
        </div>

    )
}

export default Navbar
