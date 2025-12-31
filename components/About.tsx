
import React from 'react';
import { Target, Eye, ShieldCheck, Heart, MapPin, GraduationCap, Briefcase, Sparkles, Quote, Users, Cross } from 'lucide-react';
import Button from './Shared/Button';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Biográfico */}
          <section className="mb-20 text-center">
            <span className="text-blue-900 font-black uppercase tracking-widest text-xs bg-blue-100 px-4 py-2 rounded-full mb-6 inline-block">História de Vida e Missão</span>
            <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-6">Rosane Beatriz <br/><span className="text-yellow-500">dos Santos</span></h1>
            <p className="text-xl text-slate-500 font-medium italic">"Conhecida carinhosamente como Nana, transformando o silêncio em luz."</p>
          </section>

          {/* Seção 1: Origens e Família */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-blue-900 flex items-center gap-3">
                <Users className="text-yellow-500" />
                Raízes
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Nascida em 30 de janeiro de 1961 na histórica cidade de <strong>Diamantina-MG</strong>, sou filha de Rui José dos Santos e Geraldina Hudson Santos. Cresci em uma família numerosa ao lado de meus 6 irmãos.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Hoje, aos 64 anos, resido em <strong>Pirapora-MG</strong>, terra natal do meu pai, onde mantenho minha base de vida e trabalho na Avenida João Cotta Sobrinho, no Bairro Industrial.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] -rotate-2"></div>
              <img 
                src="https://i.ibb.co/jvhKsD62/Rosane.jpg" 
                alt="Rosane Beatriz" 
                className="relative z-10 rounded-[2.5rem] shadow-xl w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Seção 2: Formação e Carreira */}
          <section className="bg-slate-50 p-12 md:p-16 rounded-[4rem] mb-24 border border-slate-100">
            <h2 className="text-3xl font-black text-blue-900 mb-8 flex items-center gap-3">
              <GraduationCap className="text-yellow-500" />
              Trajetória Profissional
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Morei em <strong>Montes Claros-MG</strong> por 14 anos, período em que me dediquei à vida acadêmica. Entre 1982 e 1986, realizei minha formação em <strong>Ciências Sociais</strong> pela Faculdade de Filosofia (FAFIL/UNIMONTES).
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Posteriormente, vivi em Belo Horizonte por 8 anos, atuando como Funcionária Pública na <strong>CEMIG (Cia. Energética de Minas Gerais)</strong>, instituição pela qual hoje sou aposentada, o que me permitiu abraçar meu chamado missionário integralmente.
                </p>
              </div>
            </div>
          </section>

          {/* Seção 3: Superação e Fé - O ponto central */}
          <section className="mb-24 space-y-12">
            <div className="bg-blue-900 text-white p-12 md:p-16 rounded-[4rem] relative overflow-hidden shadow-2xl">
              <Quote className="absolute top-12 right-12 w-24 h-24 text-white opacity-10" />
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-8 text-yellow-400">Do Trauma à Cura</h3>
                <div className="space-y-6 text-lg text-blue-100 leading-relaxed">
                  <p>
                    Aos 7 anos de idade, vivi o trauma do abuso sexual em Pirapora, cometido por vizinhos. Essa dor também atingiu minha irmã mais nova e nos levou a longos processos terapêuticos com psicólogos e analistas.
                  </p>
                  <p className="text-white font-bold text-xl">
                    Minha cura total manifestou-se em 2003, quando entreguei minha vida a Jesus Cristo na Igreja Batista Filadélfia, em Montes Claros.
                  </p>
                  <p>
                    Através do ministério do <strong>Pastor Sílvio Cerqueira e sua esposa, irmã Rita</strong>, encontrei o apoio e a restauração que hoje me permitem ser instrumento de ajuda para outros.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção 4: O Chamado e Temáticas */}
          <div className="space-y-12 mb-24">
            <header className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-black text-blue-900 mb-4">O Chamado: Luz aos Pequeninos</h2>
              <p className="text-slate-500">Fundado em 2017, unindo formação acadêmica, experiência de vida e fé.</p>
            </header>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Prevenção ao Abuso', desc: 'Combate direto à exploração sexual infantil através da sensibilização.' },
                { title: 'Violência Doméstica', desc: 'Ações e orientações para prevenção e proteção no ambiente familiar.' },
                { title: 'Processo Educativo', desc: 'Utilização das tarefas domésticas como ferramenta de educação e valores.' },
                { title: 'Mulher de Valor', desc: 'Empoderamento e restauração da identidade feminina sob a ótica cristã.' }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-black text-blue-900 mb-3 uppercase tracking-wider text-sm">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visão de Futuro */}
          <section className="text-center bg-yellow-400 p-12 md:p-20 rounded-[4rem] shadow-xl shadow-yellow-400/20">
            <div className="flex justify-center mb-8">
              <Sparkles className="w-12 h-12 text-blue-900" />
            </div>
            <h2 className="text-4xl font-black text-blue-900 mb-6">O Sonho Continua</h2>
            <p className="text-blue-900/80 text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Trabalho diariamente para que o <strong>Luz aos Pequeninos</strong> alcance todo o Brasil, preparando crianças, adolescentes, mulheres e famílias para uma vida estruturada em todos os aspectos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/doar" className="px-12 py-5 text-lg">Apoiar esta Causa</Button>
              <Button to="/" variant="outline" className="px-12 py-5 text-lg border-blue-900 text-blue-900">Voltar ao Início</Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
