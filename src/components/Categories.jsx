import React from 'react';
import './Categories.css';
import robot8kg from '../assets/robot-8kg.jpg';
import robot15kg from '../assets/robot-15kg.jpg';
import robot30kg from '../assets/robot-30kg.jpg';

const Categories = () => {
    // Handling actions
    // Handling actions
    const handleRegister = () => {
        window.open('https://unstop.com/p/pramanas-robowars-gitam-university-gitamu-hyderabad-campus-hyderabad-1621797', '_blank');
    };

    const handleExplore = (id) => {
        // Opens the specific rulebook from public/rulebooks/
        window.open(`/rulebooks/${id}.pdf`, '_blank');
    };

    const categories = [
        {
            id: '8kg',
            title: '8KG',
            subtitle: 'LIGHTWEIGHT',
            stats: { speed: 'HIGH', armor: 'LOW', power: 'MED' },
            image: robot8kg,
        },
        {
            id: '15kg',
            title: '15KG',
            subtitle: 'MIDWEIGHT',
            stats: { speed: 'MED', armor: 'MED', power: 'HIGH' },
            image: robot15kg,
        },
        {
            id: '30kg',
            title: '30KG',
            subtitle: 'HEAVYWEIGHT',
            stats: { speed: 'LOW', armor: 'MAX', power: 'EXTREME' },
            image: robot30kg,
        }
    ];

    return (
        <section className="categories-section section" id="categories">
            <div className="container">
                <h2 className="section-title glitch-text" data-text="BATTLE CATEGORIES">BATTLE CATEGORIES</h2>
                <div className="categories-grid">
                    {categories.map((cat) => (
                        <div key={cat.id} className="tech-card">
                            <div className="tech-card-content">
                                {/* Holographic Image / Overlay */}
                                <div className="tech-image-container">
                                    <img src={cat.image} alt={`${cat.title} Robot`} className="tech-image" />
                                    <div className="scanline"></div>
                                    <div className="tech-overlay">
                                        <div className="corner-bracket top-left"></div>
                                        <div className="corner-bracket top-right"></div>
                                        <div className="corner-bracket bottom-left"></div>
                                        <div className="corner-bracket bottom-right"></div>
                                    </div>
                                </div>

                                {/* Card Header */}
                                <div className="tech-header">
                                    <h3 className="tech-title">{cat.title}</h3>
                                    <span className="tech-subtitle">{cat.subtitle}</span>
                                </div>

                                {/* Tech Specs / Stats */}
                                <div className="tech-stats">
                                    {Object.entries(cat.stats).map(([key, value]) => (
                                        <div key={key} className="stat-row">
                                            <span className="stat-label">{key}</span>
                                            <div className="stat-bar-container">
                                                <div className={`stat-bar fill-${value.toLowerCase()}`}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="tech-actions">
                                    <button className="tech-btn btn-register" onClick={handleRegister}>
                                        Register now
                                    </button>
                                    <button className="tech-btn btn-explore" onClick={() => handleExplore(cat.id)}>
                                        DATA FILE
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
