import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Logo and Description */}
          <div>
            <h2 className="text-2xl font-poppins font-bold mb-4">
              LW Refrigeração e Climatização
            </h2>
            <p className="font-inter text-white/80 mb-6">
              Soluções completas em climatização e refrigeração desde 1999. Especialistas em projetos, instalação, manutenção e venda de equipamentos.
            </p>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-4">
              Links Rápidos
            </h3>
            <nav className="space-y-3">
              <Link 
                to="inicio" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                className="block font-inter text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                Início
              </Link>
              <Link 
                to="sobre" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                className="block font-inter text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                Sobre Nós
              </Link>
              <Link 
                to="servicos" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                className="block font-inter text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                Serviços
              </Link>
              <Link 
                to="clientes" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                className="block font-inter text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                Clientes
              </Link>
              <Link 
                to="contato" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500} 
                className="block font-inter text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                Contato
              </Link>
            </nav>
          </div>
          
          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-4">
              Contato
            </h3>
            <div className="space-y-3 font-inter text-white/80">
              <p>WhatsApp: +55 21 99806-1649</p>
              <p>E-mail: consult@lwrefrigeracao.com.br</p>
              <p>Endereço: Rua Alzenir Antonio Brandão Nº 347 / Antiga Itabapua, Rio de Janeiro/RJ</p>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-white/20 mb-8"></div>
        
        {/* Copyright */}
        <div className="text-center font-inter text-white/60 text-sm">
          © 2025 LW de Heliópolis Com e Serv. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
