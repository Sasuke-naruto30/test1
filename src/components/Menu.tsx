import React, { useState, useEffect } from 'react';
import { Wine, Utensils, Coffee, Cake, Star } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 'antipasti',
    title: 'Antipasti',
    icon: <Utensils size={24} />,
    items: [
      {
        name: 'Antipasto della Casa',
        description: 'Selezione di salumi e formaggi locali, olive ascolane, focaccia cremonese',
        price: '€18'
      },
      {
        name: 'Crudo di Ricciola',
        description: 'Con agrumi, olio extravergine di oliva e pepe rosa',
        price: '€16'
      },
      {
        name: 'Burrata Pugliese',
        description: 'Con pomodorini confit, basilico e riduzione di balsamico',
        price: '€14'
      },
      {
        name: 'Vitello Tonnato',
        description: 'Fettine di vitello con salsa tonnata della tradizione piemontese',
        price: '€15'
      }
    ]
  },
  {
    id: 'primi',
    title: 'Primi Piatti',
    icon: <Utensils size={24} />,
    items: [
      {
        name: 'Tortelli di Zucca',
        description: 'Specialità cremonese con burro, salvia e parmigiano reggiano',
        price: '€16'
      },
      {
        name: 'Risotto al Gorgonzola',
        description: 'Con noci, miele di acacia e rucola',
        price: '€14'
      },
      {
        name: 'Tagliatelle al Tartufo',
        description: 'Pasta fresca all\'uovo con tartufo nero umbro',
        price: '€22'
      },
      {
        name: 'Pappardelle al Cinghiale',
        description: 'Pasta fresca con ragù di cinghiale e rosmarino',
        price: '€18'
      }
    ]
  },
  {
    id: 'secondi',
    title: 'Secondi Piatti',
    icon: <Utensils size={24} />,
    items: [
      {
        name: 'Osso Buco alla Milanese',
        description: 'Con risotto allo zafferano e gremolada',
        price: '€26'
      },
      {
        name: 'Branzino in Crosta di Sale',
        description: 'Pesce fresco del giorno con verdure di stagione',
        price: '€24'
      },
      {
        name: 'Costoletta alla Milanese',
        description: 'Carne di vitello impanata e fritta, con insalata mista',
        price: '€22'
      },
      {
        name: 'Agnello alle Erbe',
        description: 'Cosciotto d\'agnello con patate arrosto e rosmarino',
        price: '€25'
      }
    ]
  },
  {
    id: 'dolci',
    title: 'Dolci',
    icon: <Cake size={24} />,
    items: [
      {
        name: 'Tiramisù della Casa',
        description: 'La nostra versione del classico dolce italiano',
        price: '€8'
      },
      {
        name: 'Panna Cotta ai Frutti di Bosco',
        description: 'Con coulis di frutti di bosco freschi',
        price: '€7'
      },
      {
        name: 'Torta Sbrisolona',
        description: 'Dolce tradizionale cremonese con mandorle',
        price: '€6'
      },
      {
        name: 'Gelato Artigianale',
        description: 'Selezione di gusti stagionali (3 palline)',
        price: '€6'
      }
    ]
  },
  {
    id: 'vini',
    title: 'Vini',
    icon: <Wine size={24} />,
    items: [
      {
        name: 'Barolo DOCG',
        description: 'Nebbiolo del Piemonte, annata 2018',
        price: '€45'
      },
      {
        name: 'Chianti Classico DOCG',
        description: 'Sangiovese toscano, annata 2020',
        price: '€28'
      },
      {
        name: 'Prosecco di Valdobbiadene DOCG',
        description: 'Spumante veneto, metodo charmat',
        price: '€22'
      },
      {
        name: 'Lugana DOC',
        description: 'Bianco del Garda, perfetto con pesce',
        price: '€24'
      }
    ]
  }
];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('antipasti');
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    // Animate items when category changes
    setVisibleItems([]);
    const timer = setTimeout(() => {
      const currentItems = menuData.find(cat => cat.id === activeCategory)?.items || [];
      currentItems.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, index]);
        }, index * 100);
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="menu" className="py-20 bg-cream relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-terracotta/5 rounded-full animate-float animation-delay-300"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-deep-green/5 rounded-full animate-bounce-gentle animation-delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Star className="text-terracotta animate-pulse-soft" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-green mb-4 animate-fade-in-up">
            La Nostra Carta
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Scoprite i sapori autentici della tradizione italiana, 
            preparati con ingredienti freschi e ricette tramandate di generazione in generazione.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuData.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-500 hover:scale-105 hover-lift animate-scale-in stagger-${index + 1} ${
                activeCategory === category.id
                  ? 'bg-terracotta text-cream shadow-lg transform scale-105'
                  : 'bg-white text-deep-green hover:bg-terracotta/10 border-2 border-terracotta/20 hover:border-terracotta/40'
              }`}
            >
              <span className={`transition-transform duration-300 ${activeCategory === category.id ? 'animate-bounce-gentle' : ''}`}>
                {category.icon}
              </span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          {menuData.map((category) => (
            <div
              key={category.id}
              className={`transition-all duration-700 ${
                activeCategory === category.id ? 'block' : 'hidden'
              }`}
            >
              <div className="grid gap-6">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 border-l-4 border-terracotta hover-lift hover-glow transform ${
                      visibleItems.includes(index) 
                        ? 'animate-fade-in-right opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-8'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-bold text-deep-green mb-2 hover:text-terracotta transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="ml-4 text-right">
                        <span className="text-2xl font-bold text-terracotta hover:scale-110 transition-transform duration-300 inline-block">
                          {item.price}
                        </span>
                      </div>
                    </div>
                    
                    {/* Hover effect line */}
                    <div className="w-0 h-0.5 bg-gradient-to-r from-terracotta to-gold transition-all duration-500 group-hover:w-full mt-4"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Menu Note */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-800">
          <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-md max-w-2xl mx-auto hover-lift border border-terracotta/20">
            <div className="flex justify-center mb-4">
              <Coffee className="text-terracotta animate-bounce-gentle" size={24} />
            </div>
            <p className="text-gray-600 italic mb-2">
              Tutti i nostri piatti sono preparati con ingredienti freschi e di stagione. 
              Il menu può variare in base alla disponibilità degli ingredienti.
            </p>
            <p className="text-sm text-gray-500">
              Informate il personale di eventuali allergie o intolleranze alimentari.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;