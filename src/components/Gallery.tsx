import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Filter } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    title: 'Pasta Fresca',
    category: 'food'
  },
  {
    url: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
    title: 'Sala Principale',
    category: 'interior'
  },
  {
    url: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
    title: 'Specialità della Casa',
    category: 'food'
  },
  {
    url: 'https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg',
    title: 'Selezione Vini',
    category: 'wine'
  },
  {
    url: 'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg',
    title: 'Atmosfera Serale',
    category: 'interior'
  },
  {
    url: 'https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg',
    title: 'Dolci della Tradizione',
    category: 'food'
  },
  {
    url: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
    title: 'Tavoli all\'Aperto',
    category: 'interior'
  },
  {
    url: 'https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg',
    title: 'Antipasti Misti',
    category: 'food'
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  const filteredImages = galleryImages.filter(image => 
    filter === 'all' || image.category === filter
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('gallery');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      setVisibleImages([]);
      filteredImages.forEach((_, index) => {
        setTimeout(() => {
          setVisibleImages(prev => [...prev, index]);
        }, index * 150);
      });
    }
  }, [filter, isVisible]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const filterButtons = [
    { id: 'all', label: 'Tutto', icon: Camera },
    { id: 'food', label: 'Piatti', icon: Camera },
    { id: 'wine', label: 'Vini', icon: Camera },
    { id: 'interior', label: 'Ambiente', icon: Camera }
  ];

  return (
    <section id="gallery" className="py-20 bg-cream relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-8 w-32 h-32 bg-terracotta/5 rounded-full animate-float animation-delay-300"></div>
        <div className="absolute bottom-16 left-8 w-24 h-24 bg-deep-green/5 rounded-full animate-bounce-gentle animation-delay-600"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center mb-6">
            <Camera className="text-terracotta animate-pulse-soft" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-green mb-4">
            Galleria
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Un viaggio visivo attraverso i nostri piatti, la nostra atmosfera 
            e la passione che mettiamo in ogni dettaglio.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 animation-delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          {filterButtons.map((button, index) => (
            <button
              key={button.id}
              onClick={() => setFilter(button.id)}
              className={`flex items-center space-x-2 px-6 py-2 rounded-full font-semibold transition-all duration-500 hover:scale-105 hover-lift animate-scale-in stagger-${index + 1} ${
                filter === button.id
                  ? 'bg-terracotta text-cream shadow-lg transform scale-105'
                  : 'bg-white text-deep-green hover:bg-terracotta/10 border-2 border-terracotta/20'
              }`}
            >
              <button.icon size={18} className={filter === button.id ? 'animate-bounce-gentle' : ''} />
              <span>{button.label}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={`${filter}-${index}`}
              className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-700 hover-lift image-zoom transform ${
                visibleImages.includes(index) 
                  ? 'animate-scale-in opacity-100 scale-100' 
                  : 'opacity-0 scale-75'
              }`}
              onClick={() => openLightbox(index)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <h3 className="text-cream text-lg font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {image.title}
                  </h3>
                  <div className="w-0 h-0.5 bg-terracotta mx-auto mt-2 group-hover:w-16 transition-all duration-500"></div>
                </div>
              </div>
              
              {/* Hover overlay with icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-terracotta/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <Camera className="text-cream" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 animate-fade-in-up">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-cream hover:text-terracotta transition-colors duration-300 hover:scale-110 hover:rotate-90 z-10"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cream hover:text-terracotta transition-all duration-300 hover:scale-110 hover:-translate-x-2"
            >
              <ChevronLeft size={40} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cream hover:text-terracotta transition-all duration-300 hover:scale-110 hover:translate-x-2"
            >
              <ChevronRight size={40} />
            </button>
            
            <div className="max-w-4xl max-h-full animate-scale-in">
              <img
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-6 animate-fade-in-up animation-delay-300">
                <h3 className="text-cream text-2xl font-serif font-bold mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <div className="w-16 h-0.5 bg-terracotta mx-auto"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;