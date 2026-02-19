'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import CircuitBackground from './CircuitBackground'

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Animated Background Gradients */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent rounded-full blur-[120px] -z-10" />
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute top-1/3 -right-1/4 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </motion.div>

      {/* Grid Pattern Overlay */}
      {/* Circuit Background */}
      <CircuitBackground />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-xs font-medium text-gray-400 mb-8 backdrop-blur-md hover:bg-white/10 hover:border-white/10 transition-all cursor-default"
          >
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span>Powered by <span className="text-gray-200">AI</span></span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
          >
            A tecnologia das grandes empresas{' '}
            <span className="bg-gradient-to-r from-blue-400 via-primary to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              agora no seu negócio.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Democratizamos a implementação de IA. Plug &amp; Play para transformar sua operação de ponta a ponta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center gap-2">
                Começar Gratuitamente <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-foreground rounded-xl font-semibold text-lg transition-all duration-300 hover:border-white/20"
            >
              Ver Demonstração
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Platform Preview Placeholder / Abstract Representation */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-xl border border-white/10 bg-gray-900/50 backdrop-blur-xl shadow-2xl p-2 md:p-4">
            <div className="aspect-[16/9] rounded-lg bg-gray-950/80 overflow-hidden relative border border-white/5">
              {/* Abstract UI Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">Dashboard Interativo</h3>
                  <p className="text-muted-foreground mt-2">Visualização de dados em tempo real</p>
                </div>
              </div>

              {/* Fake UI Overlay */}
              <div className="absolute top-0 left-0 w-full h-12 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
            </div>
          </div>
          {/* Glow Effect under the dashboard */}
          <div className="absolute -inset-10 bg-primary/20 blur-[100px] -z-10 rounded-full opacity-50" />
        </motion.div>
      </div>
    </section>
  )
}
