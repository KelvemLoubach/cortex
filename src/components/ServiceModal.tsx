'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface ServiceModalProps {
  service: any
  isOpen: boolean
  onClose: () => void
}

export default function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  if (!service) return null

  const getRelatedUseCases = () => {
    const allUseCases = [
      ...service.use_cases_for_small_business?.flatMap((category: any) => category.use_cases) || [],
      ...service.use_cases_by_department?.flatMap((dept: any) => dept.use_cases) || []
    ]
    return allUseCases.slice(0, 2) // Reduzido para 2 casos de uso
  }

  // Função para truncar texto longo
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg md:max-w-2xl max-h-[70vh] md:max-h-[75vh] p-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col h-full"
        >
          {/* Header */}
          <div className="p-4 pb-2 shrink-0 border-b bg-background">
            <DialogTitle className="text-lg md:text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent line-clamp-2">
              {service.title}
            </DialogTitle>
          </div>
          
          {/* Conteúdo com Scroll */}
          <ScrollArea className="flex-1">
            <div className="p-4 space-y-4 max-w-full">
              {/* Descrição */}
              <div className="break-words">
                <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">Descrição</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {truncateText(service.description, 250)}
                </p>
              </div>

              {/* Como Funciona */}
              <div className="break-words">
                <h3 className="text-base md:text-lg font-semibold mb-2 text-foreground">Como Funciona</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {truncateText(service.how_it_works, 300)}
                </p>
              </div>

              {/* Benefícios */}
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-3 text-foreground">Benefícios</h3>
                <div className="space-y-2">
                  {service.benefits?.slice(0, 3).map((benefit: string, index: number) => (
                    <div key={index} className="flex items-start gap-2 p-2 rounded-lg bg-muted/50">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed text-muted-foreground break-words">
                        {truncateText(benefit.replace(/^\*\*.*?:\s*/, ''), 60)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Casos de Uso Relacionados */}
              {getRelatedUseCases().length > 0 && (
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-3 text-foreground">Casos de Uso Relacionados</h3>
                  <div className="space-y-3">
                    {getRelatedUseCases().map((useCase: any, index: number) => (
                      <Card key={index} className="border-border/50">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium line-clamp-2">
                            {truncateText(useCase.title, 50)}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription className="text-xs leading-relaxed">
                            {truncateText(useCase.solution, 80)}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Footer */}
          <div className="p-4 pt-2 border-t shrink-0 bg-background">
            <div className="flex flex-col sm:flex-row gap-2">
              <Button 
                className="flex-1 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-sm"
                onClick={() => {
                  window.open('https://wa.me/5533999493748?text=Olá! Gostaria de mais informações sobre seus serviços.', '_blank')
                }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Solicitar mais informações
              </Button>
              <Button variant="outline" onClick={onClose} className="text-sm">
                Fechar
              </Button>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}