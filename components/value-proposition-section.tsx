"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, MapPin, Wrench, Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const benefits = [
  {
    icon: Award,
    title: "Authorized Waaree Franchise",
    description: "Official partnership with India's #1 solar brand",
  },
  {
    icon: MapPin,
    title: "Local Presence in Mumbai & Thane",
    description: "On-ground support and faster service delivery",
  },
  {
    icon: Wrench,
    title: "End-to-End Service",
    description: "Survey, installation, and after-sales support",
  },
  {
    icon: CheckCircle,
    title: "Backed by India's #1 Solar Brand",
    description: "Quality assurance and reliability you can trust",
  },
]

export function ValuePropositionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <Badge variant="secondary" className="mb-4">
              Why Choose AUMJAY + Waaree
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Your Trusted Solar Energy Partner</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              We combine Waaree's industry-leading technology with our local expertise to deliver exceptional solar
              solutions tailored to your needs.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-4 transition-all duration-500 ${
                      isVisible ? "animate-slide-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div
            className={`transition-all duration-700 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                      <Award className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">625 sq. ft. Showroom</h3>
                    <p className="text-muted-foreground">Visit our local showroom in Mumbai & Thane</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
