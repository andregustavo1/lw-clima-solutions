
import { Clock, Users, Wrench, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div 
            className="space-y-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-lw-blue">
              Sobre a LW Refrigeração
            </h2>
            <div className="space-y-4 font-inter text-lw-gray">
              <p>
                A LW Refrigeração e Climatização nasceu em 1999, com a finalidade de atender o mercado de projetos e execução de instalação em sistemas de climatização, quando os equipamentos do tipo split residencial e comercial estavam chegando ao Brasil.
              </p>
              <p>
                A LW Refrigeração já atuava na região do estado do Rio de Janeiro, executando serviços em sistemas de refrigeração e climatização para hospitais, bancos, comércios e residências.
              </p>
              <p>
                Buscando sempre inovar, investindo em mão de obra qualificada e ferramental de última geração, atuando de maneira efetiva, sempre preparando suas equipes técnicas para oferecer o melhor aos seus clientes.
              </p>
              <p>
                Hoje com 25 anos de existência e atuação, continuamos contribuindo para atender ao mercado, mantendo a qualidade e saúde do ar dos ambientes climatizados, dando conforto térmico e qualidade de vida aos nossos clientes.
              </p>
            </div>
          </div>
          
          {/* Right Column - Differentials */}
          <div 
            className="space-y-8"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Item 1 */}
              <div className="bg-lw-lightgray p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <Clock className="h-10 w-10 text-lw-blue" />
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-lw-blue mb-2">
                      25 anos de experiência
                    </h3>
                    <p className="font-inter text-lw-gray">
                      Duas décadas e meia de atuação no mercado de refrigeração e climatização.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="bg-lw-lightgray p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <Users className="h-10 w-10 text-lw-blue" />
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-lw-blue mb-2">
                      Equipe qualificada
                    </h3>
                    <p className="font-inter text-lw-gray">
                      Técnicos e engenheiros com certificação e treinamento contínuo.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="bg-lw-lightgray p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <Wrench className="h-10 w-10 text-lw-blue" />
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-lw-blue mb-2">
                      Equipamentos modernos
                    </h3>
                    <p className="font-inter text-lw-gray">
                      Ferramentas e tecnologias de última geração para melhor desempenho.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Item 4 */}
              <div className="bg-lw-lightgray p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <Award className="h-10 w-10 text-lw-blue" />
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-lw-blue mb-2">
                      Compromisso com qualidade
                    </h3>
                    <p className="font-inter text-lw-gray">
                      Garantia de satisfação e soluções duradouras para nossos clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
