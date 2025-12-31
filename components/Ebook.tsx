
import React, { useState } from 'react';
import { CheckCircle, Download, BookOpen, FileText } from 'lucide-react';
import Button from './Shared/Button';

const Ebook: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // URLs Finais
  const ebookCover = "https://i.ibb.co/BHPBfKVQ/capa-ebook.jpg";
  const ebookDownloadLink = "https://drive.google.com/uc?export=download&id=1FzV92OJLrR-xAAfdUajWAJBnh0ZUWtCj";

  const benefits = [
    'Como conversar com crianças sobre o tema',
    'Sinais físicos e comportamentais de alerta',
    'O papel da escola e da família no acolhimento',
    'Canais oficiais de denúncia e rede de apoio',
    'Mitos e verdades sobre a prevenção'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          {/* Visual Side with Refined 3D Book Effect */}
          <div className="relative group perspective-1000 hidden md:block">
            {/* Ambient Glow */}
            <div className="absolute -inset-20 bg-blue-400/10 rounded-full blur-[120px] group-hover:bg-blue-400/20 transition-all duration-1000"></div>
            
            <div className="relative w-full max-w-[400px] mx-auto transform rotate-y-6 rotate-x-2 group-hover:rotate-y-2 group-hover:rotate-x-0 transition-all duration-1000 ease-out">
              
              {/* Page Edges (Depth Effect) */}
              <div className="absolute top-[2%] right-[-12px] bottom-[2%] w-[20px] bg-slate-100 border-y border-r border-slate-200 rounded-r-sm shadow-inner z-0 flex flex-col justify-around py-2 opacity-80">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="h-[1px] w-full bg-slate-300/30"></div>
                ))}
              </div>

              {/* Book Spine */}
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 rounded-l-lg shadow-[inset_-4px_0_12px_rgba(0,0,0,0.6)] z-20">
                <div className="absolute inset-y-0 left-2 w-[1px] bg-white/10"></div>
              </div>
              
              {/* Cover Container */}
              <div className="relative z-10 overflow-hidden rounded-r-2xl rounded-l-lg shadow-[30px_35px_70px_-15px_rgba(0,0,0,0.4)] border-y border-r border-blue-900/10 ml-5">
                <div className="bg-white">
                  <div className="relative aspect-[3/4.2] overflow-hidden">
                    <img 
                      src={ebookCover} 
                      alt="Guia de Prevenção 2025" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Real-time reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-60 pointer-events-none"></div>
                    {/* Spine crease shadow */}
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/20 blur-[1px]"></div>
                  </div>
                </div>
              </div>

              {/* PDF Floating Tag */}
              <div className="absolute -bottom-6 -right-10 bg-yellow-400 text-blue-900 px-8 py-5 rounded-[2rem] shadow-2xl z-30 font-black flex flex-col items-center animate-bounce-slow border-4 border-white rotate-6 group-hover:rotate-0 transition-transform">
                <span className="text-2xl leading-none">PDF</span>
                <span className="text-[10px] uppercase tracking-[0.2em] mt-1 font-black">Download</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-900 text-xs font-black uppercase tracking-widest">
                <BookOpen className="w-4 h-4" />
                <span>Educação é Proteção</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-blue-900 leading-tight">
                Proteja quem você ama com <span className="text-yellow-500">informação</span> de verdade.
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Baixe gratuitamente o nosso guia 2025 e aprenda a fortalecer a rede de proteção em sua comunidade.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="font-black text-blue-900 text-sm uppercase tracking-widest">O que você encontrará no guia:</h3>
              <ul className="grid sm:grid-cols-1 gap-4">
                {benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-blue-50 transition-colors">
                    <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="text-slate-700 font-semibold leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-blue-900 p-8 md:p-10 rounded-[3.5rem] space-y-6 shadow-2xl relative overflow-hidden group/form">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover/form:bg-yellow-400/20 transition-all"></div>
                <h4 className="font-black text-white text-xl">Receba agora o seu acesso:</h4>
                <div className="grid gap-4">
                  <input 
                    type="text" 
                    placeholder="Seu nome completo" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:bg-white focus:text-blue-900 focus:outline-none transition-all"
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Seu melhor e-mail" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:bg-white focus:text-blue-900 focus:outline-none transition-all"
                    required
                  />
                </div>
                <Button type="submit" variant="secondary" className="w-full py-5 text-lg font-black group">
                  LIBERAR E-BOOK <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </Button>
                <p className="text-[10px] text-blue-300 text-center font-bold uppercase tracking-widest">Respeitamos sua privacidade. Seus dados estão seguros.</p>
              </form>
            ) : (
              <div className="bg-green-50 border-2 border-green-100 p-10 rounded-[3rem] text-center space-y-8 animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                  <FileText className="w-12 h-12" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-3xl font-black text-blue-900">Sucesso, {name.split(' ')[0]}!</h4>
                  <p className="text-slate-600 font-medium text-lg leading-relaxed">
                    Sua jornada de conhecimento começa aqui. O material está pronto para você.
                  </p>
                  
                  <a 
                    href={ebookDownloadLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-blue-900 text-white px-8 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-4 hover:bg-blue-800 shadow-2xl transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <Download className="w-6 h-6" />
                    BAIXAR E-BOOK AGORA
                  </a>
                </div>
                <button onClick={() => setSubmitted(false)} className="text-slate-400 text-xs font-black hover:text-blue-900 transition-colors uppercase tracking-[0.2em]">Usar outro e-mail</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .rotate-y-6 { transform: rotateY(-12deg); }
        .rotate-y-2 { transform: rotateY(-4deg); }
        .rotate-x-2 { transform: rotateX(2deg); }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Ebook;
