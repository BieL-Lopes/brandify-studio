import { 
  Award, 
  Printer, 
  Settings, 
  Heart, 
  DollarSign, 
  Building2,
  Truck 
} from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Mais de 25 anos de experiência",
    description: "Tradição e expertise no mercado de brindes personalizados",
  },
  {
    icon: Printer,
    title: "Impressão com qualidade profissional",
    description: "Equipamentos modernos e técnicas de ponta",
  },
  {
    icon: Settings,
    title: "Personalização conforme sua necessidade",
    description: "Adaptamos cada projeto às suas especificações",
  },
  {
    icon: Heart,
    title: "Atendimento direto e humanizado",
    description: "Suporte próximo do início ao fim do projeto",
  },
  {
    icon: DollarSign,
    title: "Excelente custo-benefício",
    description: "Preços competitivos sem abrir mão da qualidade",
  },
  {
    icon: Building2,
    title: "Ideal para empresas e eventos",
    description: "Soluções para todos os tipos de ações promocionais",
  },
  {
    icon: Truck,
    title: "Entrega para todo o Brasil",
    description: "Envios seguros e pontuais em todo território nacional",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary text-primary text-sm font-semibold rounded-full mb-4">
            ⭐ Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Por que escolher a KG Serigrafia?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combinamos experiência, qualidade e atendimento para entregar os melhores resultados.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 bg-muted rounded-2xl hover:bg-secondary transition-all duration-300 hover:shadow-lg border border-transparent hover:border-primary/10"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary group-hover:bg-background rounded-xl mb-4 transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
