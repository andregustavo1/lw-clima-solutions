
import { Phone, Mail, Instagram, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-lw-blue/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-lw-blue mb-4">
            Entre em Contato
          </h2>
          <p className="text-lw-gray font-inter text-lg">
            Garanta o melhor em climatização para seu ambiente
          </p>
        </div>
        
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          {/* WhatsApp */}
          <a 
            href="https://wa.me/5521998061649" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            <div className="bg-lw-blue/10 p-4 rounded-full mb-4">
              <Phone className="h-8 w-8 text-lw-blue" />
            </div>
            <h3 className="font-poppins font-semibold text-xl text-lw-blue mb-2">
              WhatsApp
            </h3>
            <p className="font-inter text-lw-gray">
              +55 21 99806-1649
            </p>
          </a>
          
          {/* Email */}
          <a 
            href="mailto:consult@lwrefrigeracao.com.br" 
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            <div className="bg-lw-blue/10 p-4 rounded-full mb-4">
              <Mail className="h-8 w-8 text-lw-blue" />
            </div>
            <h3 className="font-poppins font-semibold text-xl text-lw-blue mb-2">
              E-mail
            </h3>
            <p className="font-inter text-lw-gray">
              consult@lwrefrigeracao.com.br
            </p>
          </a>
          
          {/* Instagram */}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
          >
            <div className="bg-lw-blue/10 p-4 rounded-full mb-4">
              <Instagram className="h-8 w-8 text-lw-blue" />
            </div>
            <h3 className="font-poppins font-semibold text-xl text-lw-blue mb-2">
              Instagram
            </h3>
            <p className="font-inter text-lw-gray">
              Siga-nos para novidades
            </p>
          </a>
        </div>
        
        {/* Location */}
        <div 
          className="mt-12 bg-white p-8 rounded-lg shadow-sm"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="bg-lw-blue/10 p-4 rounded-full">
              <MapPin className="h-8 w-8 text-lw-blue" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-poppins font-semibold text-xl text-lw-blue mb-2">
                Localização
              </h3>
              <p className="font-inter text-lw-gray">
                Rua Alzenir Antonio Brandão Nº 347 / Antiga Itabapua, Rio de Janeiro/RJ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
