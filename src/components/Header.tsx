import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-cream/95 backdrop-blur-md border-b border-terracotta/20 shadow-lg' 
        : 'bg-cream/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 animate-fade-in-left">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-terracotta to-deep-green rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:rotate-12">
              <span className="text-cream font-bold text-lg md:text-xl">O</span>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-serif font-bold text-deep-green hover:text-terracotta transition-colors duration-300">
                Bar Trattoria Dal Mago Di Erti R.E S.S.N.C.
              </h1>
              <p className="text-xs md:text-sm text-terracotta font-medium animate-pulse-soft">San Giovanni in Croce</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 animate-fade-in-down">
            {['Home', 'Menu', 'Chi Siamo', 'Galleria', 'Contatti'].map((item, index) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item === 'Home' ? 'home' : item === 'Chi Siamo' ? 'about' : item === 'Galleria' ? 'gallery' : item === 'Contatti' ? 'contact' : item.toLowerCase())} 
                className={`text-deep-green hover:text-terracotta transition-all duration-300 font-medium relative group animate-fade-in-down stagger-${index + 1}`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm animate-fade-in-right">
            <div className="flex items-center space-x-1 text-deep-green hover:text-terracotta transition-colors duration-300 hover:scale-105">
              <Phone size={16} className="animate-bounce-gentle" />
              <span>037591096</span>
            </div>
            <div className="flex items-center space-x-1 text-deep-green hover:text-terracotta transition-colors duration-300 hover:scale-105">
              <MapPin size={16} className="animate-float" />
              <span>Via Giacomo Matteotti, 40</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-deep-green hover:text-terracotta transition-all duration-300 hover:scale-110 hover:rotate-90"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-terracotta/20">
            <nav className="flex flex-col space-y-3 mb-4">
              {['Home', 'Menu', 'Chi Siamo', 'Galleria', 'Contatti'].map((item, index) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item === 'Home' ? 'home' : item === 'Chi Siamo' ? 'about' : item === 'Galleria' ? 'gallery' : item === 'Contatti' ? 'contact' : item.toLowerCase())} 
                  className={`text-left px-4 py-2 text-deep-green hover:text-terracotta transition-all duration-300 font-medium hover:bg-terracotta/10 rounded-lg hover:translate-x-2 animate-slide-in-bottom stagger-${index + 1}`}
                >
                  {item}
                </button>
              ))}
            </nav>
            {/* Contact Info for Mobile */}
            <div className="flex flex-col space-y-2 px-4 text-sm">
              <div className="flex items-center space-x-1 text-deep-green">
                <Phone size={16} />
                <span>037591096</span>
              </div>
              <div className="flex items-center space-x-1 text-deep-green">
                <MapPin size={16} />
                <span>Via Giacomo Matteotti, 40</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;