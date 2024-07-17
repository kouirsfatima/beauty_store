import React from 'react';
import '../../components/Footer/Footer.css';
import logo from '../../assets/logo2.png';
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";



const Footer = () => {
    return (
        <footer>
            <section className="contact">
                <div className="contact-info">
                    <div className="first-info">
                        <img src={logo} alt="Logo" />
                        <p> Hassan II ouislane <br />Meknes, Morocco</p>
                        <p>+212 612-345678</p>
                        <p style={{ textTransform: 'lowercase', fontSize: 'medium' }}>www.Beauty.com</p>

                    <div className="social-icons-container">
                    <AiFillInstagram size="32px" className="social-icon" />
                    <FaSquareFacebook size="30px" className="social-icon" />
                    <AiFillTikTok size="30px" className="social-icon" />
                    </div>
                    </div>


                    <div className="second-info">
                        <h4>Support</h4>
                        <p>Contact us</p>
                        <p>Size Guide</p>
                        <p>Shoping & Returns </p>
                        <p>Privacy</p>
                    </div>
                    <div className="third-info">
                        <h4>Legal</h4>
                        <p>Terms of use</p>
                        <p>Privacy policy</p>
                        <p>Furniture</p>
                        <p>Discount</p>
                    </div>
                    <div className="fourth-info">
                        <h4>Company</h4>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Affiliate</p>
                    </div>
                    <div className="five">
                        <h4>Subscribe</h4>
                        <p>Receive updates, HOT Deals, Discount Sent Straight In Your Inbox Daily</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis </p>
                        <p>Receive updates, HOT Deals, Discount Sent Straight In Your Inbox Daily</p>
                    </div>
                </div>
            </section>
            <div className="end-text">
                <p>BUILT BY FATIMA EZ-ZAHRA</p>
            </div>
        </footer>
    );
};

export default Footer;
