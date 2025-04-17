
import { 
  FileText, 
  ShoppingBag, 
  Search, 
  Thermometer, 
  LifeBuoy, 
  Settings, 
  FileCode, 
  ClipboardList, 
  Calendar 
} from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-lw-blue mb-4">
            Serviços Especializados
          </h2>
          <p className="text-lw-gray font-inter text-lg">
            Soluções completas em climatização e refrigeração
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div 
            className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <FileText className="h-12 w-12 text-lw-blue mb-4" />
            <h3 className="font-poppins font-semibold text-xl text-lw-blue mb-2">
              Projetos de Climatização
            </h3>
            <p className="font-inter text-lw-gray">
              Desenvolvimento de sistemas personalizados para qualquer ambiente, residencial ou comercial.
            </p>
          </div>
          
          {/* Service 2 */}
          <div 
            className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="800"
          >
            <ShoppingBag className="h-12 w-12 text-lw-blue mb-4" />
            <h3 className="font-poppins font-semibold text-xl text-lw-blue mb-2">
              Venda de Equipamentos
            </h3>
            <p className="font-inter text-lw-gray">
              Comercialização de peças e equipamentos das melhores marcas do mercado.
            </p>
          </div>
          
          {/* Service 3 */}
          <div 
            className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            <Search className="h-12 w-12 text-lw-blue mb-4" />
            <h3 className="font-poppins font-semibold text-xl text-lw-blue mb-2">
              Visita Técnica
            </h3>
            <p className="font-inter text-lw-gray">
              Avaliação profissional para diagnóstico preciso e orçamento detalhado.
            </p>
          </div>
          
          {/* Service 4 */}
          <div 
            className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="800"
          >
            <Thermometer className="h-12 w-12 text-lw-blue mb-4" />
            <h3 className="font-poppins font-semibold text-xl text-lw-blue mb-2">
              Manutenção e Higienização
            </h3>
            <p className="font-inter text-lw-gray">
              Serviços preventivos e corretivos para sistemas de ar condicionado.
            </p>
          </div>
          
          {/* Service 5 */}
          <div 
            className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <LifeBuoy className="h-12 w-12 text-lw-blue mb-4" />
            <h3 className="font-poppins font-semibold text-xl text-lw-blue mb-2">
              Reparos
            </h3>
            <p className="font-inter text-lw-gray">
              Soluções rápidas e eficazes para problemas em equipamentos de refrigeração.
            </p>
          </div>
          
          {/* Service 6 */}
          <div 
            className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow"
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-duration="800"
          >
            <Settings className="h-12 w-12 text-lw-blue mb-4" />
            <h3 className="font-poppins font-semibold text-xl text-lw-blue mb-2">
              Instalação
            </h3>
            <p className="font-inter text-lw-gray">
              Montagem profissional de sistemas de climatização com garantia de qualidade.
            </p>
          </div>
          
          {/* Service 7 */}
          <div 
            className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <FileCode className="h-12 w-12 text-lw-blue mb-4" />
            <h3 className="font-poppins font-semibold text-xl text-lw-blue mb-2">
              Geração de Projetos
            </h3>
            <p className="font-inter text-lw-gray">
              Elaboração de plantas e projetos técnicos para sistemas de refrigeração.
            </p>
          </div>
          
          {/* Service 8 */}
          <div 
            className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow"
            data-aos="fade-up"
            data-aos-delay="450"
            data-aos-duration="800"
          >
            <ClipboardList className="h-12 w-12 text-lw-blue mb-4" />
            <h3 className="font-poppins font-semibold text-xl text-lw-blue mb-2">
              Geração de PMOC
            </h3>
            <p className="font-inter text-lw-gray">
              Plano de Manutenção, Operação e Controle conforme legislação vigente.
            </p>
          </div>
          
          {/* Service 9 */}
          <div 
            className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="800"
          >
            <Calendar className="h-12 w-12 text-lw-blue mb-4" />
            <h3 className="font-poppins font-semibold text-xl text-lw-blue mb-2">
              Contratos de Manutenção
            </h3>
            <p className="font-inter text-lw-gray">
              Serviços programados para empresas e estabelecimentos comerciais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
