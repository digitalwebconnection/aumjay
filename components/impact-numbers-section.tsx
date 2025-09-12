"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, TrendingDown, Zap } from "lucide-react"

const stats = [
  {
    icon: Shield,
    number: 25,
    suffix: "+",
    label: "Years Warranty",
    color: "text-primary",
  },
  {
    icon: TrendingDown,
    number: 90,
    suffix: "%",
    label: "Savings on Electricity Bills",
    color: "text-secondary",
  },
  {
    icon: Zap,
    number: 100,
    suffix: "+ kW",
    label: "Projects Pipeline in Mumbai & Thane",
    color: "text-primary",
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
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Proven Impact & Results</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Numbers that speak for our commitment to sustainable energy solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`text-center transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-background rounded-full shadow-lg">
                    <Icon className={`w-12 h-12 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-5xl md:text-6xl font-bold mb-2 ${stat.color} animate-counter`}>
                  {animatedNumbers[index]}
                  {stat.suffix}
                </div>
                <p className="text-lg text-muted-foreground font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
