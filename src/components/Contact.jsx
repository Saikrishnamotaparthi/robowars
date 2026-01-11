import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section section" id="contact">
            <div className="container">
                <h2 className="section-title glitch-text" data-text="COMMS UPLINK">GET IN TOUCH</h2>

                <div className="comms-grid">
                    {/* Event Inquiries Card */}
                    <div className="tech-card contact-card">
                        <div className="tech-overlay">
                            <div className="corner-bracket top-left"></div>
                            <div className="corner-bracket top-right"></div>
                            <div className="corner-bracket bottom-left"></div>
                            <div className="corner-bracket bottom-right"></div>
                        </div>
                        <div className="scanline"></div>

                        <div className="contact-icon-box">
                            <div className="comms-icon">📧</div>
                        </div>

                        <div className="contact-info">
                            <h3>EVENT INQUIRIES</h3>
                            <div className="tech-divider"></div>
                            <p className="highlight-text">Koushik</p>
                            <a href="tel:+918121286794" className="comms-link">+91 81212 86794</a>
                            <a href="mailto:pramana.hyd@gitam.edu" className="comms-link">pramana.hyd@gitam.edu</a>
                        </div>
                    </div>

                    {/* Tech Support Card */}
                    <div className="tech-card contact-card primary-border">
                        <div className="tech-overlay">
                            <div className="corner-bracket top-left"></div>
                            <div className="corner-bracket top-right"></div>
                            <div className="corner-bracket bottom-left"></div>
                            <div className="corner-bracket bottom-right"></div>
                        </div>
                        <div className="scanline"></div>

                        <div className="contact-icon-box">
                            <div className="comms-icon">⚙️</div>
                        </div>

                        <div className="contact-info">
                            <h3>TECH SUPPORT</h3>
                            <div className="tech-divider"></div>
                            <p className="highlight-text">Harsha</p>
                            <a href="tel:+918977017599" className="comms-link">+91 89770 17599</a>
                            <a href="mailto:gelectra@gitam.edu" className="comms-link">gelectra@gitam.edu</a>
                            <div className="signal-bars">
                                <span className="bar"></span><span className="bar"></span><span className="bar"></span>
                            </div>
                        </div>
                    </div>

                    {/* Venue Card */}
                    <div className="tech-card contact-card">
                        <div className="tech-overlay">
                            <div className="corner-bracket top-left"></div>
                            <div className="corner-bracket top-right"></div>
                            <div className="corner-bracket bottom-left"></div>
                            <div className="corner-bracket bottom-right"></div>
                        </div>
                        <div className="scanline"></div>

                        <div className="contact-icon-box">
                            <div className="comms-icon">📍</div>
                        </div>

                        <div className="contact-info">
                            <h3>BASE LOCATION</h3>
                            <div className="tech-divider"></div>
                            <p className="comms-link">GITAM University</p>
                            <p className="comms-link">Hyderabad, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
