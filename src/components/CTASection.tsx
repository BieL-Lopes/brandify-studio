import { Button } from "@/components/ui/button";
import { MessageCircle, Truck, Zap } from "lucide-react";

const CTASection = () => {
  const whatsappLink = "https://wa.me/5561991029997?text=Olá! Gostaria de solicitar um orçamento para brindes personalizados.";

  return (
    <section className="py-20 bg-hero-pattern relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 bg-white/90 text-primary text-sm font-semibold rounded-full mb-6">
            📞 Entre em Contato
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Quer destacar sua marca com brindes personalizados de qualidade?
          </h2>

          <p className="text-xl text-primary/80 mb-8">
            Entre em contato agora mesmo e solicite seu orçamento
          </p>

          {/* Contact info */}
          <div className="flex justify-center items-center mb-10">
            <div className="flex items-center gap-3 text-primary">
              <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium opacity-80">WhatsApp</p>
                <p className="font-bold text-lg">(61) 99102-9997</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-primary text-sm font-medium">
              <Truck className="w-4 h-4 text-accent" />
              Atendemos todo o Brasil
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-primary text-sm font-medium">
              <Zap className="w-4 h-4 text-accent" />
              Atendimento rápido e sem compromisso
            </div>
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="xl" asChild className="animate-pulse-soft">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
