import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, Calendar, Users, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Indirizzo',
      content: 'Via Giacomo Matteotti, 40\n26037 San Giovanni in Croce CR',
      delay: 'animation-delay-200'
    },
    {
      icon: Phone,
      title: 'Telefono',
      content: '037591096',
      link: 'tel:037591096',
      delay: 'animation-delay-300'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-terracotta/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-deep-green/5 rounded-full animate-bounce-gentle animation-delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gold/5 rounded-full animate-pulse-soft animation-delay-400"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}">
          <div className="flex justify-center mb-6">
            <Phone className="text-terracotta animate-bounce-gentle" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-green mb-4">
            Contatti & Prenotazioni
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Saremo felici di accogliervi al Bar Trattoria Dal Mago Di Erti R.E S.S.N.C.! Contattateci per prenotare il vostro tavolo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 animation-delay-200 ${isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-deep-green mb-6 md:mb-8 flex items-center space-x-3">
              <Mail className="text-terracotta animate-pulse-soft" size={24} />
              <span>Informazioni di Contatto</span>
            </h3>
            <div className="space-y-4 md:space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className={`flex items-start space-x-4 group transition-all duration-1000 ${info.delay} ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-4'}`}>
                  <div className="w-12 h-12 bg-terracotta/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta/20 transition-all duration-300 hover:scale-110 hover:rotate-12">
                    <info.icon className="text-terracotta group-hover:animate-bounce-gentle" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-green mb-1 group-hover:text-terracotta transition-colors duration-300">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-gray-600 hover:text-terracotta transition-colors duration-300 hover:underline">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">
                        {info.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {/* Interactive Google Map */}
            <div className="rounded-lg overflow-hidden shadow-lg mb-8">
              <iframe
                title="Bar Trattoria Dal Mago Di Erti - Mappa"
                src="https://www.google.com/maps?q=Via+Giacomo+Matteotti,+40,+26037+San+Giovanni+in+Croce+CR,+Italy&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Reservation Form */}
          <div className={`transition-all duration-1000 animation-delay-400 ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-deep-green mb-6 md:mb-8 flex items-center space-x-3">
              <Calendar className="text-terracotta animate-pulse-soft" size={24} />
              <span>Prenota un Tavolo</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium text-deep-green mb-2 group-hover:text-terracotta transition-colors duration-300">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all duration-300 hover:border-terracotta/50 text-sm md:text-base"
                    placeholder="Il tuo nome"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-deep-green mb-2 group-hover:text-terracotta transition-colors duration-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all duration-300 hover:border-terracotta/50 text-sm md:text-base"
                    placeholder="la-tua-email@esempio.com"
                  />
                </div>
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-medium text-deep-green mb-2 group-hover:text-terracotta transition-colors duration-300">
                    Telefono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all duration-300 hover:border-terracotta/50 text-sm md:text-base"
                    placeholder="Il tuo numero di telefono"
                  />
                </div>
                <div className="group">
                  <label htmlFor="date" className="block text-sm font-medium text-deep-green mb-2 group-hover:text-terracotta transition-colors duration-300">
                    Data *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all duration-300 hover:border-terracotta/50 text-sm md:text-base"
                  />
                </div>
                <div className="group">
                  <label htmlFor="time" className="block text-sm font-medium text-deep-green mb-2 group-hover:text-terracotta transition-colors duration-300">
                    Orario *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all duration-300 hover:border-terracotta/50 text-sm md:text-base"
                  >
                    <option value="">Seleziona orario</option>
                    {['12:00', '12:30', '13:00', '13:30', '14:00', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                <div className="group">
                  <label htmlFor="guests" className="block text-sm font-medium text-deep-green mb-2 group-hover:text-terracotta transition-colors duration-300">
                    Persone *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all duration-300 hover:border-terracotta/50 text-sm md:text-base"
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num.toString()}>{num} {num === 1 ? 'persona' : 'persone'}</option>
                    ))}
                    <option value="more">Più di 8</option>
                  </select>
                </div>
              </div>
              <div className="group">
                <label htmlFor="message" className="block text-sm font-medium text-deep-green mb-2 group-hover:text-terracotta transition-colors duration-300">
                  Note Speciali
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent transition-all duration-300 hover:border-terracotta/50 text-sm md:text-base resize-none"
                  placeholder="Allergie, preferenze particolari, occasioni speciali..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full font-semibold py-4 rounded-lg transform transition-all duration-500 shadow-lg hover:shadow-xl relative overflow-hidden ${
                  isSubmitted 
                    ? 'bg-green-500 text-white' 
                    : 'bg-terracotta text-cream hover:bg-terracotta/90 hover:scale-105'
                } ${isSubmitting ? 'animate-pulse' : ''}`}
              >
                <span className={`flex items-center justify-center space-x-2 transition-all duration-300 ${isSubmitting || isSubmitted ? 'opacity-0' : 'opacity-100'}`}>
                  <Send size={20} />
                  <span>Prenota Tavolo</span>
                </span>
                {isSubmitting && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-cream border-t-transparent rounded-full animate-spin"></div>
                  </span>
                )}
                {isSubmitted && (
                  <span className="absolute inset-0 flex items-center justify-center animate-scale-in">
                    <CheckCircle size={24} className="text-white" />
                  </span>
                )}
              </button>
              <div className={`mt-6 p-4 bg-gray-50 rounded-lg hover-lift transition-all duration-1000 animation-delay-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-start space-x-3">
                  <Users className="text-terracotta mt-1 animate-pulse-soft" size={20} />
                  <div>
                    <p className="text-sm text-gray-600">
                      <strong>Nota:</strong> La prenotazione sarà confermata tramite telefono o email. 
                      Per gruppi superiori a 8 persone, vi preghiamo di chiamarci direttamente.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;