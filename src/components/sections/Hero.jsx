
import React, { useState, useEffect } from 'react';
import { Construction } from 'lucide-react';

const Hero = () => {
    const [visibleWords, setVisibleWords] = useState(0);
    const headingText = "A House of Quality Services & Satisfaction";
    const words = headingText.split(' ');

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleWords((prev) => {
                if (prev < words.length) {
                    return prev + 1;
                }
                clearInterval(timer);
                return prev;
            });
        }, 150); // Show one word every 150ms

        return () => clearInterval(timer);
    }, [words.length]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative text-white py-32">
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }}></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl font-normal mb-6 tracking-wide min-h-[120px] md:min-h-[150px] flex items-center justify-center flex-wrap gap-x-3">
                    {words.map((word, index) => (
                        <span
                            key={index}
                            className={`inline-block transition-all duration-700 ease-out ${index < visibleWords
                                ? 'opacity-100 translate-y-0 scale-100'
                                : 'opacity-0 translate-y-8 scale-95'
                                }`}
                            style={{
                                transitionDelay: `${index * 50}ms`
                            }}
                        >
                            {word}
                        </span>
                    ))}
                </h2>
                <p className="font-bebas text-lg md:text-xl lg:text-2xl mb-8 text-yellow-400 tracking-wide">
                    Leading supplier of personal protective equipment, safety, and general order products for global oil field solutions
                </p>
                <button
                    onClick={() => scrollToSection('services')}
                    className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition transform hover:scale-105 inline-block align-middle"
                >
                    <span className="inline-block align-middle mr-2">
                        <Construction size={22} className="text-blue-900" aria-label="Construction work icon" />
                    </span>
                    <span className="inline-block align-middle">Explore Our Services</span>
                </button>
            </div>
        </section>
    );
};

export default Hero;
