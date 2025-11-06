"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  Dumbbell, 
  CheckCircle, 
  CreditCard,
  Smartphone,
  ArrowLeft,
  Shield,
  Clock,
  Users,
  Star,
  Zap
} from 'lucide-react'
import Link from 'next/link'

export default function PlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'quarterly'>('quarterly')
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'pix' | 'paypal'>('card')

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] rounded-lg flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold">LifeFitnessON</span>
          </Link>
          
          <Link href="/" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Escolha seu plano de <span className="text-[#00ff88]">transformação</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Invista na sua saúde e bem-estar. Cancele quando quiser.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-[#00ff88]" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-[#00ff88]" />
              <span>+10k usuários</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-[#00ff88]" />
              <span>4.9/5 avaliação</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plans Selection */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Selecione seu plano</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Monthly Plan */}
              <Card 
                className={`cursor-pointer transition-all duration-300 ${
                  selectedPlan === 'monthly' 
                    ? 'border-[#00ff88] bg-[#00ff88]/5' 
                    : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                }`}
                onClick={() => setSelectedPlan('monthly')}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">Plano Mensal</h3>
                    <div className="text-3xl font-bold text-[#00ff88] mb-2">R$ 29,90</div>
                    <div className="text-gray-400">por mês</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#00ff88] mr-3" />
                      <span className="text-sm text-gray-300">Treinos personalizados</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#00ff88] mr-3" />
                      <span className="text-sm text-gray-300">Planos alimentares</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#00ff88] mr-3" />
                      <span className="text-sm text-gray-300">Acompanhamento de progresso</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#00ff88] mr-3" />
                      <span className="text-sm text-gray-300">IA Fitness Coach</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#00ff88] mr-3" />
                      <span className="text-sm text-gray-300">Acesso à comunidade</span>
                    </li>
                  </ul>

                  {selectedPlan === 'monthly' && (
                    <div className="text-center">
                      <Badge className="bg-[#00ff88] text-black">SELECIONADO</Badge>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Quarterly Plan */}
              <Card 
                className={`cursor-pointer transition-all duration-300 relative ${
                  selectedPlan === 'quarterly' 
                    ? 'border-[#00ff88] bg-[#00ff88]/5' 
                    : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                }`}
                onClick={() => setSelectedPlan('quarterly')}
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#00ff88] text-black font-semibold">
                    MAIS POPULAR
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">Plano Trimestral</h3>
                    <div className="text-3xl font-bold text-[#00ff88] mb-2">R$ 69,90</div>
                    <div className="text-gray-400">por 3 meses</div>
                    <div className="text-sm text-[#00ff88] font-semibold mt-1">
                      Economize R$ 19,80!
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#00ff88] mr-3" />
                      <span className="text-sm text-gray-300">Tudo do plano mensal</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#00ff88] mr-3" />
                      <span className="text-sm text-gray-300">Treinos exclusivos premium</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#00ff88] mr-3" />
                      <span className="text-sm text-gray-300">Receitas premium</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#00ff88] mr-3" />
                      <span className="text-sm text-gray-300">Suporte prioritário</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-[#00ff88] mr-3" />
                      <span className="text-sm text-gray-300">Análises avançadas</span>
                    </li>
                  </ul>

                  {selectedPlan === 'quarterly' && (
                    <div className="text-center">
                      <Badge className="bg-[#00ff88] text-black">SELECIONADO</Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Payment Section */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800/50 border-gray-700 sticky top-8">
              <CardHeader>
                <CardTitle>Finalizar Assinatura</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Plan Summary */}
                <div className="p-4 bg-gray-700/50 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">
                      {selectedPlan === 'monthly' ? 'Plano Mensal' : 'Plano Trimestral'}
                    </span>
                    <span className="font-bold text-[#00ff88]">
                      {selectedPlan === 'monthly' ? 'R$ 29,90' : 'R$ 69,90'}
                    </span>
                  </div>
                  {selectedPlan === 'quarterly' && (
                    <div className="text-sm text-green-400">
                      Você economiza R$ 19,80 (22% de desconto)
                    </div>
                  )}
                </div>

                {/* Payment Methods */}
                <div>
                  <Label className="text-white mb-3 block">Forma de pagamento</Label>
                  <Tabs value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as any)}>
                    <TabsList className="grid w-full grid-cols-3 bg-gray-700">
                      <TabsTrigger value="card" className="data-[state=active]:bg-[#00ff88] data-[state=active]:text-black">
                        <CreditCard className="w-4 h-4" />
                      </TabsTrigger>
                      <TabsTrigger value="pix" className="data-[state=active]:bg-[#00ff88] data-[state=active]:text-black">
                        <Smartphone className="w-4 h-4" />
                      </TabsTrigger>
                      <TabsTrigger value="paypal" className="data-[state=active]:bg-[#00ff88] data-[state=active]:text-black">
                        PayPal
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="card" className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number" className="text-white">Número do cartão</Label>
                        <Input 
                          id="card-number"
                          placeholder="1234 5678 9012 3456"
                          className="bg-gray-700 border-gray-600 text-white"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry" className="text-white">Validade</Label>
                          <Input 
                            id="expiry"
                            placeholder="MM/AA"
                            className="bg-gray-700 border-gray-600 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv" className="text-white">CVV</Label>
                          <Input 
                            id="cvv"
                            placeholder="123"
                            className="bg-gray-700 border-gray-600 text-white"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="card-name" className="text-white">Nome no cartão</Label>
                        <Input 
                          id="card-name"
                          placeholder="João Silva"
                          className="bg-gray-700 border-gray-600 text-white"
                        />
                      </div>
                    </TabsContent>

                    <TabsContent value="pix" className="mt-4">
                      <div className="text-center p-6 bg-gray-700/50 rounded-lg">
                        <Smartphone className="w-12 h-12 text-[#00ff88] mx-auto mb-4" />
                        <h3 className="font-semibold mb-2">Pagamento via Pix</h3>
                        <p className="text-sm text-gray-400 mb-4">
                          Após confirmar, você receberá o QR Code para pagamento instantâneo
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-sm text-[#00ff88]">
                          <Zap className="w-4 h-4" />
                          <span>Aprovação imediata</span>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="paypal" className="mt-4">
                      <div className="text-center p-6 bg-gray-700/50 rounded-lg">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-sm">PP</span>
                        </div>
                        <h3 className="font-semibold mb-2">PayPal</h3>
                        <p className="text-sm text-gray-400 mb-4">
                          Você será redirecionado para o PayPal para finalizar o pagamento
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-sm text-blue-400">
                          <Shield className="w-4 h-4" />
                          <span>Pagamento seguro</span>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black hover:from-[#00cc6a] hover:to-[#00aa55] font-semibold py-3">
                  {paymentMethod === 'pix' ? 'Gerar QR Code Pix' : 
                   paymentMethod === 'paypal' ? 'Pagar com PayPal' : 
                   'Finalizar Assinatura'}
                </Button>

                {/* Security Info */}
                <div className="text-center space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                    <Shield className="w-4 h-4" />
                    <span>Pagamento 100% seguro</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>Cancele quando quiser</span>
                  </div>
                </div>

                {/* Terms */}
                <p className="text-xs text-gray-500 text-center">
                  Ao finalizar a compra, você concorda com nossos{' '}
                  <Link href="#" className="text-[#00ff88] hover:underline">
                    Termos de Uso
                  </Link>
                  {' '}e{' '}
                  <Link href="#" className="text-[#00ff88] hover:underline">
                    Política de Privacidade
                  </Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Posso cancelar quando quiser?</h3>
                <p className="text-sm text-gray-400">
                  Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas adicionais.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Como funciona a garantia?</h3>
                <p className="text-sm text-gray-400">
                  Oferecemos 7 dias de garantia. Se não ficar satisfeito, devolvemos 100% do valor.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Funciona no celular?</h3>
                <p className="text-sm text-gray-400">
                  Sim! Nossa plataforma é totalmente responsiva e funciona perfeitamente no celular.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Preciso de equipamentos?</h3>
                <p className="text-sm text-gray-400">
                  Temos treinos para casa e academia. Você escolhe o que funciona melhor para você.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}