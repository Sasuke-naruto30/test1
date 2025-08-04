import React from 'react';
import { Phone, MapPin, Mail, Facebook, Instagram, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep-green text-cream relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-terracotta/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gold/10 rounded-full animate-bounce-gentle animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-cream/5 rounded-full animate-pulse-soft animation-delay-300"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10 space-y-10 md:space-y-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-terracotta to-gold rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:rotate-12">
                <span className="text-cream font-bold text-xl">O</span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-serif font-bold group-hover:text-terracotta transition-colors duration-300">
                  Bar Trattoria Dal Mago Di Erti R.E S.S.N.C.
                </h3>
                <p className="text-xs md:text-sm text-cream/80 animate-pulse-soft">San Giovanni in Croce</p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-cream/80 leading-relaxed mb-6 hover:text-cream transition-colors duration-300">
              Dal 1952, la tradizione culinaria italiana nel cuore di Cremona. 
              Ogni piatto racconta una storia di passione e autenticità.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-terracotta/20 rounded-full flex items-center justify-center hover:bg-terracotta/30 transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <Facebook size={20} className="hover:animate-bounce-gentle" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-terracotta/20 rounded-full flex items-center justify-center hover:bg-terracotta/30 transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <Instagram size={20} className="hover:animate-bounce-gentle" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="animate-fade-in-up animation-delay-200">
            <h4 className="text-base md:text-lg font-semibold mb-6 flex items-center space-x-2">
              <span>Navigazione</span>
              <div className="w-8 h-0.5 bg-terracotta"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Menu', id: 'menu' },
                { label: 'Chi Siamo', id: 'about' },
                { label: 'Galleria', id: 'gallery' },
                { label: 'Contatti', id: 'contact' }
              ].map((item, index) => (
                <li key={item.id} className={`animate-fade-in-left stagger-${index + 1}`}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="text-cream/80 hover:text-cream transition-all duration-300 hover:translate-x-2 relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up animation-delay-400">
            <h4 className="text-base md:text-lg font-semibold mb-6 flex items-center space-x-2">
              <span>Contatti</span>
              <div className="w-8 h-0.5 bg-terracotta"></div>
            </h4>
            <div className="space-y-4">
              {[
                { icon: MapPin, content: 'Via Giacomo Matteotti, 40\n26037 San Giovanni in Croce CR' },
                { icon: Phone, content: '037591096', link: 'tel:037591096' }
              ].map((contact, index) => (
                <div key={index} className={`flex items-start space-x-3 group animate-fade-in-right stagger-${index + 1}`}>
                  <contact.icon size={18} className="text-terracotta mt-1 flex-shrink-0 group-hover:animate-bounce-gentle" />
                  <div>
                    {contact.link ? (
                      <a 
                        href={contact.link} 
                        className="text-cream/80 hover:text-cream transition-colors duration-300 hover:underline"
                      >
                        {contact.content}
                      </a>
                    ) : (
                      <p className="text-cream/80 text-sm whitespace-pre-line group-hover:text-cream transition-colors duration-300">
                        {contact.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Opening Hours */}
          <div className="animate-fade-in-up animation-delay-600">
            <h4 className="text-base md:text-lg font-semibold mb-6 flex items-center space-x-2">
              <span>Orari</span>
              <div className="w-8 h-0.5 bg-terracotta"></div>
            </h4>
            <div className="space-y-3 text-sm">
              <div className="group hover:bg-terracotta/10 p-2 rounded transition-colors duration-300">
                <p className="text-cream font-medium">Martedì - Sabato</p>
                <p className="text-cream/80">12:00 - 14:30</p>
                <p className="text-cream/80">19:00 - 23:00</p>
              </div>
              <div className="group hover:bg-terracotta/10 p-2 rounded transition-colors duration-300">
                <p className="text-cream font-medium">Domenica</p>
                <p className="text-cream/80">12:00 - 14:30</p>
              </div>
              <div className="group hover:bg-terracotta/10 p-2 rounded transition-colors duration-300">
                <p className="text-terracotta font-medium animate-pulse-soft">Lunedì: Chiuso</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs md:text-sm text-cream/60 animate-fade-in-up">
              © 2024 Bar Trattoria Dal Mago Di Erti R.E S.S.N.C. San Giovanni in Croce. Tutti i diritti riservati.
            </p>
            <div className="flex items-center space-x-2 text-xs md:text-sm text-cream/60 animate-fade-in-up animation-delay-200">
              <span>Realizzato con</span>
              <Heart size={16} className="text-terracotta animate-pulse-soft" />
              <span>a Cremona</span>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-terracotta text-cream rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 z-50 animate-bounce-gentle"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;