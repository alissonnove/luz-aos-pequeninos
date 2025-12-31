
import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const lastUpdate = "20 de Maio de 2024";

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-900 font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft className="w-5 h-5" />
          Voltar para a Home
        </Link>

        <header className="mb-16">
          <div className="inline-block p-3 bg-blue-100 rounded-2xl text-blue-900 mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight">Política de Privacidade</h1>
          <p className="text-slate-500 font-medium">Conformidade com a Lei Geral de Proteção de Dados (LGPD)</p>
          <p className="text-xs text-slate-400 mt-4 uppercase tracking-widest font-bold">Última atualização: {lastUpdate}</p>
        </header>

        <div className="prose prose-slate max-w-none space-y-12">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-blue-900 flex items-center gap-3">
              <Eye className="w-6 h-6 text-yellow-500" />
              1. Introdução
            </h2>
            <p className="text-slate-600 leading-relaxed">
              <strong>Luz aos Pequeninos</strong> valoriza a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais ao utilizar nosso site, especialmente ao solicitar materiais educativos como nosso e-book. Estamos comprometidos com a transparência e com a segurança dos seus dados em total conformidade com a Lei Federal nº 13.709/2018 (LGPD).
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-blue-900 flex items-center gap-3">
              <FileText className="w-6 h-6 text-yellow-500" />
              2. Dados que Coletamos
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Coletamos apenas os dados necessários para cumprir as finalidades descritas nesta política. Ao preencher nosso formulário de e-book, coletamos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Nome Completo:</strong> Para personalização do atendimento e identificação.</li>
              <li><strong>E-mail:</strong> Para o envio do material solicitado e comunicações sobre nossas causas.</li>
              <li><strong>Dados de Navegação (Cookies):</strong> Para entender como o site é utilizado e melhorar sua experiência (através de ferramentas como Google Analytics).</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-blue-900 flex items-center gap-3">
              <Lock className="w-6 h-6 text-yellow-500" />
              3. Finalidade do Tratamento
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Seus dados são tratados com as seguintes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Envio do e-book e materiais educativos solicitados por você.</li>
              <li>Comunicações institucionais sobre projetos, campanhas e impacto social.</li>
              <li>Processamento de doações e emissão de comprovantes, quando aplicável.</li>
              <li>Melhoria contínua da navegabilidade e conteúdo do site.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-blue-900 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-yellow-500" />
              4. Seus Direitos (LGPD)
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Como titular dos dados, a LGPD lhe garante direitos que podem ser exercidos a qualquer momento mediante solicitação por e-mail:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
              {[
                "Confirmação da existência de tratamento.",
                "Acesso aos seus dados.",
                "Correção de dados incompletos ou inexatos.",
                "Eliminação de dados tratados com seu consentimento.",
                "Revogação do consentimento.",
                "Portabilidade dos dados."
              ].map((item, i) => (
                <li key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm font-semibold text-slate-700 flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-blue-900 flex items-center gap-3">
              <Lock className="w-6 h-6 text-yellow-500" />
              5. Segurança dos Dados
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Adotamos medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração ou comunicação. Utilizamos criptografia e servidores seguros para armazenar suas informações.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-blue-900 text-white p-10 rounded-[2.5rem] space-y-6">
            <h2 className="text-2xl font-black">6. Contato e Encarregado de Dados</h2>
            <p className="text-blue-100 leading-relaxed">
              Para exercer seus direitos ou tirar dúvidas sobre esta Política de Privacidade, entre em contato com nosso Encarregado de Proteção de Dados (DPO):
            </p>
            <div className="pt-4 space-y-2">
              <p className="font-bold">E-mail: <a href="mailto:contato@luzaospequeninos.com.br" className="text-yellow-400 hover:underline">contato@luzaospequeninos.com.br</a></p>
              <p className="font-bold">Localização: Pirapora - MG, Brasil</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
