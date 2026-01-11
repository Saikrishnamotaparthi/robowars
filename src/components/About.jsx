import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about-section section" id="about">
            <div className="container">
                <div className="tech-panel about-panel">
                    <div className="panel-header">
                        <span className="panel-id">SEC-01 // BRIEFING</span>
                        <div className="panel-decor-line"></div>
                    </div>

                    <div className="about-content">
                        <h2 className="section-title glitch-text" data-text="WAR BEGINS HERE">WAR BEGINS HERE</h2>

                        <div className="data-readout">
                            <p className="about-text">
                                <span className="typing-cursor"></span>
                                Welcome to the ultimate robotic showdown. <span className="highlight">ROBO WARS 26</span> is the premier combat robotics event
                                hosted by <span className="highlight">PRAMANA26</span> in association with <span className="highlight">Team G-ELECTRA</span>.
                            </p>
                            <div className="separator-line"></div>
                            <p className="about-text">
                                Held at the state-of-the-art <span className="highlight">GITAM Hyderabad</span> campus, we bring you 3 days of metal-crushing action.
                                From lightweight 8kg speedsters to heavy-hitting 30kg destroyers, witness the best bots in India battle for glory.
                            </p>
                        </div>

                        <div className="tech-stats-grid">
                            <div className="tech-stat-item">
                                <span className="stat-val">3</span>
                                <span className="stat-lbl">DAYS</span>
                            </div>
                            <div className="tech-stat-item">
                                <span className="stat-val">30+</span>
                                <span className="stat-lbl">TEAMS</span>
                            </div>
                            <div className="tech-stat-item">
                                <span className="stat-val">₹XXK+</span>
                                <span className="stat-lbl">PRIZES</span>
                            </div>
                        </div>
                    </div>

                    <div className="panel-footer">
                        <span className="status-indicator">SYSTEM: ONLINE</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
