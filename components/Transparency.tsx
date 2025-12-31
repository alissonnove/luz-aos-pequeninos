
import React from 'react';
import { ShieldCheck, Landmark, ArrowLeft, ExternalLink, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './Shared/Button';

const Transparency: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-900 font-bold mb-12 hover:gap-3 transition-all">
            <ArrowLeft className="w-5 h-5" />
            Voltar para a Home
          </Link>

          <header className="mb-16">
            <div className="inline-block p-3 bg-blue-100 rounded-2xl text-blue-900 mb-6">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight">Portal da Transparência</h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Nossa prestação de contas é aberta e acessível. Acreditamos que a confiança é a base de todo impacto social real.
            </p>
          </header>

          {/* Destaque Ético */}
          <section className="bg-blue-900 text-white p-10 md:p-12 rounded-[3rem] mb-16 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-2xl font-black mb-6 text-yellow-400">Compromisso com a Verdade</h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                Cada centavo doado ao <strong>Luz aos Pequeninos</strong> é transformado em materiais educativos, deslocamento para palestras e fortalecimento da rede de proteção. Sob a liderança de Rosane Beatriz, mantemos o rigor ético como pilar fundamental de nossa missão.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="bg-white/10 px-6 py-3 rounded-2xl border border-white/10">
                  <span className="block text-xs font-black uppercase tracking-widest text-blue-300 mb-1">Auditoria</span>
                  <span className="font-bold text-white">Conselho Fiscal Ativo</span>
                </div>
                <div className="bg-white/10 px-6 py-3 rounded-2xl border border-white/10">
                  <span className="block text-xs font-black uppercase tracking-widest text-blue-300 mb-1">Gestão</span>
                  <span className="font-bold text-white">100% Voluntária</span>
                </div>
              </div>
            </div>
            <ShieldCheck className="absolute -bottom-10 -right-10 w-64 h-64 text-white opacity-5" />
          </section>

          {/* Seção Informativa (Substituindo a lista de documentos) */}
          <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Info className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-blue-900">Documentação em Atualização</h3>
              <p className="text-slate-600 leading-relaxed">
                Estamos atualizando nossos relatórios e documentos para o ciclo de 2025. Nossa prestação de contas é constante e rigorosa. Caso necessite de alguma informação específica ou documento institucional imediato, entre em contato com nossa equipe administrativa.
              </p>
            </div>
          </section>

          {/* Footer CTA */}
          <div className="mt-16 text-center bg-slate-100 p-12 rounded-[3rem] border border-slate-200">
            <h4 className="text-xl font-black text-blue-900 mb-4">Dúvidas sobre nossa gestão?</h4>
            <p className="text-slate-600 mb-8">Nossa equipe está à disposição para esclarecer qualquer ponto sobre o uso dos recursos.</p>
            <Button to="mailto:contato@luzaospequeninos.com.br" variant="outline" className="px-8">
              Contatar Financeiro
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transparency;
