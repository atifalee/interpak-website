import React from 'react';
import { clientsData } from '../../data/clientsData';

const Clients = () => {
  return (
    <section id="clients" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 drop-shadow-lg">Our Clients</h2>
        <p className="text-center text-white/90 mb-12 text-lg md:text-xl drop-shadow-md">Trusted by leading organizations</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {clientsData.map((c) => (
            c.url ? (
              <a
                key={c.id}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/95 backdrop-blur-sm rounded-xl shadow-md p-6 flex items-center justify-center h-32 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 border-2 border-safety-yellow/20"
                title={c.name}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-20 max-w-full w-auto object-contain"
                />
              </a>
            ) : (
              <div
                key={c.id}
                className="bg-white/95 backdrop-blur-sm rounded-xl shadow-md p-6 flex items-center justify-center h-32 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 border-2 border-safety-yellow/20"
                title={c.name}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-20 max-w-full w-auto object-contain"
                />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
