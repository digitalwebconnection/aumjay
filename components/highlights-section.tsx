"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, TrendingUp, Award, Building } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const highlights = [
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Comprehensive coverage",
  },
  {
    icon: TrendingUp,
    title: "3–4 Year ROI",
    description: "Quick investment return",
  },
  {
    icon: Award,
    title: "Waaree Certified",
    description: "Authorized franchise",
  },
  {
    icon: Building,
    title: "625 sq. ft. Showroom",
    description: "Local presence",
  },
]

export function HighlightsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <Card
                key={index}
                className={`text-center hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
