"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote, Sun } from "lucide-react"
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom right, #e6f7e9, #fffbe6)`,
      }}
    >
      {/* Soft sun rays / solar effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] w-[120%] h-[120%] bg-yellow-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-[20%] right-[-15%] w-[100%] h-[100%] bg-green-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 text-green-900">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Real experiences from homeowners, societies, and businesses who chose solar energy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`backdrop-blur-md bg-white/80 shadow-lg rounded-2xl border border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? "animate-fade-up opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 drop-shadow-sm" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-yellow-400/30 absolute -top-2 -left-2" />
                  <p className="text-gray-900 italic pl-6">"{testimonial.content}"</p>
                </div>

                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-r from-green-600 to-green-800 text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
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

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
