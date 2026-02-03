import { Button } from "@/components/ui/button";
import { Award, Truck, Sparkles } from "lucide-react";
import kgLogo from "@/assets/kg-logo-hero.png";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5561991029997?text=Olá! Gostaria de solicitar um orçamento para brindes personalizados.";

  const scrollToProdutos = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const produtosSection = document.getElementById('produtos');
    if (produtosSection) {
      produtosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Falar no WhatsApp
              </a>
            </Button>
            <Button variant="outline-brand" size="lg" asChild>
              <a href="#produtos" onClick={scrollToProdutos}>
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
