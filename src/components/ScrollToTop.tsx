'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-6 z-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Button
            size="sm"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 shadow-lg"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}