'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cog, Network, Bot, Code, Brain, Database } from "lucide-react"

interface ServiceCardProps {
  service: {
    service_id: string
    title: string
    description: string
    benefits?: string[]
  }
  onClick: () => void
}

const getServiceIcon = (serviceId: string) => {
  switch (serviceId) {
    case 'automacao_de_processos':
      return <Cog className="w-8 h-8" />
    case 'integracao_de_sistemas':
      return <Network className="w-8 h-8" />
    case 'assistentes_virtuais_inteligentes':
      return <Bot className="w-8 h-8" />
    case 'aplicativos_e_sistemas_sob_medida':
      return <Code className="w-8 h-8" />
    case 'inteligencia_artificial_aplicada':
      return <Brain className="w-8 h-8" />
    case 'tratamento_e_organizacao_de_dados':
      return <Database className="w-8 h-8" />
    default:
      return <Cog className="w-8 h-8" />
  }
}

const getGradientColors = (serviceId: string) => {
  switch (serviceId) {
    case 'automacao_de_processos':
      return 'from-orange-500 to-orange-700'
    case 'integracao_de_sistemas':
      return 'from-orange-600 to-orange-800'
    case 'assistentes_virtuais_inteligentes':
      return 'from-orange-400 to-orange-600'
    case 'aplicativos_e_sistemas_sob_medida':
      return 'from-orange-600 to-red-600'
    case 'inteligencia_artificial_aplicada':
      return 'from-orange-500 to-orange-700'
    case 'tratamento_e_organizacao_de_dados':
      return 'from-orange-400 to-orange-600'
    default:
      return 'from-orange-500 to-orange-700'
  }
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  const gradientColors = getGradientColors(service.service_id)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card 
        className="h-full cursor-pointer border-border/50 hover:border-border/80 transition-all duration-300 hover:shadow-lg group"
        onClick={onClick}
      >
        <CardHeader className="pb-3 sm:pb-4">
          <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${gradientColors} p-2.5 sm:p-3 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <div className="text-white">
              {getServiceIcon(service.service_id)}
            </div>
          </div>
          <CardTitle className="text-lg sm:text-xl leading-tight group-hover:text-orange-600 transition-colors line-clamp-2">
            {service.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="pt-0">
          <CardDescription className="text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
            {service.description}
          </CardDescription>
          
          {service.benefits && service.benefits.length > 0 && (
            <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
              <Badge variant="secondary" className="text-xs">
                Principais benefícios:
              </Badge>
              <div className="space-y-1">
                {service.benefits.slice(0, 2).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 flex-shrink-0" />
                    <span className="text-xs text-muted-foreground line-clamp-2">
                      {benefit.replace(/^\*\*.*?:\s*/, '')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex items-center gap-2 text-orange-600 group-hover:text-orange-700 transition-colors">
            <span className="text-sm font-medium">Saiba mais</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}