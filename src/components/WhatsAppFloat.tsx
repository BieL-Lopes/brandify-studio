import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const whatsappLink = "https://wa.me/5561991029997?text=Olá! Gostaria de solicitar um orçamento para brindes personalizados.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-pulse-soft"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </a>
  );
};

export default WhatsAppFloat;
