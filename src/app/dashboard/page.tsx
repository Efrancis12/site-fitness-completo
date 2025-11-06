"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { 
  Dumbbell, 
  Apple, 
  TrendingUp, 
  Target,
  Calendar,
  Clock,
  Flame,
  Trophy,
  User,
  Settings,
  LogOut,
  Play,
  CheckCircle,
  Star,
  MessageCircle
} from 'lucide-react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("treinos")

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] rounded-lg flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-black" />
            </div>
            <span className="text-xl font-bold">LifeFitnessON</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-black" />
              </div>
              <span className="text-sm">João Silva</span>
            </div>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Bem-vindo de volta, <span className="text-[#00ff88]">João</span>! 💪
          </h1>
          <p className="text-gray-400">
            Sua jornada de transformação continua. Vamos treinar hoje?
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-[#00ff88] mb-1">12</div>
              <div className="text-sm text-gray-400">Treinos este mês</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-[#00ff88] mb-1">-3kg</div>
              <div className="text-sm text-gray-400">Progresso</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-[#00ff88] mb-1">85%</div>
              <div className="text-sm text-gray-400">Meta mensal</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-[#00ff88] mb-1">7</div>
              <div className="text-sm text-gray-400">Sequência</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-800">
            <TabsTrigger value="treinos" className="data-[state=active]:bg-[#00ff88] data-[state=active]:text-black">
              <Dumbbell className="w-4 h-4 mr-2" />
              Treinos
            </TabsTrigger>
            <TabsTrigger value="alimentacao" className="data-[state=active]:bg-[#00ff88] data-[state=active]:text-black">
              <Apple className="w-4 h-4 mr-2" />
              Alimentação
            </TabsTrigger>
            <TabsTrigger value="progresso" className="data-[state=active]:bg-[#00ff88] data-[state=active]:text-black">
              <TrendingUp className="w-4 h-4 mr-2" />
              Progresso
            </TabsTrigger>
            <TabsTrigger value="recomendacoes" className="data-[state=active]:bg-[#00ff88] data-[state=active]:text-black">
              <Target className="w-4 h-4 mr-2" />
              Recomendações
            </TabsTrigger>
          </TabsList>

          {/* Treinos Tab */}
          <TabsContent value="treinos" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Treino de Hoje */}
              <Card className="bg-gradient-to-br from-[#00ff88]/10 to-[#00cc6a]/10 border-[#00ff88]">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Treino de Hoje</span>
                    <Badge className="bg-[#00ff88] text-black">HOJE</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Peito e Tríceps</h3>
                      <p className="text-gray-400 text-sm mb-4">
                        Foco em força e hipertrofia • 45-60 min
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Supino reto</span>
                        <span className="text-gray-400">4x8-12</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Supino inclinado</span>
                        <span className="text-gray-400">3x10-15</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Crucifixo</span>
                        <span className="text-gray-400">3x12-15</span>
                      </div>
                      <div className="text-gray-400 text-xs">+4 exercícios</div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-[#00ff88] to-[#00cc6a] text-black hover:from-[#00cc6a] hover:to-[#00aa55]">
                      <Play className="w-4 h-4 mr-2" />
                      Iniciar Treino
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Histórico Recente */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle>Treinos Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                      <div>
                        <div className="font-medium">Costas e Bíceps</div>
                        <div className="text-sm text-gray-400">Ontem • 52 min</div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-[#00ff88]" />
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                      <div>
                        <div className="font-medium">Pernas</div>
                        <div className="text-sm text-gray-400">2 dias atrás • 65 min</div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-[#00ff88]" />
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                      <div>
                        <div className="font-medium">Ombros e Abs</div>
                        <div className="text-sm text-gray-400">3 dias atrás • 45 min</div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-[#00ff88]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Planos por Nível */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Escolha seu Nível</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-gray-800/50 border-gray-700 hover:border-[#00ff88]/50 transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="font-semibold mb-2">Iniciante</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Perfeito para quem está começando
                    </p>
                    <Badge variant="outline" className="text-green-400 border-green-400">
                      3-4x por semana
                    </Badge>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-[#00ff88] hover:border-[#00ff88] transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#00ff88]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Flame className="w-6 h-6 text-[#00ff88]" />
                    </div>
                    <h3 className="font-semibold mb-2">Intermediário</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Para quem já tem experiência
                    </p>
                    <Badge className="bg-[#00ff88] text-black">
                      4-5x por semana • ATUAL
                    </Badge>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 hover:border-red-500/50 transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="font-semibold mb-2">Avançado</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Para atletas experientes
                    </p>
                    <Badge variant="outline" className="text-red-400 border-red-400">
                      5-6x por semana
                    </Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Alimentação Tab */}
          <TabsContent value="alimentacao" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Plano de Hoje */}
              <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Plano de Hoje</span>
                    <Badge className="bg-orange-500 text-white">HOJE</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-orange-400">2.200</div>
                        <div className="text-xs text-gray-400">Calorias</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-blue-400">150g</div>
                        <div className="text-xs text-gray-400">Proteína</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-400">220g</div>
                        <div className="text-xs text-gray-400">Carbos</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">☀️ Café da manhã</span>
                        <span className="text-xs text-gray-400">450 kcal</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">🥗 Almoço</span>
                        <span className="text-xs text-gray-400">650 kcal</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">🍎 Lanche</span>
                        <span className="text-xs text-gray-400">200 kcal</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">🍽️ Jantar</span>
                        <span className="text-xs text-gray-400">600 kcal</span>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600">
                      Ver Receitas Detalhadas
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Progresso Nutricional */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle>Progresso de Hoje</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Calorias</span>
                        <span>1.650 / 2.200</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Proteína</span>
                        <span>110g / 150g</span>
                      </div>
                      <Progress value={73} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Carboidratos</span>
                        <span>180g / 220g</span>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Água</span>
                        <span>2.1L / 3L</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Objetivos */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Seu Objetivo</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="font-semibold mb-2">Emagrecimento</h3>
                    <p className="text-sm text-gray-400">
                      Déficit calórico controlado
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-[#00ff88] hover:border-[#00ff88] transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-[#00ff88]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Dumbbell className="w-6 h-6 text-[#00ff88]" />
                    </div>
                    <h3 className="font-semibold mb-2">Ganho de Massa</h3>
                    <p className="text-sm text-gray-400">
                      Superávit com foco em proteína
                    </p>
                    <Badge className="bg-[#00ff88] text-black mt-2">ATUAL</Badge>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-colors cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="font-semibold mb-2">Definição</h3>
                    <p className="text-sm text-gray-400">
                      Manutenção com cutting
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Progresso Tab */}
          <TabsContent value="progresso" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Evolução de Peso */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle>Evolução de Peso</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#00ff88] mb-2">78.5 kg</div>
                      <div className="text-sm text-gray-400">Peso atual</div>
                      <div className="text-sm text-green-400 mt-1">-3kg este mês 📉</div>
                    </div>
                    
                    <div className="h-32 bg-gray-700/50 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">Gráfico de evolução</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-semibold">81.5 kg</div>
                        <div className="text-xs text-gray-400">Peso inicial</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold">75 kg</div>
                        <div className="text-xs text-gray-400">Meta</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Medidas Corporais */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle>Medidas Corporais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Cintura</span>
                      <div className="text-right">
                        <div className="font-semibold">85 cm</div>
                        <div className="text-xs text-green-400">-2cm</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Peito</span>
                      <div className="text-right">
                        <div className="font-semibold">102 cm</div>
                        <div className="text-xs text-[#00ff88]">+1cm</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Braço</span>
                      <div className="text-right">
                        <div className="font-semibold">38 cm</div>
                        <div className="text-xs text-[#00ff88]">+0.5cm</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Coxa</span>
                      <div className="text-right">
                        <div className="font-semibold">58 cm</div>
                        <div className="text-xs text-gray-400">sem mudança</div>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full mt-4">
                      Atualizar Medidas
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Frequência de Treino */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle>Frequência de Treino</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xs text-gray-400 mb-2">{day}</div>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                        index < 5 ? 'bg-[#00ff88] text-black' : 'bg-gray-700 text-gray-400'
                      }`}>
                        {index < 5 ? '✓' : '○'}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#00ff88] mb-1">5/7</div>
                  <div className="text-sm text-gray-400">dias esta semana</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recomendações Tab */}
          <TabsContent value="recomendacoes" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* IA Coach */}
              <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    IA Fitness Coach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gray-700/50 p-3 rounded-lg">
                      <p className="text-sm">
                        "Baseado no seu progresso, recomendo aumentar a carga no supino em 2.5kg na próxima sessão. Você está evoluindo muito bem! 💪"
                      </p>
                    </div>
                    
                    <div className="bg-gray-700/50 p-3 rounded-lg">
                      <p className="text-sm">
                        "Que tal adicionar mais 200ml de água por dia? Você está próximo da meta de hidratação ideal."
                      </p>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      Conversar com IA Coach
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recomendações Personalizadas */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle>Recomendações para Você</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#00ff88]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Dumbbell className="w-4 h-4 text-[#00ff88]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Novo Treino de Ombros</h4>
                        <p className="text-xs text-gray-400">
                          Baseado na sua evolução, criamos um treino focado em ombros posteriores
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Apple className="w-4 h-4 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Receita: Smoothie Proteico</h4>
                        <p className="text-xs text-gray-400">
                          Perfeito para o pós-treino. Rico em proteína e carboidratos
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Ajuste no Horário</h4>
                        <p className="text-xs text-gray-400">
                          Que tal treinar às 7h? Estudos mostram melhor performance matinal
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Conquistas */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle>Suas Conquistas 🏆</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Trophy className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="text-sm font-medium">Primeira Semana</div>
                    <div className="text-xs text-gray-400">Completada!</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#00ff88]/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Flame className="w-6 h-6 text-[#00ff88]" />
                    </div>
                    <div className="text-sm font-medium">Sequência de 7</div>
                    <div className="text-xs text-gray-400">Dias seguidos</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Target className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-sm font-medium">Meta Mensal</div>
                    <div className="text-xs text-gray-400">85% completa</div>
                  </div>
                  
                  <div className="text-center opacity-50">
                    <div className="w-12 h-12 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Star className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="text-sm font-medium">Primeiro Mês</div>
                    <div className="text-xs text-gray-400">Em progresso</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}