'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, X, Bot, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  id: string
  content: string
  sender: 'user' | 'ai'
  timestamp: Date
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Container scrollável (substitui ScrollArea para controle total do scroll)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback((behavior: ScrollBehavior = 'smooth') => {
    const el = scrollContainerRef.current
    if (!el) return
    // Rola até o fim do container
    el.scrollTo({ top: el.scrollHeight, behavior })
  }, [])

  // Sempre que abrir o chat, garante que o scroll está no fim
  useEffect(() => {
    if (isOpen) {
      // Pequeno timeout para esperar o layout montar
      const t = setTimeout(() => scrollToBottom('auto'), 0)
      return () => clearTimeout(t)
    }
  }, [isOpen, scrollToBottom])

  // Observa novas mensagens e mantém o scroll no fim
  useEffect(() => {
    if (!isOpen) return
    scrollToBottom()
  }, [messages, isOpen, scrollToBottom])

  // Também observa mudanças de tamanho do container (ex.: quebras de linha, resize)
  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el) return
    const ro = new ResizeObserver(() => scrollToBottom('auto'))
    ro.observe(el)
    return () => ro.disconnect()
  }, [scrollToBottom])

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: `${Date.now()}`,
      content: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      // Envia a mensagem atual + histórico para a API para contexto
      const payload = {
        message: userMessage.content,
        history: [...messages, userMessage].map(m => ({
          role: m.sender === 'user' ? 'user' : 'assistant',
          content: m.content,
          timestamp: m.timestamp.toISOString(),
        })),
      }

      const response = await fetch('http://localhost:56455/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Failed to get response: ${response.status}`)
      }

      const data = await response.json()

      const aiMessage: Message = {
        id: `${Date.now() + 1}`,
        content: data.response ?? 'Sem resposta.',
        sender: 'ai',
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, aiMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: `${Date.now() + 1}`,
        content: 'Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.',
        sender: 'ai',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // use onKeyDown (onKeyPress é obsoleto em React)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Botão Flutuante */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <Button
          size="lg"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Janela do Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] md:w-96"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="shadow-2xl border-border/50 max-h-[80vh]">
              <CardHeader className="pb-3 shrink-0">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Bot className="w-5 h-5 text-orange-600" />
                    <span className="hidden sm:inline">Assistente CORTEX</span>
                    <span className="sm:hidden">CORTEX IA</span>
                    <Badge variant="secondary" className="text-xs">Online</Badge>
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 p-0"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <div className="flex flex-col h-[60vh] max-h-[500px]">
                  {/* Área de Mensagens (agora com overflow-y-auto controlado) */}
                  <div
                    ref={scrollContainerRef}
                    className="flex-1 px-3 sm:px-4 py-3 overflow-y-auto"
                  >
                    <div className="space-y-4">
                      {messages.length === 0 && (
                        <div className="text-center py-6 sm:py-8">
                          <Bot className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-muted-foreground" />
                          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            Olá! Sou o assistente virtual da CORTEX. Como posso ajudar você hoje?
                          </p>
                        </div>
                      )}

                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                          className={`flex gap-2 sm:gap-3 ${
                            message.sender === 'user' ? 'justify-end' : 'justify-start'
                          }`}
                        >
                          {message.sender === 'ai' && (
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 flex items-center justify-center flex-shrink-0">
                              <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                            </div>
                          )}

                          <div
                            className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 py-2 sm:px-4 ${
                              message.sender === 'user'
                                ? 'bg-gradient-to-r from-orange-500 to-orange-700 text-white'
                                : 'bg-muted'
                            }`}
                          >
                            <p className="text-xs sm:text-sm leading-relaxed break-words">
                              {message.content}
                            </p>
                            <p className="text-[10px] sm:text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString('pt-BR', {
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </p>
                          </div>

                          {message.sender === 'user' && (
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                              <User className="w-3 h-3 sm:w-4 sm:h-4" />
                            </div>
                          )}
                        </motion.div>
                      ))}

                      {isLoading && (
                        <div className="flex gap-2 sm:gap-3 justify-start">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 flex items-center justify-center flex-shrink-0">
                            <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          </div>
                          <div className="bg-muted rounded-2xl px-3 py-2 sm:px-4">
                            <div className="flex gap-1">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Área de Input */}
                  <div className="border-t p-3 sm:p-4 shrink-0">
                    <div className="flex gap-2">
                      <Input
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Digite sua mensagem..."
                        disabled={isLoading}
                        className="flex-1 text-sm"
                      />
                      <Button
                        size="sm"
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim() || isLoading}
                        className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 px-3"
                        aria-label="Enviar mensagem"
                      >
                        <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
