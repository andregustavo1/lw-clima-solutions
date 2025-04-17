
import { Link } from 'react-scroll';

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5521998061649";
  
  return (
    <section id="inicio" className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/bd8dcd25-5ad9-4e8c-a278-bff7b060884e.png" 
          alt="Sistemas de climatização" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-lw-blue/60 backdrop-blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
        <div 
          className="max-w-3xl text-white"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-4">
            Engenharia em Climatização e Refrigeração
          </h1>
          <p className="text-xl md:text-2xl font-inter mb-8 text-white/90">
            25 anos garantindo conforto térmico e qualidade do ar
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="servicos"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="bg-lw-green text-white font-poppins font-medium px-8 py-3 rounded-md hover:bg-lw-green/90 hover:scale-105 transition-all cursor-pointer inline-block"
            >
              Conheça Nossos Serviços
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-lw-blue font-poppins font-medium px-8 py-3 rounded-md hover:bg-white/90 hover:scale-105 transition-all"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
