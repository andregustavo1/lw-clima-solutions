
const ClientsSection = () => {
  // Mock client logos - In a real project, you would use actual logos
  const clients = [
    { name: "Construtora OCA", id: 1 },
    { name: "Construtora SIPROL", id: 2 },
    { name: "Construtora Artha", id: 3 },
    { name: "S12 ARQUITETURA", id: 4 },
    { name: "Mundo Verde", id: 5 },
    { name: "Mr. Pé Podologia", id: 6 },
    { name: "Artderm", id: 7 },
    { name: "Samsung do Brasil", id: 8 },
    { name: "Gree", id: 9 },
    { name: "Mideia", id: 10 },
    { name: "TCL", id: 11 }
  ];

  return (
    <section id="clientes" className="py-24 bg-lw-lightgray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-lw-blue mb-4">
            Quem Confia em Nosso Trabalho
          </h2>
          <p className="text-lw-gray font-inter text-lg">
            Há 25 anos, entregando qualidade e conforto térmico para grandes empresas e clientes satisfeitos
          </p>
        </div>
        
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          {clients.map((client) => (
            <div 
              key={client.id} 
              className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-32 hover:shadow-md transition-shadow"
            >
              {/* In a real project, you would use an actual logo image here */}
              <span className="font-poppins font-medium text-lw-blue text-center">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
