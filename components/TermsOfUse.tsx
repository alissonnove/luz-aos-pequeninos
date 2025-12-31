
import React from 'react';
import { ShieldCheck, Scale, FileText, ArrowLeft, AlertCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfUse: React.FC = () => {
  const lastUpdate = "20 de Maio de 2024";

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-900 font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" />
          Voltar para a Home
        </Link>

        <header className="mb-16">
          <div className="inline-block p-3 bg-yellow-100 rounded-2xl text-yellow-700 mb-6">
            <Scale className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight">Termos de Uso</h1>
          <p className="text-slate-500 font-medium">Regras e diretrizes para utilização da nossa plataforma.</p>
          <p className="text-xs text-slate-400 mt-4 uppercase tracking-widest font-bold">Última atualização: {lastUpdate}</p>
        </header>

        <div className="prose prose-slate max-w-none space-y-12">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-blue-900 flex items-center gap-3">
              <Info className="w-6 h-6 text-blue-600" />
              1. Aceitação dos Termos
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Ao acessar e utilizar o site <strong>Luz aos Pequeninos</strong>, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, por favor, não utilize nossa plataforma.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-blue-900 flex items-center gap-3">
              <FileText className="w-6 h-6 text-blue-600" />
              2. Propriedade Intelectual
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Todo o conteúdo disponibilizado neste site, incluindo textos, e-books, vídeos, logotipos, imagens e materiais educativos, é de propriedade exclusiva da Luz aos Pequeninos e de sua fundadora Rosane Beatriz, protegidos por leis de direitos autorais e propriedade intelectual.
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-yellow-400">
              <p className="text-sm font-bold text-slate-700 italic">
                "O material educativo (e-book) é destinado para uso pessoal e comunitário não comercial. É permitida a reprodução para fins de sensibilização social, desde que citada a fonte."
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-blue-900 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              3. Uso Responsável
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Os usuários comprometem-se a utilizar o site de forma ética, sendo proibido:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Utilizar o conteúdo para fins ilícitos ou contrários à proteção da infância.</li>
              <li>Tentar violar a segurança do site ou coletar dados de outros usuários.</li>
              <li>Utilizar os canais de contato para spam ou mensagens abusivas.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-blue-900 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-blue-600" />
              4. Isenção de Responsabilidade
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Embora nos esforcemos para manter as informações precisas e atualizadas, não nos responsabilizamos por erros técnicos ou pela interpretação indevida dos materiais fornecidos. O e-book é um material informativo e não substitui o aconselhamento profissional jurídico ou psicológico especializado.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-blue-50 p-10 rounded-[2.5rem] border border-blue-100">
            <h2 className="text-2xl font-black text-blue-900 mb-4 text-center">Contato Jurídico</h2>
            <p className="text-slate-600 leading-relaxed text-center mb-6">
              Para questões legais relacionadas ao uso desta plataforma ou solicitações de parceria institucional, entre em contato conosco.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="text-center">
                <p className="font-black text-blue-900 text-sm uppercase tracking-widest">E-mail Oficial</p>
                <a href="mailto:contato@luzaospequeninos.com.br" className="text-blue-600 font-bold hover:underline">contato@luzaospequeninos.com.br</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
