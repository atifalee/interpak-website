import React from 'react';
import ValueCard from '../ui/ValueCard';
import { valuesData } from '../../data/valuesData';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 drop-shadow-lg">About InterPak</h2>

                <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-12 max-w-3xl mx-auto">
                    <p className="text-neutral-gray text-[18px] md:text-[20px] leading-relaxed md:leading-loose mb-6">
                        InterPak is a leading and prime supplier of personal protective equipment, safety, and general order products offering a globally recognized brand. With an extensive products portfolio, we locate world-class products and globally recognized brand. Our wide-ranging craftsmanship is purposely built for your comfort.
                    </p>
                    <p className="text-neutral-gray text-[18px] md:text-[20px] leading-relaxed md:leading-loose mb-0">
                        Our focus is on delivering quality goods and products at competitively low prices with superior services. With the prospect to be your ultimate partner, we definitely will ensure that your Company shall adore the matchless quality services.
                    </p>
                </div>

                <div className="rounded-lg shadow-lg p-8 mb-12 bg-dark-blue/80 backdrop-blur-sm border-l-4 border-safety-yellow">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-safety-yellow">Customer Care</h3>
                    <p className="text-off-white/90 text-[18px] md:text-[20px] leading-relaxed md:leading-loose mb-4">
                        To maintain "Quality" very seriously, Product and service standards are closely monitored to maximize the service standards experience ultimate satisfaction. Our aim is to form long-term partnerships with our customers by providing quality products and unrivalled customer care.
                    </p>
                    <p className="text-off-white/90 text-[18px] md:text-[20px] leading-relaxed md:leading-loose mb-4">
                        If you are looking for a supply partner for your company, then consider our bespoke service. At Interpak, we will be happy to work with you to produce the right solution for your company and at a budget to suit.
                    </p>
                    <p className="text-off-white/95 text-[18px] md:text-[20px] leading-relaxed md:leading-loose font-semibold">
                        Welcome to Interpak oil field services. We look forward to keeping you safe and comfortable at work.
                    </p>
                </div>

                <div className="mt-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 drop-shadow-lg">Our Core Values</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {valuesData.map((value, idx) => (
                            <ValueCard key={idx} title={value.title} description={value.description} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
