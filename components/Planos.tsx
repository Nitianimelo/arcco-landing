'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Users, Database, HeadphonesIcon, Shield, Infinity, Clock, Check, TrendingUp, Search, HardDrive, FileText, Image } from 'lucide-react'

const planos = [
  {
    name: 'Starter',
    description: 'Um time de especialistas trabalhando 24/7 no seu negócio.',
    price: '129',
    period: '/mês',
    features: [
      { icon: Zap, text: 'Acesso a +50 Modelos de IA', description: 'Os melhores LLMs do mercado em um único lugar.', included: true },
      { icon: Clock, text: 'Arcco Agente', description: 'Mais que um chat, um assistente virtual focado em execução.', included: true },
      { icon: Image, text: 'Estúdio de Design Integrado', description: 'Geração de posts e carrosséis profissionais em segundos.', included: true },
      { icon: FileText, text: 'Geração de Arquivos', description: 'Crie propostas em PDF, contratos e planilhas prontas para baixar.', included: true },
      { icon: TrendingUp, text: 'Inteligência de Mercado', description: 'Espione concorrentes e obtenha dados avançados de tráfego.', included: true },
      { icon: Users, text: 'Auditoria de Instagram', description: 'Análise completa de perfil por URL com plano de ação.', included: true },
      { icon: HardDrive, text: 'Arcco Drive (2GB)', description: 'Cofre digital para armazenar com segurança tudo o que a IA gerar.', included: true },
    ],
    popular: false,
    cta: 'Começar Agora',
  },
  {
    name: 'Pro',
    description: 'Para empresas em crescimento que desejam escalar.',
    price: '97',
    period: '/mês',
    features: [
      { icon: Zap, text: '5 Automações Inteligentes', included: true },
      { icon: Database, text: '5 Bancos de Conhecimento', included: true },
      { icon: Infinity, text: 'Iterações Ilimitadas', included: true },
      { icon: Users, text: '10 Usuários no Time', included: true },
      { icon: HeadphonesIcon, text: 'Suporte Prioritário', included: true },
      { icon: Shield, text: 'Integração WhatsApp', included: true },
      { icon: Clock, text: 'Analytics Avançado', included: true },
    ],
    popular: true,
    cta: 'Começar Agora',
  },
  {
    name: 'Enterprise',
    description: 'Projetado para grandes organizações e automações complexas.',
    price: '297',
    period: '/mês',
    features: [
      { icon: Zap, text: 'Automações Ilimitadas', included: true },
      { icon: Database, text: 'Bancos de Conhecimento Ilimitados', included: true },
      { icon: Infinity, text: 'Iterações Ilimitadas', included: true },
      { icon: Users, text: '50+ Usuários no Time', included: true },
      { icon: HeadphonesIcon, text: 'Suporte 24/7 Dedicado', included: true },
      { icon: Shield, text: 'Integrações Customizadas', included: true },
      { icon: Clock, text: 'API e Webhooks', included: true },
      { icon: Shield, text: 'SLA Garantido', included: true },
    ],
    popular: false,
    cta: 'Falar com Vendas',
  },
]

export default function Planos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="planos" className="relative py-24 overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary-foreground/90 mb-4 backdrop-blur-sm">
            <span className="text-sm font-medium">Preços Simples</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Escolha o plano ideal para{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              seu negócio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Planos flexíveis que crescem junto com sua empresa. Comece grátis e evolua conforme necessário.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {planos.map((plano, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${plano.popular
                  ? 'z-10 md:-mt-4 md:mb-4'
                  : ''
                }`}
            >
              {/* Popular Badge */}
              {plano.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-sm font-medium shadow-lg shadow-primary/30">
                    Mais Popular
                  </div>
                </div>
              )}

              <div className={`
                h-full rounded-2xl p-8 border transition-all duration-300 flex flex-col
                ${plano.popular
                  ? 'bg-card border-primary/50 shadow-2xl shadow-primary/10 scale-105'
                  : 'bg-card/50 border-border/50 hover:border-primary/30 hover:bg-card/80'
                }
              `}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plano.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6 min-h-[40px]">{plano.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-foreground">R$ {plano.price}</span>
                    <span className="text-muted-foreground">{plano.period}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {plano.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className={`mt-0.5 rounded-full p-1 shrink-0 ${feature.included ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <div>
                          <span className={`text-sm font-medium ${feature.included ? 'text-foreground' : 'text-muted-foreground line-through decoration-muted-foreground/50'}`}>
                            {feature.text}
                          </span>
                          {feature.description && (
                            <p className="text-xs text-muted-foreground mt-0.5">{feature.description}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    w-full py-4 rounded-xl font-bold transition-all duration-300
                    ${plano.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border'
                    }
                  `}
                >
                  {plano.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Precisa de uma solução personalizada para sua empresa?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-secondary/80 backdrop-blur-lg border border-border rounded-xl text-foreground hover:bg-secondary transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Falar com Especialista</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
