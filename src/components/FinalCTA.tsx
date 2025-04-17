
const FinalCTA = () => {
  return (
    <section className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80" 
          alt="Ambiente climatizado" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-lw-blue/70 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="max-w-3xl mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
            Pronto para Melhorar o Conforto Térmico do Seu Ambiente?
          </h2>
          <p className="text-xl text-white/90 font-inter mb-8">
            Conte com 25 anos de experiência em climatização e refrigeração
          </p>
          <a 
            href="https://wa.me/5521998061649" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-lw-green text-white font-poppins font-medium px-8 py-3 rounded-md hover:bg-lw-green/90 hover:scale-105 transition-all inline-block"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
