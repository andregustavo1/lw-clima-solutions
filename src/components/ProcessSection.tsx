
import { 
  Search, 
  FileText, 
  WrenchIcon, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-white" />,
      title: "Análise e Diagnóstico",
      description: "Avaliação das necessidades e condições do ambiente",
      delay: 100
    },
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Projeto Personalizado",
      description: "Desenvolvimento da solução ideal para cada cliente",
      delay: 200
    },
    {
      icon: <WrenchIcon className="h-10 w-10 text-white" />,
      title: "Implementação",
      description: "Instalação e configuração dos sistemas com qualidade",
      delay: 300
    },
    {
      icon: <CheckCircle2 className="h-10 w-10 text-white" />,
      title: "Testes e Ajustes",
      description: "Verificação de desempenho e otimização dos equipamentos",
      delay: 400
    },
    {
      icon: <Calendar className="h-10 w-10 text-white" />,
      title: "Manutenção Programada",
      description: "Acompanhamento periódico para garantir eficiência",
      delay: 500
    }
  ];

  return (
    <section id="processo" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-lw-blue mb-4">
            Nosso Processo
          </h2>
          <p className="text-lw-gray font-inter text-lg">
            Como trabalhamos para garantir a melhor solução para você
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-lw-blue/20 top-0"></div>
          
          {/* Timeline steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} md:mb-24 relative`}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay={step.delay}
                data-aos-duration="1000"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-lw-blue"></div>
                
                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="flex flex-col md:flex-row md:items-center mb-4">
                    <div className="bg-lw-blue rounded-full p-4 mb-4 md:mb-0 md:mr-4 inline-flex self-start md:self-auto">
                      {step.icon}
                    </div>
                    <h3 className="font-poppins font-semibold text-xl text-lw-blue">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-inter text-lw-gray">
                    {step.description}
                  </p>
                </div>
                
                {/* Empty space for second half */}
                <div className="md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
