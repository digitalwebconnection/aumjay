"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, TrendingUp, Award, Building } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const highlights = [
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Comprehensive coverage for your solar panels",
  },
  {
    icon: TrendingUp,
    title: "3–4 Year ROI",
    description: "Quick investment return on solar installation",
  },
  {
    icon: Award,
    title: "Waaree Certified",
    description: "Authorized franchise and certified quality",
  },
  {
    icon: Building,
    title: "625 sq. ft. Showroom",
    description: "Local presence for consultation & support",
  },
]

export function HighlightsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-blue-50 via-white to-yellow-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
          Why Choose Our Solar Installation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <Card
                key={index}
                className={`relative overflow-hidden text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 ${
                  isVisible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6">
                  {/* Solar shine effect on card */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-transparent to-yellow-200 opacity-10 rotate-12 animate-shine pointer-events-none"></div>

                  <div className="mb-4 flex justify-center relative z-10">
                    <div className="p-4 bg-yellow-100 rounded-full shadow-lg hover:scale-110 transition-transform duration-500">
                      <Icon className="w-10 h-10 text-yellow-600 animate-pulse-slow" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-slate-900">{highlight.title}</h3>
                  <p className="text-slate-700 text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes slide-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease forwards;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%) rotate(12deg); opacity: 0; }
          50% { transform: translateX(100%) rotate(12deg); opacity: 0.3; }
          100% { transform: translateX(200%) rotate(12deg); opacity: 0; }
        }
        .animate-shine {
          animation: shine 2.5s linear infinite;
        }
      `}</style>
    </section>
  )
}
