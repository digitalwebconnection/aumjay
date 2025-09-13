"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, TrendingDown, Zap } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  {
    icon: Shield,
    number: 25,
    suffix: "+",
    label: "Years Warranty",
    gradient: "bg-gradient-to-r from-green-400 to-green-600",
  },
  {
    icon: TrendingDown,
    number: 90,
    suffix: "%",
    label: "Savings on Electricity Bills",
    gradient: "bg-gradient-to-r from-yellow-400 to-yellow-600",
  },
  {
    icon: Zap,
    number: 100,
    suffix: "+ kW",
    label: "Projects Pipeline in Mumbai & Thane",
    gradient: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
]

export function ImpactNumbersSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          stats.forEach((stat, index) => {
            let current = 0
            const increment = stat.number / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= stat.number) {
                current = stat.number
                clearInterval(timer)
              }
              setAnimatedNumbers((prev) => {
                const newNumbers = [...prev]
                newNumbers[index] = Math.floor(current)
                return newNumbers
              })
            }, 30)
          })
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-50 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Empowering Change, One Panel at a Time
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide sustainable energy solutions that transform homes, businesses, and communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="flex flex-col items-center space-y-4"
              >
                <div className={`w-20 h-20 flex items-center justify-center rounded-full ${stat.gradient} text-white shadow-lg`}>
                  <Icon className="w-10 h-10" />
                </div>
                <div className="text-4xl font-bold text-gray-800">
                  {animatedNumbers[index]}
                  <span className="text-xl">{stat.suffix}</span>
                </div>
                <div className="text-lg text-gray-600 text-center px-4">
                  {stat.label}
                </div>
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-12 h-1 rounded-full bg-gray-300"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
