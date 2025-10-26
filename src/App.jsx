import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import QuickStats from './components/sections/QuickStats';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Clients from './components/sections/Clients';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';

const App = () => {
    return (
        <div
            style={{
                backgroundImage: "url('/jeanson-wong-QjdkpDmMSQA-unsplash.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                width: '100%',
                position: 'relative',
            }}
            className="w-full font-body text-lg md:text-xl leading-relaxed"
        >
            {/* Global overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/60 via-primary-blue/40 to-dark-blue/60" />

            {/* Content above overlay */}
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <QuickStats />
                <About />
                <Services />
                <Clients />
                <Gallery />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default App;
