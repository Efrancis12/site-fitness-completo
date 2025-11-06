"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Dumbbell, 
  Apple, 
  TrendingUp, 
  Users, 
  Star, 
  CheckCircle, 
  Play,
  Menu,
  X,
  Zap,
  Target,
  Award,
  Clock
} from 'lucide-react'

export default function LifeFitnessON() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] rounded-lg flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold">LifeFitnessON</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="hover:text-[#00ff88] transition-colors">Início</a>
            <a href="#beneficios" className="hover:text-[#00ff88] transition-colors">Benefícios</a>
            <a href="#depoimentos" className="hover:text-[#00ff88] transition-colors">Depoimentos</a>
            <a href="#planos" className="hover:text-[#00ff88] transition-colors">Planos</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-[#00ff88]">
                  Entrar
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 border-gray-700">
                <DialogHeader>
                  <DialogTitle className="text-white">Acesse sua conta</DialogTitle>
                </DialogHeader>
                <LoginForm />
              </DialogContent>
            </Dialog>
            <Button className="bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black hover:from-[#00cc6a] hover:to-[#00aa55] font-semibold">
              Assinar Plano
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#inicio" className="hover:text-[#00ff88] transition-colors">Início</a>
              <a href="#beneficios" className="hover:text-[#00ff88] transition-colors">Benefícios</a>
              <a href="#depoimentos" className="hover:text-[#00ff88] transition-colors">Depoimentos</a>
              <a href="#planos" className="hover:text-[#00ff88] transition-colors">Planos</a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-800">
                <Button variant="ghost" className="text-white hover:text-[#00ff88] justify-start">
                  Entrar
                </Button>
                <Button className="bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black hover:from-[#00cc6a] hover:to-[#00aa55] font-semibold">
                  Assinar Plano
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/30">
              🔥 Transforme seu corpo e mente
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              A sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00cc6a]">evolução</span> começa agora
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Treinos e alimentação personalizada. Disciplina é o que transforma. 
              <br className="hidden md:block" />
              <strong className="text-[#00ff88]">Treine com propósito. Viva com resultado.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black hover:from-[#00cc6a] hover:to-[#00aa55] font-semibold px-8 py-3 text-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Começar Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88] hover:text-black px-8 py-3 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Demonstração
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#00ff88]">10k+</div>
                <div className="text-sm text-gray-400">Usuários ativos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#00ff88]">500+</div>
                <div className="text-sm text-gray-400">Exercícios</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#00ff88]">95%</div>
                <div className="text-sm text-gray-400">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#00ff88]">24/7</div>
                <div className="text-sm text-gray-400">Suporte</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher o <span className="text-[#00ff88]">LifeFitnessON</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tecnologia, motivação e praticidade — tudo em um só lugar para sua transformação completa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00ff88]/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Treinos Personalizados</h3>
                <p className="text-gray-300">
                  Rotinas adaptadas ao seu nível e objetivos, com progressão inteligente e acompanhamento detalhado.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00ff88]/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Apple className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Nutrição Inteligente</h3>
                <p className="text-gray-300">
                  Planos alimentares personalizados para emagrecimento, ganho de massa ou definição muscular.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00ff88]/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Acompanhamento Total</h3>
                <p className="text-gray-300">
                  Gráficos de evolução, métricas detalhadas e insights para maximizar seus resultados.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00ff88]/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">IA Fitness Coach</h3>
                <p className="text-gray-300">
                  Assistente inteligente 24/7 para tirar dúvidas sobre treinos, alimentação e motivação.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00ff88]/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Comunidade Ativa</h3>
                <p className="text-gray-300">
                  Conecte-se com outros usuários, compartilhe conquistas e mantenha-se motivado.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00ff88]/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">Conteúdo Premium</h3>
                <p className="text-gray-300">
                  Vídeos exclusivos, receitas saudáveis e dicas de especialistas em fitness e nutrição.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que nossos usuários dizem
            </h2>
            <p className="text-xl text-gray-300">
              Histórias reais de transformação e sucesso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#00ff88] fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Em 3 meses perdi 15kg e ganhei muito mais disposição. Os treinos são desafiadores mas possíveis de fazer. Recomendo!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-semibold">M</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Maria Silva</div>
                    <div className="text-sm text-gray-400">Perdeu 15kg</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#00ff88] fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "O app mudou minha relação com exercícios. Antes eu não conseguia manter uma rotina, agora treino 5x por semana!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-semibold">J</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">João Santos</div>
                    <div className="text-sm text-gray-400">Ganhou 8kg de massa</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#00ff88] fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "A IA Coach é incrível! Sempre que tenho dúvidas sobre alimentação ou treino, ela me ajuda na hora. Vale muito a pena!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-semibold">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Ana Costa</div>
                    <div className="text-sm text-gray-400">Definiu o corpo</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Escolha seu plano de <span className="text-[#00ff88]">transformação</span>
            </h2>
            <p className="text-xl text-gray-300">
              Invista na sua saúde e bem-estar com preços que cabem no seu bolso
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00ff88]/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Plano Mensal</h3>
                  <div className="text-4xl font-bold text-[#00ff88] mb-2">R$ 29,90</div>
                  <div className="text-gray-400">por mês</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#00ff88] mr-3" />
                    <span className="text-gray-300">Treinos personalizados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#00ff88] mr-3" />
                    <span className="text-gray-300">Planos alimentares</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#00ff88] mr-3" />
                    <span className="text-gray-300">Acompanhamento de progresso</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#00ff88] mr-3" />
                    <span className="text-gray-300">IA Fitness Coach</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#00ff88] mr-3" />
                    <span className="text-gray-300">Acesso à comunidade</span>
                  </li>
                </ul>

                <Button className="w-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black hover:from-[#00cc6a] hover:to-[#00aa55] font-semibold">
                  Começar Agora
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#00ff88]/10 to-[#00cc6a]/10 border-[#00ff88] relative hover:scale-105 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#00ff88] text-black font-semibold">
                  MAIS POPULAR
                </Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Plano Trimestral</h3>
                  <div className="text-4xl font-bold text-[#00ff88] mb-2">R$ 69,90</div>
                  <div className="text-gray-400">por 3 meses</div>
                  <div className="text-sm text-[#00ff88] font-semibold mt-1">
                    Economize R$ 19,80!
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#00ff88] mr-3" />
                    <span className="text-gray-300">Tudo do plano mensal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#00ff88] mr-3" />
                    <span className="text-gray-300">Treinos exclusivos premium</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#00ff88] mr-3" />
                    <span className="text-gray-300">Receitas premium</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#00ff88] mr-3" />
                    <span className="text-gray-300">Suporte prioritário</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#00ff88] mr-3" />
                    <span className="text-gray-300">Análises avançadas</span>
                  </li>
                </ul>

                <Button className="w-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black hover:from-[#00cc6a] hover:to-[#00aa55] font-semibold">
                  Assinar Trimestral
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">
              Aceitos: Pix, Cartão de Crédito, PayPal e Stripe
            </p>
            <p className="text-sm text-gray-500">
              Cancele quando quiser. Sem taxas ocultas. Garantia de 7 dias.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para <span className="text-[#00ff88]">transformar</span> sua vida?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Junte-se a milhares de pessoas que já estão vivendo uma vida mais saudável e ativa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black hover:from-[#00cc6a] hover:to-[#00aa55] font-semibold px-8 py-3 text-lg"
              >
                <Clock className="w-5 h-5 mr-2" />
                Começar Hoje
              </Button>
              <p className="text-sm text-gray-400">
                Teste grátis por 7 dias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] rounded-lg flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-black" />
                </div>
                <span className="text-xl font-bold">LifeFitnessON</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transformando vidas através do fitness e nutrição personalizada.
              </p>
              <div className="text-sm text-gray-500">
                © 2024 LifeFitnessON. Todos os direitos reservados.
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#00ff88] transition-colors">Treinos</a></li>
                <li><a href="#" className="hover:text-[#00ff88] transition-colors">Alimentação</a></li>
                <li><a href="#" className="hover:text-[#00ff88] transition-colors">Progresso</a></li>
                <li><a href="#" className="hover:text-[#00ff88] transition-colors">IA Coach</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#00ff88] transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-[#00ff88] transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-[#00ff88] transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-[#00ff88] transition-colors">Comunidade</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#00ff88] transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-[#00ff88] transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-[#00ff88] transition-colors">Cookies</a></li>
                <li><a href="#" className="hover:text-[#00ff88] transition-colors">Licenças</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function LoginForm() {
  return (
    <Tabs defaultValue="login" className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-gray-800">
        <TabsTrigger value="login" className="data-[state=active]:bg-[#00ff88] data-[state=active]:text-black">
          Entrar
        </TabsTrigger>
        <TabsTrigger value="register" className="data-[state=active]:bg-[#00ff88] data-[state=active]:text-black">
          Cadastrar
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="login" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="seu@email.com"
            className="bg-gray-800 border-gray-600 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-white">Senha</Label>
          <Input 
            id="password" 
            type="password" 
            placeholder="••••••••"
            className="bg-gray-800 border-gray-600 text-white"
          />
        </div>
        <Button className="w-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black hover:from-[#00cc6a] hover:to-[#00aa55]">
          Entrar
        </Button>
        <div className="text-center">
          <p className="text-gray-400 mb-4">ou continue com</p>
          <div className="space-y-2">
            <Button variant="outline" className="w-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black border-[#00ff88] hover:from-[#00cc6a] hover:to-[#00aa55] font-semibold">
              Continuar com Google
            </Button>
            <Button variant="outline" className="w-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black border-[#00ff88] hover:from-[#00cc6a] hover:to-[#00aa55] font-semibold">
              Continuar com Apple
            </Button>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="register" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">Nome completo</Label>
          <Input 
            id="name" 
            type="text" 
            placeholder="Seu nome"
            className="bg-gray-800 border-gray-600 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email-register" className="text-white">Email</Label>
          <Input 
            id="email-register" 
            type="email" 
            placeholder="seu@email.com"
            className="bg-gray-800 border-gray-600 text-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password-register" className="text-white">Senha</Label>
          <Input 
            id="password-register" 
            type="password" 
            placeholder="••••••••"
            className="bg-gray-800 border-gray-600 text-white"
          />
        </div>
        <Button className="w-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black hover:from-[#00cc6a] hover:to-[#00aa55]">
          Criar Conta
        </Button>
        <div className="text-center">
          <p className="text-gray-400 mb-4">ou continue com</p>
          <div className="space-y-2">
            <Button variant="outline" className="w-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black border-[#00ff88] hover:from-[#00cc6a] hover:to-[#00aa55] font-semibold">
              Continuar com Google
            </Button>
            <Button variant="outline" className="w-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black border-[#00ff88] hover:from-[#00cc6a] hover:to-[#00aa55] font-semibold">
              Continuar com Apple
            </Button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}