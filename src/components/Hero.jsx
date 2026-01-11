import React from 'react';
import './Hero.css';
import roboTextLogo from '../assets/robowars-text-logo.png';

const Hero = () => {
    const handleScrollDown = (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-section" id="hero">
            <div className="video-background">
                <div className="video-overlay"></div>
                <div className="hud-overlay">
                    <div className="hud-grid"></div>
                    <div className="hud-corner top-left"></div>
                    <div className="hud-corner top-right"></div>
                    <div className="hud-corner bottom-left"></div>
                    <div className="hud-corner bottom-right"></div>
                    <div className="hud-line top"></div>
                    <div className="hud-line bottom"></div>
                </div>
                {/* Updated placeholder video link for more dynamic combat vibe */}
                <video autoPlay loop muted playsInline className="hero-video">
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-metal-pieces-falling-on-a-black-background-42653-large.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container hero-content">
                <div className="hero-status">
                    <span className="status-dot"></span> SYSTEM READY // COMBAT MODE
                </div>

                <img src={roboTextLogo} alt="ROBO WARS 26" className="hero-text-logo fade-up" />

                <div className="mission-brief fade-up-delay">
                    <div className="brief-line"></div>
                    <div className="event-date">
                        <span className="date-label">T-ZERO:</span>
                        <span className="date-value">FEB 24 - 26</span>
                    </div>
                    <div className="brief-line"></div>
                </div>

                <a href="#categories" className="cta-button fade-up-delay-2" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                    <span className="cta-text">REGISTER NOW</span>
                    <span className="cta-decor"></span>
                </a>

                {/* Mobile Scroll Indicator - Flows with content */}
                <a href="#about" className="scroll-indicator mobile-indicator" onClick={handleScrollDown}>
                    <span className="scroll-arrow"></span>
                    <span className="scroll-arrow"></span>
                </a>
            </div>

            {/* Desktop Scroll Indicator - Absolute bottom */}
            <a href="#about" className="scroll-indicator desktop-indicator" onClick={handleScrollDown}>
                <span className="scroll-arrow"></span>
                <span className="scroll-arrow"></span>
            </a>
        </section>
    );
};

export default Hero;
