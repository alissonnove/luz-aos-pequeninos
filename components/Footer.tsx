
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-blue-50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center -ml-2">
              <img 
                src="https://i.ibb.co/HLYMrTY8/logo-luz-aos-pequeninos-sem-fundo.png" 
                alt="Luz aos Pequeninos" 
                className="h-20 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-blue-200 leading-relaxed">
              Educação e sensibilização para proteger crianças e adolescentes do abuso e da exploração sexual.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-yellow-400">Navegação</h4>
            <ul className="space-y-4">
              <li><Link to="/sobre" className="hover:text-yellow-400 transition-colors">Sobre nós</Link></li>
              <li><Link to="/projetos" className="hover:text-yellow-400 transition-colors">Projetos</Link></li>
              <li><Link to="/transparencia" className="hover:text-yellow-400 transition-colors">Transparência</Link></li>
              <li><Link to="/doar" className="hover:text-yellow-400 transition-colors">Doar agora</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-yellow-400">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <a href="mailto:contato@luzaospequeninos.com.br" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Mail className="w-5 h-5 text-blue-300" />
                  contato@luzaospequeninos.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-300" />
                <span>Pirapora - MG</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-yellow-400">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/luzaospequeninos/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-blue-800 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all"
                aria-label="Acompanhe-nos no Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100090157215974" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-blue-800 rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all"
                aria-label="Acompanhe-nos no Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <div 
                className="p-3 bg-blue-800/50 rounded-full text-blue-300 cursor-not-allowed relative group/social"
                title="Youtube: Em breve"
              >
                <Youtube className="w-5 h-5" />
                <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-white text-blue-900 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover/social:opacity-100 transition-opacity whitespace-nowrap shadow-2xl border border-blue-100 pointer-events-none">
                  Em breve
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-blue-300">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} Luz aos Pequeninos. Todos os direitos reservados.</p>
            <p className="mt-1 text-xs opacity-70">
              Feito com ❤️ por <a href="https://adeptaautomacao.com.br" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 font-bold transition-colors">Adepta</a>
            </p>
          </div>
          <div className="flex gap-8">
            <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-white transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
