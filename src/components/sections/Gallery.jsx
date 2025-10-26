import React, { useState } from 'react';
import { galleryData } from '../../data/galleryData';
import { X } from 'lucide-react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="gallery" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 drop-shadow-lg">
                    Gallery
                </h2>
                <p className="text-center text-white/90 mb-12 text-lg md:text-xl drop-shadow-md">
                    Our Projects & Operations
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryData.map((item) => (
                        <div
                            key={item.id}
                            className="group relative bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden h-64 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105 border-2 border-safety-yellow/20 cursor-pointer"
                            onClick={() => item.image && setSelectedImage(item)}
                        >
                            {item.image ? (
                                <>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <p className="text-white font-semibold text-lg p-4">{item.title}</p>
                                    </div>
                                </>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-blue/20 to-dark-blue/20">
                                    <div className="text-center">
                                        <div className="text-6xl mb-2">📸</div>
                                        <p className="text-neutral-gray font-semibold">{item.title}</p>
                                        <p className="text-neutral-gray/60 text-sm mt-1">Image Coming Soon</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <p className="text-center text-white/80 mt-8 text-sm">
                    Add images to public/gallery and update paths in src/data/galleryData.js
                </p>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-safety-yellow transition"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>
                    <div className="max-w-5xl max-h-[90vh] relative">
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="max-w-full max-h-[90vh] object-contain"
                        />
                        <p className="text-white text-center text-xl font-semibold mt-4">
                            {selectedImage.title}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
