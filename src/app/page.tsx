'use client'

import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ServiceCard from "@/components/ServiceCard"
import ServiceModal from "@/components/ServiceModal"
import AIChat from "@/components/AIChat"
import ScrollToTop from "@/components/ScrollToTop"
import Footer from "@/components/Footer"
import { 
  Cog, 
  Network, 
  Bot, 
  Code, 
  Brain, 
  Database, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  TrendingUp,
  Shield,
  Zap,
  Target,
  MessageCircle,
  Star
} from "lucide-react"
import servicesData from "@/data/services.json"

export default function Home() {
  const [selectedService, setSelectedService] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleServiceClick = (service: any) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const stats = [
    { icon: Users, label: "Clientes Atendidos", value: "35+" },
    { icon: TrendingUp, label: "Eficiência Aumentada", value: "85%" },
    { icon: Shield, label: "Projetos Entregues", value: "60+" },
    { icon: Zap, label: "Automações Criadas", value: "170+" }
  ]

  const features = [
    {
      icon: Target,
      title: "Soluções Personalizadas",
      description: "Cada projeto é desenvolvido sob medida para atender às necessidades específicas do seu negócio."
    },
    {
      icon: CheckCircle,
      title: "Resultados Comprovados",
      description: "Nossos clientes relatam aumento significativo em produtividade e redução de custos."
    },
    {
      icon: Users,
      title: "Suporte Especializado",
      description: "Equipe de especialistas dedicados a garantir o sucesso da sua implementação."
    },
    {
      icon: Star,
      title: "Tecnologia de Ponta",
      description: "Utilizamos as ferramentas mais modernas do mercado para garantir os melhores resultados."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-background dark:via-background dark:to-muted/20">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white border-0">
                Transformação Digital
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                  Transforme sua Empresa
                </span>
                <br />
                com Tecnologia Inteligente
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Aumente a eficiência, reduza custos e impulsione o crescimento com nossas soluções 
                de automação, integração de sistemas e inteligência artificial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white px-8 py-3 text-lg"
                  onClick={() => {
                    const firstService = servicesData.knowledge_base.services[0]
                    handleServiceClick(firstService)
                  }}
                >
                  Conhecer Serviços
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-3 text-lg"
                  onClick={() => window.open('https://wa.me/5533999493748?text=Olá! Gostaria de mais informações sobre seus serviços.', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com Especialista
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Card className="border-border/50 hover:border-border/80 transition-all hover:shadow-lg">
                      <CardContent className="p-6 text-center">
                        <stat.icon className="w-8 h-8 mx-auto mb-3 text-gradient-to-r from-orange-500 to-orange-700" />
                        <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              Nossos Serviços
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Soluções Tecnológicas para
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                {" "}Seu Negócio
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos um conjunto completo de serviços para transformar digitalmente sua empresa 
              e impulsionar resultados através da tecnologia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.knowledge_base.services.map((service, index) => (
              <ServiceCard
                key={service.service_id}
                service={service}
                onClick={() => handleServiceClick(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              Por que escolher a CORTEX
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Diferenciais que Fazem a
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                {" "}Diferença
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border/50 hover:border-border/80 transition-all hover:shadow-lg text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-700 p-3 mx-auto mb-4">
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-500 to-orange-700 rounded-3xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Transformar sua Empresa?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Agende uma conversa gratuita com nossos especialistas e descubra como nossas soluções 
              podem impulsionar seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg"
                onClick={() => window.open('https://wa.me/5533999493748?text=Olá! Gostaria de agendar uma conversa com um especialista.', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar Conversa
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg"
                onClick={() => {
                  const firstService = servicesData.knowledge_base.services[0]
                  handleServiceClick(firstService)
                }}
              >
                Ver Serviços
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Components */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <AIChat />
      <ScrollToTop />
    </div>
  )
}