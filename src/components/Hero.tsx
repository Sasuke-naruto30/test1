import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const heroImages = [
  {
    url: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
    title: 'Autentica Cucina Italiana',
    subtitle: 'Tradizione e passione dal 1952'
  },
  {
    url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    title: 'Pasta Fatta in Casa',
    subtitle: 'Ogni giorno, con ingredienti freschi'
  },
  {
    url: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
    title: 'Atmosfera Intima',
    subtitle: 'Nel cuore di Cremona'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-terracotta/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-deep-green/10 rounded-full animate-bounce-gentle animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gold/10 rounded-full animate-pulse-soft animation-delay-300"></div>
      </div>

      {/* Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1500 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div className="image-zoom w-full h-full">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-cream/20 backdrop-blur-sm text-cream hover:bg-cream/30 transition-all duration-300 z-10 hover:scale-110 hover:-translate-x-1"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-cream/20 backdrop-blur-sm text-cream hover:bg-cream/30 transition-all duration-300 z-10 hover:scale-110 hover:translate-x-1"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-125 ${
              index === currentSlide 
                ? 'bg-cream shadow-lg scale-125' 
                : 'bg-cream/40 hover:bg-cream/60'
            }`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-cream px-4 max-w-5xl">
          {/* Decorative Element */}
          <div className="flex justify-center mb-6">
            <Sparkles className="text-terracotta animate-pulse-soft" size={32} />
          </div>

          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 transition-all duration-1000 ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}>
            {heroImages[currentSlide].title}
          </h1>
          
          <p className={`text-xl md:text-3xl mb-8 font-light transition-all duration-1000 animation-delay-300 ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}>
            {heroImages[currentSlide].subtitle}
          </p>
          
          <p className={`text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 animation-delay-500 ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}>
            Benvenuti nella nostra osteria, dove la tradizione culinaria italiana 
            si sposa con l'eleganza e il calore dell'ospitalità cremonese.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 animation-delay-700 ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={() => scrollToSection('menu')}
              className="group px-8 py-4 bg-terracotta text-cream font-semibold rounded-lg hover:bg-terracotta/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl btn-animate hover-glow relative overflow-hidden"
            >
              <span className="relative z-10">Scopri il Menu</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 border-2 border-cream text-cream font-semibold rounded-lg hover:bg-cream hover:text-deep-green transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Prenota un Tavolo</span>
              <div className="absolute inset-0 bg-cream transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="absolute inset-0 flex items-center justify-center text-deep-green font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Prenota un Tavolo
              </span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-1000 animation-delay-1000 ${
            isLoaded ? 'animate-bounce-gentle' : 'opacity-0'
          }`}>
            <div className="w-6 h-10 border-2 border-cream/60 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cream/60 rounded-full mt-2 animate-bounce-gentle"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-cream/30 rounded-full animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;