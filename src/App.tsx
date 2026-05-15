import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Zap, 
  ArrowRight,
  Clock,
  Briefcase,
  Lock,
  Plus,
  Minus,
  X
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5548920004925?text=Meu%20WhatsApp%20foi%20banido%2C%20preciso%20de%20ajuda";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const faqData = [
    {
      question: "1. O WhatsApp Business API pode banir meu número?",
      answer: "Não quando utilizado da forma correta. Trabalhamos com estrutura oficial e boas práticas alinhadas às políticas da Meta."
    },
    {
      question: "2. Vou perder minhas conversas atuais?",
      answer: "Não. A coexistência permite continuar usando o aplicativo WhatsApp normalmente enquanto conecta a API oficial."
    },
    {
      question: "3. Meu número precisa ser novo?",
      answer: "Não necessariamente. Em muitos casos é possível utilizar o número já existente da empresa."
    },
    {
      question: "4. O que acontece se meu WhatsApp já estiver restrito?",
      answer: "Analisamos o cenário e orientamos a melhor estrutura para recuperação e estabilização do número."
    },
    {
      question: "5. É complicado configurar?",
      answer: "Não. Nossa equipe realiza toda a configuração e suporte técnico necessário."
    },
    {
      question: "6. Posso continuar usando o celular normalmente?",
      answer: "Sim. A proposta da coexistência é justamente manter a operação prática e funcional no dia a dia."
    },
    {
      question: "7. Quanto tempo leva para ativar?",
      answer: "Na maioria dos casos, a ativação acontece rapidamente após validações da Meta e envio das informações necessárias."
    },
    {
      question: "8. Isso é oficial?",
      answer: "Sim. Trabalhamos com a API oficial do WhatsApp Business seguindo os padrões exigidos pela Meta."
    },
    {
      question: "9. Meu atendimento fica mais seguro?",
      answer: "Sim. A estrutura profissional reduz riscos operacionais e melhora a estabilidade da comunicação da empresa."
    },
    {
      question: "10. Posso usar automações e múltiplos atendentes?",
      answer: "Sim. A API permite integrações, automações e operação profissional com equipe."
    },
    {
      question: "11. E se eu precisar de suporte?",
      answer: "Você contará com acompanhamento técnico e suporte especializado durante toda a operação."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen selection:bg-meta-pink selection:text-white">
      {/* 1. HERO (primeira dobra) */}
      <header className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full gradient-meta blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full gradient-meta blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 font-semibold mb-8 text-sm border border-red-100">
              <AlertCircle size={18} />
              <span>ALERTA PARA EMPRESAS</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
              WhatsApp Business <span className="text-gradient-meta">Banido?</span>
              <br />
              <span className="text-3xl md:text-5xl font-bold">Recupere seu número com orientação segura</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Atendimento profissional para empresas que dependem do WhatsApp e precisam agir rápido. Não perca o contato com seus clientes.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col items-center gap-6">
              <a 
                id="hero-cta"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="no-referrer"
                className="group relative flex items-center gap-3 px-8 py-5 bg-whatsapp-green text-white font-bold rounded-2xl shadow-[0_10px_20px_-5px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(37,211,102,0.6)] transition-all transform hover:-translate-y-1 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                <MessageCircle className="group-hover:rotate-12 transition-transform" />
                <span className="text-xl">Falar com especialista no WhatsApp</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex flex-wrap justify-center gap-6 text-slate-500 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-whatsapp-green" />
                  <span>Atendimento rápido</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-whatsapp-green" />
                  <span>Baseado nas políticas da Meta</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-whatsapp-green" />
                  <span>Suporte direto e objetivo</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* 2. BLOCO DE IDENTIFICAÇÃO (conexão) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold tracking-tight">
                Se o seu WhatsApp foi banido, você já percebeu o impacto real:
              </h2>
              <ul className="space-y-4">
                {[
                  { text: "Clientes sem resposta e frustrados", icon: Clock },
                  { text: "Conversas de vendas importantes interrompidas", icon: MessageCircle },
                  { text: "Sua operação comercial totalmente pausada", icon: Zap }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-200">
                    <div className="p-2 bg-red-50 rounded-lg text-red-500 shrink-0">
                      <item.icon size={20} />
                    </div>
                    <p className="text-slate-900 font-medium">{item.text}</p>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-slate-500 font-medium italic border-l-4 border-meta-pink pl-4 mt-8">
                Em muitos casos de banimento empresarial, cada hora de inatividade faz diferença no seu faturamento.
              </p>
            </motion.div>

            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative p-8 flex justify-center items-center"
            >
              {/* Custom Phone Mockup for Ban Screen */}
              <div className="relative w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
                {/* Speaker/Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />
                
                {/* Screen Content */}
                <div className="absolute inset-0 bg-white flex flex-col pt-12">
                  <div className="p-4 flex items-center gap-3 border-b border-slate-100">
                    <div className="w-10 h-10 bg-slate-200 rounded-full" />
                    <div className="h-4 w-32 bg-slate-100 rounded" />
                  </div>
                  
                  <div className="flex-1 p-6 space-y-4 opacity-30">
                    <div className="h-12 w-3/4 bg-slate-100 rounded-2xl rounded-tl-none" />
                    <div className="h-12 w-2/3 bg-slate-100 rounded-2xl rounded-tr-none ml-auto" />
                    <div className="h-12 w-1/2 bg-slate-100 rounded-2xl rounded-tl-none" />
                  </div>

                  {/* BAN NOTIFICATION POPUP */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 z-10 backdrop-blur-sm">
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="bg-white rounded-2xl p-6 text-center shadow-2xl"
                    >
                      <AlertCircle className="mx-auto text-red-500 mb-4" size={40} />
                      <h4 className="font-bold text-slate-900 mb-2">Conta banida</h4>
                      <p className="text-sm text-slate-500 mb-6 leading-tight">
                        Esta conta não pode usar o WhatsApp porque não seguiu os termos de serviço.
                      </p>
                      <a 
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="no-referrer"
                        className="block w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-sm text-center"
                      >
                        Solicitar análise
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Decorative elements around phone */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 gradient-meta opacity-20 blur-3xl animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. BLOCO DE AUTORIDADE (sem exagero) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <ShieldCheck className="mx-auto text-meta-purple mb-6" size={48} />
            <h2 className="text-3xl font-bold mb-6">Expertise Técnica e Estratégica</h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              O banimento pode acontecer por diferentes motivos, desde padrões de envio atípicos até uso fora das diretrizes da plataforma. 
              <strong> Entender o cenário corretamente é o primeiro passo para tomar a decisão certa.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. COMO VOCÊ AJUDA (oferta clara) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full animate-pulse" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">Como podemos te ajudar</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Análise de Motivo", desc: "Identificamos o real gatilho que causou o bloqueio da sua conta.", icon: Briefcase },
              { title: "Orientação Meta", desc: "Consultoria baseada estritamente nas regras oficiais da Meta.", icon: ShieldCheck },
              { title: "Plano de Ação", desc: "Direcionamento estratégico para recuperação ou regularização.", icon: Zap },
              { title: "Prevenção", desc: "Protocolos para evitar que sua conta seja banida novamente.", icon: Lock }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-meta rounded-xl flex items-center justify-center mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 & 8. CTA PRINCIPAL / REPETIÇÃO */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-slate-50 p-10 md:p-16 rounded-[40px] border border-slate-200">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Se o seu WhatsApp é importante para o seu negócio, não vale a pena esperar.</h2>
            <p className="text-xl text-slate-500 mb-10">Recupere sua comunicação e normalize suas vendas com ajuda profissional.</p>
            
            <a 
              id="main-cta"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="no-referrer"
              className="inline-flex items-center gap-3 px-10 py-6 bg-whatsapp-green text-white font-bold rounded-2xl shadow-[0_10px_20px_-5px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(37,211,102,0.6)] transition-all transform hover:-translate-y-1 active:scale-95 text-xl"
            >
              <MessageCircle />
              <span>Falar com especialista agora</span>
            </a>
            <p className="mt-6 text-whatsapp-dark font-semibold flex items-center justify-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-whatsapp-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-whatsapp-green"></span>
              </span>
              Atendimento Imediato
            </p>
          </div>
        </div>
      </section>

      {/* 6. BLOCO DE CONFIANÇA */}
      <section className="py-20 border-t border-slate-100">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="text-meta-pink flex justify-center"><CheckCircle2 size={40} /></div>
            <h3 className="font-bold text-xl">Atendimento Direto</h3>
            <p className="text-slate-500">Sem burocracia ou intermediários. Você fala direto com quem resolve.</p>
          </div>
          <div className="space-y-4">
            <div className="text-meta-purple flex justify-center"><CheckCircle2 size={40} /></div>
            <h3 className="font-bold text-xl">Sem Promessas Irreais</h3>
            <p className="text-slate-500">Trabalhamos com fatos e política da plataforma, sem "milagres".</p>
          </div>
          <div className="space-y-4">
            <div className="text-meta-blue flex justify-center"><CheckCircle2 size={40} /></div>
            <h3 className="font-bold text-xl">Sem Riscos</h3>
            <p className="text-slate-500">Estratégias que protegem o seu número ao invés de expô-lo ainda mais.</p>
          </div>
        </div>
      </section>

      {/* PERGUNTAS FREQUENTES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-wide text-slate-800">
            Perguntas Frequentes — Echat Empresas
          </h2>
          
          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-sm border border-slate-100">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-bold text-slate-800">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus size={20} className="text-slate-600 shrink-0" />
                  ) : (
                    <Plus size={20} className="text-slate-600 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. AVISO IMPORTANTE (proteção jurídica) */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="text-slate-500 text-sm leading-relaxed mb-8 space-y-1">
            <p className="font-bold text-slate-700">Inter Comunicação e Mídia | CNPJ: 32.950.457/0001-53</p>
            <p>ROD JOSE CARLOS DAUX, 4150 sala 1 e 2 - 88032005 Saco Grande - Florianópolis SC</p>
            <p>E-mail: adm@echat.net.br | WhatsApp: +55 48 92000-4925</p>
          </div>
          
          <div className="flex justify-center gap-6 text-xs text-slate-400 font-semibold uppercase tracking-wider mb-8">
            <a 
              href="https://termosdeuso.echat.net.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-meta-pink transition-colors cursor-pointer"
            >
              Termos de Uso
            </a>
            <span className="text-slate-300">|</span>
            <a 
              href="https://politicadeprivacidade.echat.net.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-meta-pink transition-colors cursor-pointer"
            >
              Política de Privacidade
            </a>
          </div>

          <div className="pt-8 border-t border-slate-200 text-xs text-slate-400 font-medium">
            &copy; 2026 eChat Empresas. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
