"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sun, Zap, Shield } from "lucide-react"
import { useEffect, useState } from "react"

const bgImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPs-ZiCJ6PvOv514pSPo_HMEa3eAQhlXZ4ZCBomMw8NoTW4KbTG8Rm-745MSp5ZKi8KvQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRitKJTt6NNDLeBIcbq5MexpQVQAau3WJ1paWFzk_7MTApSVIvt2e7UcWuo0DDKNAkAfQg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRitKJTt6NNDLeBIcbq5MexpQVQAau3WJ1paWFzk_7MTApSVIvt2e7UcWuo0DDKNAkAfQg&usqp=CAU",
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {bgImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            } ${index === current ? "animate-kenburns" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 opacity-20 z-20">
        <div className="absolute top-20 left-20 animate-float">
          <Sun className="w-16 h-16 text-yellow-400" />
        </div>
        <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: "1s" }}>
          <Zap className="w-12 h-12 text-green-400" />
        </div>
        <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: "2s" }}>
          <Shield className="w-14 h-14 text-orange-400" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 lg:px-16 text-left relative z-30">
        <div className="max-w-2xl transition-all duration-1000 animate-slide-up">
          <Badge variant="secondary" className="mb-6 text-sm font-medium animate-pulse-glow">
            🏆 Authorized Waaree Franchise
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
            Trusted Solar Partner for Homes, Societies & Businesses
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
            Save up to 90% on electricity bills with India's #1 solar brand – delivered locally by AUMJAY in Mumbai &
            Thane.
          </p>

          {/* Buttons aligned left */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-yellow-500/90 hover:bg-yellow-600 text-black shadow-lg">
              🔆 Book Free Home/Society Survey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2 text-white hover:bg-white/10 bg-transparent"
            >
              📩 Request Business Proposal
            </Button>
          </div>

          {/* Highlights Showcase */}
          <div className="flex flex-wrap gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-yellow-400" />
              <span>25-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-green-400" />
              <span>Waaree Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5 text-yellow-300" />
              <span>625 sq. ft. Showroom</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes kenburns {
          0% {
            transform: scale(1.1) translate(0, 0);
          }
          50% {
            transform: scale(1.5) translate(-5%, -5%);
          }
          100% {
            transform: scale(1.3) translate(0, 0);
          }
        }
        .animate-kenburns {
          animation: kenburns 12s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
