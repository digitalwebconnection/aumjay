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
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
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
                className={`relative overflow-hidden border text-center border-black bg-white shadow-lg 
                            transition-all duration-500 ease-in-out
                            ${isVisible ? "animate-bounce-fade" : "opacity-0 translate-y-5"} 
                            hover:shadow-3xl hover:scale-105`}
                style={{ animationDelay: isVisible ? `${index * 0.2}s` : '0s' }}
              >
                <CardContent className="p-4">
                  <div className="mb-6 flex justify-center">
                    <div className="p-5 rounded-full bg-gray-300  shadow-inner animate-pulse-slow hover:scale-110 transition-transform duration-500">
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

        @keyframes bounce-fade {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          50% {
            opacity: 1;
            transform: translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-bounce-fade {
          animation: bounce-fade 0.8s ease forwards;
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
