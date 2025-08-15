'use client'

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre a Empresa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              CORTEX
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Transformamos sua empresa com soluções tecnológicas inteligentes, 
              aumentando eficiência e economizando recursos através da automação e integração de sistemas.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700 hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700 hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Serviços */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Automação de Processos
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Integração de Sistemas
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Assistentes Virtuais
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Sistemas Sob Medida
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Inteligência Artificial
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Links Úteis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Casos de Sucesso
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Termos de Uso
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <a href="mailto:contato@CORTEX.com.br" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  contato@CORTEX.com.br
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <a href="tel:+5533999493748" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  (33) 999493748
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  São Paulo, SP<br />
                  Brasil
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            © 2025 CORTEX. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}