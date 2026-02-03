import { Calendar, Award, Users, Truck } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Calendar, value: "1996", label: "Desde" },
    { icon: Award, value: "+25", label: "Anos de experiência" },
    { icon: Users, value: "100.000+", label: "Clientes atendidos" },
    { icon: Truck, value: "Brasil", label: "Entrega nacional" },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-secondary text-primary text-sm font-semibold rounded-full mb-4">
              🖨️ Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Sobre a KG Serigrafia
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-primary">KG Serigrafia</strong> atua desde 1996, oferecendo soluções completas em impressão e personalização de brindes para empresas, eventos, ações promocionais e uso corporativo.
              </p>
              <p>
                Nosso compromisso é entregar produtos de <strong className="text-primary">alta qualidade</strong>, com acabamento profissional, prazos confiáveis e atendimento próximo ao cliente.
              </p>
              <p>
                Trabalhamos com serigrafia e outras técnicas de personalização para garantir que sua marca esteja presente no dia a dia das pessoas.
              </p>
              <p className="flex items-center gap-2 font-medium text-primary">
                <Truck className="w-5 h-5 text-accent" />
                Atendemos clientes em todo o Brasil, com envios seguros e pontuais.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-muted p-4 sm:p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300 border border-border/50"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-secondary rounded-xl mb-3 sm:mb-4">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 break-words">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
