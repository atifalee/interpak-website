import React from 'react';
import { ChevronDown } from 'lucide-react';

const ServiceCard = ({ service, isActive, onToggle }) => {
    const Icon = service.icon;

    return (
        <div
            className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
            onClick={onToggle}
        >
            <div className="flex items-center mb-4">
                <div className="bg-yellow-400 p-3 rounded-lg mr-4">
                    <Icon size={32} className="text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
            </div>

            <p className="text-gray-700 mb-4">{service.description}</p>

            <div className={`transition-all duration-300 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                            <span className="text-yellow-400 mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <button className="mt-4 text-blue-900 font-semibold flex items-center hover:text-yellow-600 transition">
                {isActive ? 'Show Less' : 'Learn More'}
                <ChevronDown size={20} className={`ml-1 transform transition ${isActive ? 'rotate-180' : ''}`} />
            </button>
        </div>
    );
};

export default ServiceCard;
