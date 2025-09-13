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
    bg: "bg-green-50",
  },
  {
    icon: TrendingDown,
    number: 90,
    suffix: "%",
    label: "Savings on Electricity Bills",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    icon: Zap,
    number: 100,
    suffix: "+ kW",
    label: "Projects Pipeline in Mumbai & Thane",
    color: "text-blue-600",
    bg: "bg-blue-50",
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
      aria-label="Impact numbers and statistics"
      className="relative py-14 bg-gray-100 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Impact at a Glance
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Sustainable energy solutions that make a real difference for communities and businesses.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow p-6 flex flex-col items-center text-center"
              >
                <div className={`w-16 h-16 flex items-center justify-center rounded-full ${stat.bg} mb-4`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color}`}>
                  {animatedNumbers[index]}
                  {stat.suffix}
                </div>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
