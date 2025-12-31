
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5531995496218&text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20o%20projeto.";

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all transform hover:scale-110 active:scale-95 flex items-center gap-3 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="font-black text-sm uppercase tracking-wider pr-2 hidden md:block">
        WhatsApp
      </span>
      {/* Tooltip for mobile or just extra flair */}
      <span className="absolute right-full mr-4 bg-white text-blue-900 px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
        Fale com a gente!
      </span>
    </a>
  );
};

export default WhatsAppButton;
