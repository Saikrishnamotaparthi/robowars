import React from 'react';
import './PrizeMoney.css';

const PrizeMoney = () => {
    return (
        <section className="prize-section section" id="prize">
            <div className="container">
                <h2 className="section-title glitch-text" data-text="PRIZE POOL">PRIZE POOL</h2>
                <div className="vault-container">
                    <div className="vault-door">
                        <div className="vault-lock">
                            <div className="lock-circle"></div>
                            <div className="lock-icon">🔒</div>
                        </div>
                        <div className="vault-content">
                            <div className="prize-reveal-text">REVEALING SOON</div>
                            <div className="prize-note">HUGE CASH REWARDS FOR TOP CONTENDERS</div>
                            <div className="vault-status">STATUS: LOCKED</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrizeMoney;
