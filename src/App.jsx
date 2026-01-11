import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import PrizeMoney from './components/PrizeMoney';
import Contact from './components/Contact'; // Kept as per structure, though Footer also has contact
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => elements.forEach(el => observer.unobserve(el));
    }, []);

    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <div className="reveal-on-scroll" id="about">
                <About />
            </div>
            <div className="reveal-on-scroll" id="categories">
                <Categories />
            </div>
            <div className="reveal-on-scroll" id="prize">
                <PrizeMoney />
            </div>
            <div className="reveal-on-scroll">
                <Contact />
            </div>
            <Footer />
        </div>
    );
}

export default App;
