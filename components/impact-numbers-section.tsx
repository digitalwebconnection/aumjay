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
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: TrendingDown,
    number: 90,
    suffix: "%",
    label: "Savings on Electricity Bills",
    color: "text-yellow-400",
    bg: "bg-yellow-100",
  },
  {
    icon: Zap,
    number: 100,
    suffix: "+ kW",
    label: "Projects Pipeline in Mumbai & Thane",
    color: "text-green-600",
    bg: "bg-green-100",
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
          // Animate numbers
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-green-50 via-white to-yellow-50 overflow-hidden"
    >
      {/* Glow background effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent"
          >
            Proven Impact & Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Numbers that speak for our commitment to sustainable energy solutions.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={
                  isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0 }
                }
                transition={{ duration: 0.8, delay: index * 0.3 }}
                whileHover={{ scale: 1.05, y: -6 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div
                  className={`mb-6 flex justify-center items-center w-20 h-20 rounded-full ${stat.bg} shadow-inner`}
                >
                  <Icon className={`w-10 h-10 ${stat.color}`} />
                </div>
                <div
                  className={`text-5xl md:text-6xl font-extrabold mb-2 ${stat.color}`}
                >
                  {animatedNumbers[index]}
                  {stat.suffix}
                </div>
                <p className="text-lg text-slate-700 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
