
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é um assistente virtual acolhedor e informativo do projeto "Luz aos Pequeninos".
Sua sede física fica em Pirapora - MG, Brasil.
O e-mail oficial para parcerias e dúvidas é contato@luzaospequeninos.com.br.
O link oficial para contato via WhatsApp é: https://api.whatsapp.com/send?phone=5531995496218&text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20o%20projeto.

Seu objetivo é ajudar visitantes do site a entender a causa (proteção de crianças contra abuso e exploração), explicar como doar, falar sobre os projetos e o e-book.
Seja sempre empático, profissional e evite termos excessivamente pesados ou descrições explícitas de violência.
Mantenha o tom de esperança e educação.
Se o usuário perguntar sobre denúncias, oriente-os firmemente a ligar para o Disque 100 ou procurar o Conselho Tutelar local imediatamente.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Desculpe, estou com dificuldades para responder agora. Por favor, tente novamente em instantes ou entre em contato direto pelo e-mail contato@luzaospequeninos.com.br.";
  }
};
