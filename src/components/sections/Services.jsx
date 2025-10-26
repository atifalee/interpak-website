import React, { useState } from 'react';
import ServiceCard from '../ui/ServiceCard';
import { servicesData } from '../../data/servicesData';

const Services = () => {
    const [activeService, setActiveService] = useState(null);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="services" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 drop-shadow-lg">Our Services</h2>
                <p className="text-center text-white/90 mb-12 text-lg md:text-xl drop-shadow-md">Comprehensive solutions for oil field operations</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            isActive={activeService === service.id}
                            onToggle={() => setActiveService(activeService === service.id ? null : service.id)}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition transform hover:scale-105"
                    >
                        Request a Quote
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;
