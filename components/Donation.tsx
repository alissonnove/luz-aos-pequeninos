
import React, { useState } from 'react';
import { CreditCard, QrCode, Receipt, Heart, ShieldCheck, X, Check, Copy, Mail } from 'lucide-react';
import { DONATION_TIERS } from '../constants';
import Button from './Shared/Button';

const Donation: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const [showPixModal, setShowPixModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Link da imagem PIX final fornecida
  const pixImageUrl = "https://i.ibb.co/FNjrDBx/pix-rosane.png";
  const pixKey = "38991997670";

  const handleCopyKey = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <header className="text-center mb-16">
          <div className="inline-block p-4 bg-blue-100 rounded-full text-blue-900 mb-6 shadow-sm">
            <Heart className="w-8 h-8 fill-blue-900" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 tracking-tight">Faça a sua luz brilhar</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Sua doação mantém nossas ações educativas vivas. Escolha o valor que mais se alinha ao seu desejo de ajudar.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {DONATION_TIERS.map((tier, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedTier(tier.amount)}
              className={`p-8 rounded-[2.5rem] border-2 transition-all cursor-pointer bg-white group relative overflow-hidden ${
                selectedTier === tier.amount 
                ? 'border-blue-900 shadow-2xl scale-105 z-10' 
                : 'border-white hover:border-blue-100 shadow-sm'
              }`}
            >
              {selectedTier === tier.amount && (
                <div className="absolute top-4 right-4 bg-blue-900 text-white p-1 rounded-full">
                  <Check className="w-4 h-4" />
                </div>
              )}
              <h3 className="text-sm font-black text-slate-400 mb-2 uppercase tracking-widest">{tier.label}</h3>
              <div className="text-4xl font-black text-blue-900 mb-4">R$ {tier.amount}</div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {tier.impact}
              </p>
            </div>
          ))}
        </div>

        {/* Custom Value & Methods */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-blue-900/5 border border-slate-100 overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-blue-900 mb-8">Valor personalizado</h3>
              <div className="relative mb-8">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 font-black text-xl">R$</span>
                <input 
                  type="number" 
                  placeholder="0,00"
                  className="w-full pl-16 pr-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-blue-900 focus:outline-none text-3xl font-black text-blue-900"
                />
              </div>
              <Button className="w-full py-5 text-xl font-black" onClick={() => setShowPixModal(true)}>Confirmar Doação</Button>
              <p className="mt-4 text-center text-xs text-slate-400 font-bold uppercase tracking-widest">Segurança Garantida</p>
            </div>

            <div className="space-y-8 relative z-10">
              <h3 className="text-2xl font-black text-blue-900 mb-6">Método de pagamento</h3>
              <div className="space-y-4">
                <button 
                  onClick={() => setShowPixModal(true)}
                  className="w-full flex items-center gap-5 p-5 rounded-3xl border-2 border-slate-50 hover:border-blue-900 hover:bg-blue-50/30 transition-all group text-left bg-white shadow-sm"
                >
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors"><QrCode /></div>
                  <div className="flex-grow">
                    <h4 className="font-black text-lg text-blue-900">PIX Instantâneo</h4>
                    <p className="text-sm text-slate-500">Liberação imediata</p>
                  </div>
                </button>
                
                <div className="flex items-center gap-5 p-5 rounded-3xl border-2 border-slate-50 opacity-50 cursor-not-allowed bg-slate-50">
                  <div className="p-4 bg-white rounded-2xl text-slate-400"><CreditCard /></div>
                  <div className="flex-grow">
                    <h4 className="font-black text-lg text-slate-400">Cartão de Crédito</h4>
                    <p className="text-sm text-slate-400">Em breve</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 p-5 rounded-3xl border-2 border-slate-50 opacity-50 cursor-not-allowed bg-slate-50">
                  <div className="p-4 bg-white rounded-2xl text-slate-400"><Receipt /></div>
                  <div className="flex-grow">
                    <h4 className="font-black text-lg text-slate-400">Boleto</h4>
                    <p className="text-sm text-slate-400">Em breve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center text-slate-500 space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-green-50 rounded-full text-green-700 font-bold text-sm border border-green-100">
            <ShieldCheck className="w-5 h-5" />
            Transação 100% segura e auditada
          </div>
          <p className="max-w-xl mx-auto text-xs leading-relaxed opacity-70">
            Luz aos Pequeninos • CHAVE PIX: 38991997670<br />
            Precisa de ajuda? <a href="mailto:contato@luzaospequeninos.com.br" className="font-bold text-blue-900 hover:underline inline-flex items-center gap-1">
              <Mail className="w-3 h-3" />
              contato@luzaospequeninos.com.br
            </a>
          </p>
        </div>
      </div>

      {/* PIX Modal - Adjusted to be smaller and more fitted */}
      {showPixModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm" 
            onClick={() => setShowPixModal(false)}
          ></div>
          
          <div className="bg-white rounded-[2.5rem] p-6 md:p-8 max-w-sm w-full relative z-10 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.4)] animate-in zoom-in-95 duration-500 ease-out">
            <button 
              onClick={() => setShowPixModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-blue-900 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-2xl font-black text-blue-900 mb-1">Doação via PIX</h3>
                <p className="text-slate-500 text-xs font-medium">Escaneie o QR Code abaixo</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-3xl border-2 border-dashed border-slate-200">
                <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white p-2">
                  <img 
                    src={pixImageUrl} 
                    alt="PIX QR Code" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={handleCopyKey}
                  className="w-full p-3 bg-blue-50 rounded-xl border border-blue-100 flex items-center justify-between hover:bg-blue-100 transition-colors"
                >
                  <div className="text-left">
                    <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest">CHAVE PIX</p>
                    <p className="text-blue-900 font-black text-sm">{pixKey}</p>
                  </div>
                  <div className="bg-white p-1.5 rounded-lg text-blue-900 shadow-sm flex items-center gap-1.5 px-2 text-[10px] font-bold">
                    {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                    {copied ? 'Copiado' : 'Copiar'}
                  </div>
                </button>
                
                <Button 
                  onClick={() => setShowPixModal(false)} 
                  className="w-full py-4 text-base"
                >
                  Concluir
                </Button>
                
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.1em]">Obrigado por sua generosidade!</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
