
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const whatsappLink = "https://wa.me/5521998061649";

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-xl font-poppins font-bold text-lw-blue">
              LW Refrigeração e Climatização
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="inicio" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500} 
              className="font-inter text-lw-gray hover:text-lw-blue transition-colors cursor-pointer"
            >
              Início
            </Link>
            <Link 
              to="sobre" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500} 
              className="font-inter text-lw-gray hover:text-lw-blue transition-colors cursor-pointer"
            >
              Sobre
            </Link>
            <Link 
              to="servicos" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500} 
              className="font-inter text-lw-gray hover:text-lw-blue transition-colors cursor-pointer"
            >
              Serviços
            </Link>
            <Link 
              to="clientes" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500} 
              className="font-inter text-lw-gray hover:text-lw-blue transition-colors cursor-pointer"
            >
              Clientes
            </Link>
            <Link 
              to="contato" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500} 
              className="font-inter text-lw-gray hover:text-lw-blue transition-colors cursor-pointer"
            >
              Contato
            </Link>
            
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lw-green text-white font-poppins font-medium px-5 py-2 rounded-md hover:bg-lw-green/90 transition-colors"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      </div>
      
      <div className="h-1 w-full bg-gray-100 sticky top-0">
        <div 
          className="h-full bg-lw-blue" 
          style={{ 
            width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%`,
            transition: 'width 0.2s ease-out'
          }}
        />
      </div>
    </header>
  );
};

export default Header;
