"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sun, Zap, Shield } from "lucide-react"
import { useEffect, useState } from "react"

const bgImages = [
  "https://greenhomesystems.com/wp-content/uploads/2023/09/blog-cover-photo-98.jpg",
  "https://waaree.com/wp-content/uploads/2025/07/Solar-panels-online-scaled.jpg",
  "https://frontend-cdn.solarreviews.com/hero-placeholder.jpg",
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length)
    }, 5000)
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
        {/* Overlay with gradient + darker layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80 z-10" />
      </div>

      {/* Floating Solar Icons with Glow */}
      <div className="absolute inset-0 opacity-30 z-20">
        <div className="absolute top-20 left-20 animate-float-slow">
          <Sun className="w-16 h-16 text-yellow-400 drop-shadow-glow" />
        </div>
        <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: "1s" }}>
          <Zap className="w-12 h-12 text-green-400 drop-shadow-glow" />
        </div>
        <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: "2s" }}>
          <Shield className="w-14 h-14 text-orange-400 drop-shadow-glow" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 lg:px-16 text-left relative z-30">
        <div className="max-w-2xl transition-all duration-1000 animate-slide-up">
          <Badge variant="secondary" className="mb-6 text-sm font-medium animate-pulse-glow">
            🏆 Authorized Waaree Franchise
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-yellow-300 via-green-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x">
            Trusted Solar Partner for Homes, Societies & Businesses
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl animate-fade-in">
            Save up to 90% on electricity bills with India's #1 solar brand – delivered locally by AUMJAY in Mumbai &
            Thane.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-yellow-500/90 hover:bg-yellow-500 text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/50"
            >
              🔆 Book Free Home/Society Survey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2 text-white hover:bg-white/10 bg-transparent hover:scale-105 transition-all duration-300"
            >
              📩 Request Business Proposal
            </Button>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-6 text-sm text-white/90 animate-fade-in-delay">
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

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes kenburns {
          0% {
            transform: scale(1.1) translate(0, 0);
          }
          50% {
            transform: scale(1.3) translate(-4%, -4%);
          }
          100% {
            transform: scale(1.1) translate(0, 0);
          }
        }
        .animate-kenburns {
          animation: kenburns 12s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 10s ease-in-out infinite;
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 1.2s ease-out forwards;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 2s ease-in forwards;
        }
        .animate-fade-in-delay {
          animation: fade-in 3s ease-in forwards;
        }

        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }

        .drop-shadow-glow {
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8));
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.6);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.9);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite alternate;
        }
      `}</style>
    </section>
  )
}
