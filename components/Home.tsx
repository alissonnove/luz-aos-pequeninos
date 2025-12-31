
import React from 'react';
import { ArrowRight, ChevronDown, Download, Sparkles, Target, Eye, ShieldCheck, Heart, MapPin, Calendar, BookOpen, Quote } from 'lucide-react';
import Button from './Shared/Button';
import { PILLARS, STATS, PROJECTS, TESTIMONIALS, FAQS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white pt-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10 py-12">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-blue-900 text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <span>Proteção Infantil Ativa</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-blue-900 leading-[0.9] tracking-tighter">
              Luz aos <br />
              <span className="text-yellow-500">Pequeninos</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-lg font-medium">
              Educação e sensibilização para proteger crianças e adolescentes. <span className="text-blue-900 font-bold">O silêncio é o aliado do abuso; a luz é a prevenção.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/doar" className="px-10 py-4 text-lg">Quero Ajudar</Button>
              <Button to="/ebook" variant="secondary" className="px-10 py-4 text-lg">Baixar E-book</Button>
            </div>
          </div>
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="absolute -inset-10 bg-gradient-to-tr from-yellow-400/20 to-blue-400/20 rounded-full blur-3xl opacity-50"></div>
            <img 
              src="https://i.ibb.co/8DLykxTz/Screenshot-2025-12-30-at-20-25-06-1-Instagram.png" 
              alt="Proteção Infantil - Luz aos Pequeninos" 
              className="rounded-[3rem] shadow-2xl relative z-10 border-[12px] border-white w-full object-cover aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {PILLARS.map((p, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-slate-100 group">
                <div className="mb-8 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-500">
                  {p.icon}
                </div>
                <h3 className="text-2xl font-black text-blue-900 mb-4">{p.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated About Section - Autobiographical Focus */}
      <section id="sobre" className="py-32 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-5/12 relative">
              <div className="absolute -inset-4 bg-yellow-400 rounded-[4rem] rotate-3 -z-10 opacity-20"></div>
              <img 
                src="https://i.ibb.co/jvhKsD62/Rosane.jpg" 
                alt="Rosane Beatriz - Fundadora" 
                className="rounded-[3rem] shadow-2xl w-full aspect-[4/5] object-cover border-8 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-8 rounded-3xl shadow-xl">
                <p className="text-sm font-black uppercase tracking-widest text-yellow-400">Rosane Beatriz</p>
                <p className="text-xs font-bold opacity-80 italic">"Nana" - Fundadora</p>
              </div>
            </div>
            
            <div className="lg:w-7/12 space-y-8">
              <span className="text-blue-900 font-black uppercase tracking-widest text-xs bg-blue-100 px-4 py-2 rounded-full inline-block">Nossa História</span>
              <h2 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight">Uma vida dedicada a transformar <span className="text-yellow-500">dor em luz.</span></h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Sou <strong>Rosane Beatriz dos Santos</strong>, carinhosamente conhecida como Nana. Minha jornada com o Luz aos Pequeninos nasceu de uma experiência profunda de superação. Natural de Diamantina-MG e cientista social por formação, entendi que minha missão era proteger o futuro daqueles que ainda não podem se defender sozinhos.
                </p>
                <p>
                  Após enfrentar o trauma do abuso na infância, encontrei minha cura completa através da fé em 2003. Essa restauração gerou em mim o chamado para servir: desde 2017, utilizo minha vivência e formação acadêmica para sensibilizar famílias e comunidades sobre a importância vital da prevenção.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <Target className="w-6 h-6 text-blue-900 shrink-0" />
                  <div>
                    <h4 className="font-black text-blue-900 text-sm uppercase">O Chamado</h4>
                    <p className="text-xs text-slate-500">Missões e sensibilização desde 2017.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <MapPin className="w-6 h-6 text-blue-900 shrink-0" />
                  <div>
                    <h4 className="font-black text-blue-900 text-sm uppercase">Base em Pirapora</h4>
                    <p className="text-xs text-slate-500">Atuando na terra natal de minha família.</p>
                  </div>
                </div>
              </div>

              <Button to="/sobre" variant="outline" className="px-8">Conhecer a Biografia Completa</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-800 to-transparent opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {STATS.map((s, idx) => (
              <div key={idx} className="space-y-3">
                <div className="text-5xl md:text-6xl font-black text-yellow-400">{s.value}</div>
                <div className="text-blue-200 font-bold uppercase tracking-[0.2em] text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Projects Section */}
      <section id="projetos" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <header className="mb-20 text-center max-w-3xl mx-auto">
            <span className="text-yellow-600 font-black uppercase tracking-widest text-xs bg-yellow-100 px-4 py-2 rounded-full mb-6 inline-block">Impacto Real</span>
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">Projetos em Campo</h2>
            <p className="text-slate-600 text-lg">Transformamos doações em ações diretas de proteção. Conheça as frentes que sustentam nossa missão.</p>
          </header>

          <div className="max-w-6xl mx-auto space-y-12">
            {PROJECTS.map(p => (
              <div key={p.id} className="bg-slate-50 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-slate-100 grid md:grid-cols-12">
                <div className="md:col-span-5 relative group">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover min-h-[300px] md:min-h-full transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-6 left-6">
                    <span className="px-5 py-2 rounded-xl bg-yellow-400 text-blue-900 text-[10px] font-black uppercase tracking-widest shadow-xl">{p.category}</span>
                  </div>
                </div>
                <div className="md:col-span-7 p-10 lg:p-16 flex flex-col justify-center bg-white md:bg-transparent">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-3 h-3 rounded-full ${p.status === 'em andamento' ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}`}></div>
                    <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{p.status}</span>
                  </div>
                  <h3 className="text-4xl font-black text-blue-900 mb-6 group-hover:text-blue-700 transition-colors">{p.title}</h3>
                  <p className="text-slate-600 text-xl leading-relaxed italic mb-10">"{p.description}"</p>
                  <div className="flex flex-wrap gap-4 mb-10">
                    <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-2xl border border-slate-100">
                      <MapPin className="w-5 h-5 text-blue-900" />
                      <span className="text-sm font-bold text-slate-700">{p.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button to="/doar" className="px-10">Apoiar Projeto</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-book Promo */}
      <section className="py-32 bg-blue-950 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-blue-900 rounded-[4rem] p-10 md:p-20 relative flex flex-col lg:flex-row items-center gap-16 shadow-2xl border border-white/5">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 text-yellow-400 font-black uppercase tracking-widest text-xs">
                <Download className="w-5 h-5" />
                <span>Material Gratuito</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Guia de <br />
                <span className="text-yellow-400">Prevenção 2025</span>
              </h2>
              <p className="text-blue-100 text-xl leading-relaxed opacity-80">
                Aprenda a identificar sinais sutis, acolher denúncias e fortalecer a rede de proteção infantil.
              </p>
              <Button to="/ebook" variant="secondary" className="px-12 py-5 text-lg">Acessar Guia Completo</Button>
            </div>
            <div className="lg:w-1/2 perspective-1000">
              <img 
                src="https://i.ibb.co/BHPBfKVQ/capa-ebook.jpg" 
                alt="Ebook" 
                className="rounded-3xl shadow-2xl transform rotate-y-6 rotate-x-2 hover:rotate-0 transition-transform duration-1000 max-w-sm mx-auto border-[12px] border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-blue-900 text-center mb-20">Vozes de Impacto</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-white p-12 rounded-[3rem] relative group hover:bg-blue-50 transition-colors shadow-sm">
                <div className="flex flex-col h-full">
                  <p className="text-slate-600 italic mb-10 leading-relaxed text-xl">"{t.content}"</p>
                  <div className="flex items-center gap-4 pt-8 border-t border-slate-100">
                    <img src={t.image} className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all shadow-md" alt={t.name} />
                    <div>
                      <h4 className="font-black text-blue-900">{t.name}</h4>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-black text-blue-900 text-center mb-16">Dúvidas Comuns</h2>
          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group border border-slate-200 rounded-[2rem] bg-white overflow-hidden open:shadow-xl transition-all">
                <summary className="p-8 cursor-pointer flex items-center justify-between font-black text-blue-900 list-none text-xl">
                  {faq.q}
                  <div className="bg-slate-100 p-2 rounded-full group-open:rotate-180 transition-transform group-open:bg-yellow-400">
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </summary>
                <div className="px-8 pb-8 text-slate-600 text-lg leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .rotate-y-6 { transform: rotateY(-10deg); }
        .rotate-x-2 { transform: rotateX(2deg); }
      `}</style>
    </div>
  );
};

export default Home;
