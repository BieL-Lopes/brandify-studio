import { Phone, MessageCircle, MapPin } from "lucide-react";
import kgLogo from "@/assets/kg-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={kgLogo} 
              alt="KG Serigrafia" 
              className="h-20 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/70 text-center md:text-left">
              Desde 1996 transformando marcas em presença.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="tel:+556130827723" 
                className="flex items-center justify-center gap-2 hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (61) 3082-7723
              </a>
              <a 
                href="https://wa.me/5561991029997" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:text-secondary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                (61) 99102-9997
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="text-center md:text-right">
            <h3 className="font-bold text-lg mb-4">Localização</h3>
            <div className="flex items-center justify-center md:justify-end gap-2 text-primary-foreground/70">
              <MapPin className="w-4 h-4" />
              <span>Brasília - DF</span>
            </div>
            <p className="text-sm text-primary-foreground/60 mt-2">
              Atendemos todo o Brasil
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} KG Serigrafia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
