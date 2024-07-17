import React from 'react';
import './About.css';
import aboutImage from '../../assets/fatima.jpg';
import { FaPhoneSquareAlt, FaEnvelope } from 'react-icons/fa';
import { TiHtml5 } from 'react-icons/ti';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';

const AboutPage = () => {
    return (
        <section id="about-section">
            <div className="about-left">
                <img src={aboutImage} alt="About Img" />
            </div>
            <div className="about-right">
                <h4>My Story</h4>
                <h1>About Me</h1>
                <p>
                I am a front-end developer with a great passion for developing interactive and engaging web applications.
                 I decided to study front-end software to gain a deep understanding and strong foundation in
                 the technologies that contribute to creating outstanding user experiences.</p>
                <div className="contact-info">
                    <ul>
                        <li>
                            <span className="contact-logo">
                                <FaPhoneSquareAlt size="32px" className="phone-icon" />
                            </span>
                            <p>+212 987-654-4321</p>
                        </li>
                        <li>
                            <span className="contact-logo">
                                <FaEnvelope size="32px" className="email-icon" />
                            </span>
                            <p>berlinefatima@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <div className="expertise">
                    <h3>My Expertise</h3>
                    <ul>
                        <li>
                            <span className="expertise-logo">
                                <TiHtml5 size="32px" className="html-icon" />
                            </span>
                            <p>HTML</p>
                        </li>
                        <li>
                            <span className="expertise-logo">
                                <FaCss3Alt size="32px" className="css-icon" />
                            </span>
                            <p>CSS</p>
                        </li>
                        <li>
                            <span className="expertise-logo">
                                <IoLogoJavascript size="32px" className="javascript-icon" />
                            </span>
                            <p>JavaScript</p>
                        </li>
                        <li>
                            <span className="expertise-logo">
                                <FaReact size="32px" className="react-icon" />
                            </span>
                            <p>React</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
