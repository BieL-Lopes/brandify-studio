import { Button } from "@/components/ui/button";
import { MessageCircle, Award, Truck, Sparkles } from "lucide-react";
import kgLogo from "@/assets/kg-logo-hero.png";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5561991029997?text=Olá! Gostaria de solicitar um orçamento para brindes personalizados.";

  return (
    <section className="relative min-h-screen bg-hero-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 py-12 lg:py-20">
        {/* Logo */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <img 
            src={kgLogo} 
            alt="KG Serigrafia - Desde 1996" 
            className="h-32 lg:h-44 w-auto drop-shadow-lg animate-fade-in-up"
          />
        </div>

        {/* Main content */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-primary/80 font-semibold uppercase tracking-widest mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Impressão em Brindes Personalizados
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Transformamos sua marca em{" "}
            <span className="relative inline-block">
              presença
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="hsl(357, 93%, 45%)" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary/80 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Brindes personalizados que <strong>divulgam</strong>, <strong>fortalecem</strong> e <strong>valorizam</strong> o seu negócio.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-primary font-medium">
              <Award className="w-5 h-5 text-accent" />
              Qualidade
            </div>
            <div className="flex items-center gap-2 text-primary font-medium">
              <Sparkles className="w-5 h-5 text-accent" />
              Agilidade
            </div>
            <div className="flex items-center gap-2 text-primary font-medium">
              <Truck className="w-5 h-5 text-accent" />
              Entrega para todo o Brasil
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button variant="outline-brand" size="lg" asChild>
              <a href="#produtos">
                Ver Produtos
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary/60 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            👉 Solicite seu orçamento agora mesmo – atendimento rápido e sem compromisso
          </p>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
