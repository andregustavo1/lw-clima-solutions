
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GallerySection = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Ambiente climatizado",
    },
    {
      url: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      alt: "Sistema de refrigeração",
    },
    {
      url: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
      alt: "Instalação de ar condicionado",
    },
    {
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      alt: "Manutenção preventiva",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center max-w-3xl mx-auto mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-lw-blue mb-4">
            Nossa Galeria
          </h2>
          <p className="text-lw-gray font-inter text-lg">
            Conheça um pouco do nosso trabalho em climatização e refrigeração
          </p>
        </div>

        <div 
          className="max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <Carousel>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
