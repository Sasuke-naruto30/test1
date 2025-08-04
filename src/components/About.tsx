import React, { useState, useEffect } from 'react';
import { Heart, Users, Clock, Award, ChefHat } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-5 w-36 h-36 bg-terracotta/5 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-5 w-28 h-28 bg-deep-green/5 rounded-full animate-bounce-gentle animation-delay-700"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gold/5 rounded-full animate-pulse-soft animation-delay-400"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center space-x-3 mb-6">
              <ChefHat className="text-terracotta animate-bounce-gentle" size={28} />
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-deep-green">
                Chi Siamo
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
              <p className={`text-lg transition-all duration-1000 animation-delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
                Dal 2024, il Bar Trattoria Dal Mago Di Erti R.E S.S.N.C. rappresenta un punto di riferimento 
                per la gastronomia locale. Situata a San Giovanni in Croce, la nostra trattoria nasce dalla passione per 
                la cucina tradizionale italiana.
              </p>
              <p className={`transition-all duration-1000 animation-delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
                La nostra filosofia è semplice: ingredienti freschi, 
                ricette tradizionali e l'amore per l'ospitalità italiana.
              </p>
              <p className={`transition-all duration-1000 animation-delay-600 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
                Ogni piatto celebra il territorio di San Giovanni in Croce senza dimenticare le radici della cucina italiana.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              {[
                { icon: Heart, title: 'Passione', desc: 'Per la tradizione culinaria italiana', delay: 'animation-delay-800' },
                { icon: Users, title: 'Famiglia', desc: 'Tre generazioni di tradizione', delay: 'animation-delay-900' },
                { icon: Clock, title: 'Storia', desc: 'Dal 1952 nel cuore di Cremona', delay: 'animation-delay-1000' },
                { icon: Award, title: 'Qualità', desc: 'Ingredienti freschi e locali', delay: 'animation-delay-1100' }
              ].map((value, index) => (
                <div key={index} className={`text-center group transition-all duration-1000 ${value.delay} ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`}>
                  <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-terracotta/20 transition-all duration-300 hover:scale-110 hover:rotate-12">
                    <value.icon className="text-terracotta group-hover:animate-bounce-gentle" size={28} />
                  </div>
                  <h3 className="font-serif font-bold text-deep-green mb-2 group-hover:text-terracotta transition-colors duration-300">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 animation-delay-300 mt-8 md:mt-0 ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'}`}>
            <div className="relative rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 image-zoom">
              <img
                src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg"
                alt="Chef Marco Rossi in cucina"
                className="w-full h-96 object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-terracotta/20 rounded-full -z-10 animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-deep-green/10 rounded-full -z-10 animate-bounce-gentle animation-delay-500"></div>
            
            {/* Quote */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-3 md:p-4 hover:bg-white transition-all duration-300 hover:scale-105">
              <blockquote className="text-deep-green italic">
                "La cucina è l'anima della casa, e noi trattiamo ogni ospite come famiglia."
              </blockquote>
              <cite className="text-terracotta font-semibold text-sm mt-2 block">
                — Chef Marco Rossi
              </cite>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className={`mt-12 md:mt-20 transition-all duration-1000 animation-delay-1200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-xl md:text-3xl font-serif font-bold text-deep-green text-center mb-8 md:mb-12">
            La Nostra Storia
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 md:space-y-8">
              {[
                { year: '1952', title: 'Gli Inizi', desc: 'Giuseppe Rossi apre la prima osteria con solo 8 tavoli e tanta passione.', delay: 'animation-delay-1300' },
                { year: '1978', title: 'Espansione', desc: 'Il figlio Antonio amplia il locale e introduce la carta dei vini.', delay: 'animation-delay-1400' },
                { year: '2010', title: 'Nuova Generazione', desc: 'Marco Rossi diventa chef, portando innovazione nel rispetto della tradizione.', delay: 'animation-delay-1500' }
              ].map((event, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 group transition-all duration-1000 ${event.delay} ${isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-8'}`}>
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-terracotta rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 hover:rotate-12 mb-2 md:mb-0">
                    <span className="text-cream font-bold text-xs md:text-sm">{event.year}</span>
                  </div>
                  <div className="group-hover:translate-x-2 transition-transform duration-300 text-center md:text-left">
                    <h4 className="font-serif font-bold text-deep-green text-base md:text-lg group-hover:text-terracotta transition-colors duration-300">{event.title}</h4>
                    <p className="text-gray-600 text-sm md:text-base">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;