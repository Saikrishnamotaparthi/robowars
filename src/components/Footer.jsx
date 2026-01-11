import React from 'react';
import './Footer.css';
import pramanaLogo from '../assets/pramana-logo.png';
import gelectraLogo from '../assets/gelectra-logo-new.png';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="brand-logos">
                            <img src={pramanaLogo} alt="Pramana" />
                            <span className="divider">X</span>
                            <img src={gelectraLogo} alt="G-Electra" />
                        </div>
                        <p className="brand-tagline">Where Engineering Meets Destruction</p>
                    </div>

                    <div className="footer-contact">
                        <h4>CONTACT US</h4>
                        <div className="contact-item">
                            <span>Email:</span> <a href="mailto:pramana@gitam.edu">pramana@gitam.edu</a>
                        </div>
                        <div className="contact-item">
                            <span>Phone:</span> <a href="tel:+919876543210">+91 98765 43210</a>
                        </div>
                    </div>

                    <div className="footer-map">
                        <h4>VENUE</h4>
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.5246623282924!2d78.1655871!3d17.5497781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf11b33d2df9d%3A0xccb71d58d5bf59ff!2sGITAM%20Deemed%20to%20be%20University%20Hyderabad!5e1!3m2!1sen!2sin!4v1768119802791!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="GITAM Hyderabad Map"
                            ></iframe>
                        </div>
                        <p className="venue-text">GITAM Deemed to be University, Hyderabad</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 ROBO WARS. All Rights Reserved.</p>
                    <p>Designed by PRAMANA26 Tech Team</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
