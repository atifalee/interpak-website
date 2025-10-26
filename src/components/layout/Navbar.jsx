import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <nav className="bg-dark-blue text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24 md:h-28 lg:h-32">
                    <div className="flex items-center">
                        <img
                            src="/interpak-logo-new.png"
                            alt="InterPak Oil Fields Services"
                            className="h-20 md:h-24 lg:h-28 w-auto cursor-pointer"
                            onClick={() => handleNavClick('home')}
                        />
                    </div>

                    <div className="hidden md:flex space-x-8 text-lg">
                        <button
                            onClick={() => handleNavClick('home')}
                            className="hover:text-yellow-400 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 navbar-glow"
                        >HOME</button>
                        <button
                            onClick={() => handleNavClick('about')}
                            className="hover:text-yellow-400 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 navbar-glow"
                        >ABOUT</button>
                        <button
                            onClick={() => handleNavClick('services')}
                            className="hover:text-yellow-400 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 navbar-glow"
                        >SERVICES</button>
                        <button
                            onClick={() => handleNavClick('clients')}
                            className="hover:text-yellow-400 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 navbar-glow"
                        >CLIENTS</button>
                        <button
                            onClick={() => handleNavClick('contact')}
                            className="hover:text-yellow-400 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 navbar-glow"
                        >CONTACT</button>
                    </div>

                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-dark-blue">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <button onClick={() => handleNavClick('home')} className="block w-full text-left px-3 py-2 hover:bg-primary-blue font-semibold">HOME</button>
                        <button onClick={() => handleNavClick('about')} className="block w-full text-left px-3 py-2 hover:bg-primary-blue font-semibold">ABOUT</button>
                        <button onClick={() => handleNavClick('services')} className="block w-full text-left px-3 py-2 hover:bg-primary-blue font-semibold">SERVICES</button>
                        <button onClick={() => handleNavClick('clients')} className="block w-full text-left px-3 py-2 hover:bg-primary-blue font-semibold">CLIENTS</button>
                        <button onClick={() => handleNavClick('contact')} className="block w-full text-left px-3 py-2 hover:bg-primary-blue font-semibold">CONTACT</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
