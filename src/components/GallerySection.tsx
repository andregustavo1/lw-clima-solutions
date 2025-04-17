
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
      url: "/lovable-uploads/16ccc246-322b-4dbd-aebb-7570cf3ea026.png",
      alt: "Técnico instalando ar condicionado",
    },
    {
      url: "/lovable-uploads/6313853e-3f44-4303-8db8-8cb339072f8e.png",
      alt: "Fachada do prédio com ar condicionados",
    },
    {
      url: "/lovable-uploads/839bec5d-f0a1-4b67-bd40-fea121d49004.png",
      alt: "Técnicos trabalhando na fachada",
    },
    {
      url: "/lovable-uploads/d4fe054b-b0eb-4862-aa44-4612f2da2576.png",
      alt: "Vista completa do prédio",
    },
    {
      url: "/lovable-uploads/5454a3bb-6f91-498e-a60f-48e1e5aa28d9.png",
      alt: "Instalação de dutos",
    },
    {
      url: "/lovable-uploads/71f07bec-8103-43db-a839-b68ca1e411cb.png",
      alt: "Técnico configurando equipamento",
    },
    {
      url: "/lovable-uploads/865f6f88-e491-468a-99d0-849d4112e384.png",
      alt: "Instalação de equipamento no teto",
    },
    {
      url: "/lovable-uploads/71501277-a01a-4298-b117-66839f6d18a3.png",
      alt: "Técnico realizando manutenção",
    },
    {
      url: "/lovable-uploads/53daed10-1fd8-4142-83e5-7445b56fce9a.png",
      alt: "Técnico analisando equipamento Samsung",
    },
    {
      url: "/lovable-uploads/3e7ae2f3-dc2e-4ecc-bf5e-62dbb47497b5.png",
      alt: "Técnico verificando ar condicionado",
    },
    {
      url: "/lovable-uploads/09fe9aab-dded-4c6f-b209-99997f14c9a0.png",
      alt: "Fachada da loja LW Refrigeração",
    },
    {
      url: "/lovable-uploads/f522a2d9-5381-4d84-9763-7ef959c92498.png",
      alt: "Ar condicionado Samsung instalado",
    },
    {
      url: "/lovable-uploads/fb03600d-c8e0-48c4-847b-e719a6d88964.png",
      alt: "Instalação de infraestrutura",
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-white">
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
          className="max-w-5xl mx-auto relative"
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
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <ChevronLeft className="w-10 h-10 text-lw-blue hover:text-lw-blue/80 transition-colors" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <ChevronRight className="w-10 h-10 text-lw-blue hover:text-lw-blue/80 transition-colors" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
