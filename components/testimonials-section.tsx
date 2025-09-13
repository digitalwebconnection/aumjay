"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote, Sun, Battery, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Homeowner, Thane",
    content:
      "AUMJAY helped us save 80% on our electricity bills. The installation was smooth and the team was very professional.",
    rating: 5,
    initials: "RS",
  },
  {
    name: "Priya Patel",
    role: "Society Secretary, Mumbai",
    content:
      "Our housing society achieved 70% savings in just one year. Excellent service and support from the AUMJAY team.",
    rating: 5,
    initials: "PP",
  },
  {
    name: "Amit Kumar",
    role: "Business Owner, Mumbai",
    content:
      "The ROI was exactly as promised - 3.5 years. Great quality Waaree panels and professional installation.",
    rating: 5,
    initials: "AK",
  },
]

export function TestimonialsSection() {
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
    <section
      ref={sectionRef}
      className="relative py-14 bg-black/10 overflow-hidden"
    >
      {/* Animated Icons */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Sun className="absolute top-10 left-10 w-16 h-16 text-yellow-400 opacity-30 animate-float-slow" />
        <Battery className="absolute bottom-20 right-10 w-14 h-14 text-green-400 opacity-30 animate-float-slow-reverse" />
        <Zap className="absolute top-1/3 right-20 w-12 h-12 text-yellow-500 opacity-25 animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 text-green-900">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Real experiences from homeowners, societies, and businesses who chose solar energy.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`w-[300px] bg-white/90 shadow-xl rounded-2xl border border-white/30 transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
                isVisible ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-5">
                <div className="flex items-center gap-1 mb-3 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 drop-shadow-sm" />
                  ))}
                </div>
                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-yellow-400/30 absolute -top-2 -left-2" />
                  <p className="text-gray-900 italic pl-6 text-sm text-center">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease forwards;
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-slow-reverse {
          animation: float-slow 8s ease-in-out infinite reverse;
        }
      `}</style>
    </section>
  )
}
