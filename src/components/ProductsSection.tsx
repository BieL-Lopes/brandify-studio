import { Check } from "lucide-react";
import productSacola from "@/assets/product-sacola.png";
import productAdesivos from "@/assets/product-adesivos.png";
import productCanetas from "@/assets/product-canetas.png";

const products = [
  { name: "Adesivos personalizados", description: "Divulgação prática para marcas e campanhas" },
  { name: "Agendas personalizadas", description: "Ideais para uso corporativo e brindes institucionais" },
  { name: "Canetas personalizadas", description: "Clássico do marketing promocional, ótimo custo-benefício" },
  { name: "Lápis personalizados", description: "Perfeitos para escolas e ações educativas" },
  { name: "Canecas de acrílico", description: "Resistentes e ideais para eventos e campanhas" },
  { name: "Copos de acrílico", description: "Muito utilizados em festas, eventos e ações promocionais" },
  { name: "Calendários personalizados", description: "Sua marca presente o ano inteiro" },
  { name: "Folhinhas personalizadas", description: "Tradicionais, funcionais e de grande alcance visual" },
  { name: "Sacolas personalizadas", description: "Divulgação prática e sustentável" },
  { name: "Porta-documentos", description: "Organização com identidade visual profissional" },
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-20 bg-muted">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary text-primary text-sm font-semibold rounded-full mb-4">
            🎁 Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Brindes Personalizados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Atendemos desde pequenas quantidades até grandes volumes, sempre com o mesmo padrão de qualidade.
          </p>
        </div>

        {/* Product Gallery */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="group relative overflow-hidden rounded-2xl bg-background shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-square overflow-hidden">
              <img
                src={productSacola}
                alt="Sacolas personalizadas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-primary-foreground">
                <h3 className="font-bold text-lg">Sacolas Personalizadas</h3>
                <p className="text-sm opacity-90">Divulgação prática e sustentável</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-background shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-square overflow-hidden">
              <img
                src={productAdesivos}
                alt="Adesivos personalizados"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-primary-foreground">
                <h3 className="font-bold text-lg">Adesivos Personalizados</h3>
                <p className="text-sm opacity-90">Divulgação para marcas e campanhas</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl bg-background shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="aspect-square overflow-hidden">
              <img
                src={productCanetas}
                alt="Canetas personalizadas"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-primary-foreground">
                <h3 className="font-bold text-lg">Canetas Personalizadas</h3>
                <p className="text-sm opacity-90">Clássico do marketing promocional</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="bg-background rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
            ✅ Todos os nossos produtos
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-muted transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{product.name}</h4>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
