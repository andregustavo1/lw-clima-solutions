
import { Link } from 'react-scroll';

const Header = () => {
  const whatsappLink = "https://wa.me/5521998061649";

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/e23d8680-ed13-474c-aff4-891c62fa4b20.png" 
              alt="LW Refrigeração" 
              className="h-12"
            />
          </div>
          
          <nav className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="inicio" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                className="font-inter text-black hover:text-lw-blue transition-colors cursor-pointer"
              >
                Início
              </Link>
              <Link 
                to="sobre" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                className="font-inter text-black hover:text-lw-blue transition-colors cursor-pointer"
              >
                Sobre
              </Link>
              <Link 
                to="servicos" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                className="font-inter text-black hover:text-lw-blue transition-colors cursor-pointer"
              >
                Serviços
              </Link>
              <Link 
                to="clientes" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                className="font-inter text-black hover:text-lw-blue transition-colors cursor-pointer"
              >
                Clientes
              </Link>
              <Link 
                to="contato" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                className="font-inter text-black hover:text-lw-blue transition-colors cursor-pointer"
              >
                Contato
              </Link>
            </div>
            
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lw-green text-white font-poppins font-medium px-5 py-2 rounded-md hover:bg-lw-green/90 transition-colors block"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
