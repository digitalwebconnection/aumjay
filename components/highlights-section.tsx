"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, TrendingUp, Award, Building } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const highlights = [
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Comprehensive coverage for your solar panels",
    color: "text-green-600",
  },
  {
    icon: TrendingUp,
    title: "3–4 Year ROI",
    description: "Quick investment return on solar installation",
    color: "text-yellow-500",
  },
  {
    icon: Award,
    title: "Waaree Certified",
    description: "Authorized franchise and certified quality",
    color: "text-green-600",
  },
  {
    icon: Building,
    title: "625 sq. ft. Showroom",
    description: "Local presence for consultation & support",
    color: "text-yellow-500",
  },
]

export function HighlightsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Why Choose Our Solar Installation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <Card
                key={index}
                className={`relative overflow-hidden text-center border border-gray-100 bg-white shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  {/* Icon with brand colors */}
                  <div className="mb-6 flex justify-center">
                    <div className="p-5 rounded-full bg-gradient-to-br from-yellow-100 to-green-100 shadow-inner hover:scale-110 transition-transform duration-500">
                      <Icon className={`w-10 h-10 ${highlight.color}`} />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease forwards;
        }
      `}</style>
    </section>
  )
}
