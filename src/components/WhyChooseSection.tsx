
import { Medal, UserCheck, HeartHandshake, Cpu } from 'lucide-react';

const WhyChooseSection = () => {
  return (
    <section id="porque" className="py-24 bg-gradient-to-b from-lw-lightgray/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-lw-blue mb-4">
            Por Que Nos Escolher?
          </h2>
          <p className="text-lw-gray font-inter text-lg">
            Experiência e qualidade em cada projeto de climatização
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div 
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow relative overflow-hidden group"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <div className="absolute inset-0 bg-lw-blue opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div className="flex flex-col items-center text-center relative z-10">
              <Medal className="h-16 w-16 text-lw-blue mb-4" />
              <h3 className="font-poppins font-semibold text-xl text-lw-blue mb-3">
                Tradição e Experiência
              </h3>
              <p className="font-inter text-lw-gray">
                25 anos no mercado de climatização e refrigeração, garantindo soluções confiáveis.
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div 
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow relative overflow-hidden group"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="absolute inset-0 bg-lw-blue opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div className="flex flex-col items-center text-center relative z-10">
              <UserCheck className="h-16 w-16 text-lw-blue mb-4" />
              <h3 className="font-poppins font-semibold text-xl text-lw-blue mb-3">
                Equipe Especializada
              </h3>
              <p className="font-inter text-lw-gray">
                Técnicos treinados e certificados para qualquer desafio em refrigeração.
              </p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div 
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow relative overflow-hidden group"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <div className="absolute inset-0 bg-lw-blue opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div className="flex flex-col items-center text-center relative z-10">
              <HeartHandshake className="h-16 w-16 text-lw-blue mb-4" />
              <h3 className="font-poppins font-semibold text-xl text-lw-blue mb-3">
                Atendimento Personalizado
              </h3>
              <p className="font-inter text-lw-gray">
                Soluções adaptadas às necessidades específicas de cada cliente e ambiente.
              </p>
            </div>
          </div>
          
          {/* Card 4 */}
          <div 
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow relative overflow-hidden group"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div className="absolute inset-0 bg-lw-blue opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div className="flex flex-col items-center text-center relative z-10">
              <Cpu className="h-16 w-16 text-lw-blue mb-4" />
              <h3 className="font-poppins font-semibold text-xl text-lw-blue mb-3">
                Equipamentos de Ponta
              </h3>
              <p className="font-inter text-lw-gray">
                Utilizamos ferramentas e materiais de alta qualidade para resultados superiores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
