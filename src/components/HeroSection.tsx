
import { Link } from 'react-scroll';

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5521998061649";
  
  return (
    <section id="inicio" className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80" 
          alt="Sistemas de climatização" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-lw-blue/60 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
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
      
      {/* Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="sobre"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="cursor-pointer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-10 w-10 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
