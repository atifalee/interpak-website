import React from 'react';


import { useRef, useEffect, useState } from 'react';

const ValueCard = ({ title, description }) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`bg-white rounded-2xl shadow-md p-6 text-center transition-all duration-700 ease-out
                hover:shadow-2xl hover:-translate-y-2 hover:scale-105 border-2 border-safety-yellow/30
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ minHeight: 160 }}
        >
            <h4 className="text-xl font-bold text-blue-900 mb-3">{title}</h4>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
};

export default ValueCard;
