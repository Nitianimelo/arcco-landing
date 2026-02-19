import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AILogos from '@/components/AILogos'
import Posicionamento from '@/components/Posicionamento'
import Solucoes from '@/components/Solucoes'
import Planos from '@/components/Planos'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900">
      <Header />
      <Hero />
      <AILogos />
      <Posicionamento />
      <Solucoes />
      <Planos />
      <CTA />
      <Footer />
    </main>
  )
}
