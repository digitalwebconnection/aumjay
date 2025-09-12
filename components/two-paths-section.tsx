"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building2, Users, Handshake } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function TwoPathsSection() {
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
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Choose Your Solar Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Whether you're a homeowner or business, we have tailored solutions for your energy needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Homeowners & Societies */}
          <Card
            className={`relative overflow-hidden hover:shadow-xl transition-all duration-500 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">For Homeowners & Societies</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Rooftop Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Societies Solar Plans</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Government Subsidy Guidance</span>
                </div>
              </div>
              <Button className="w-full mt-6" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Explore Homeowner Plans
              </Button>
            </CardContent>
          </Card>

          {/* Businesses & Dealers */}
          <Card
            className={`relative overflow-hidden hover:shadow-xl transition-all duration-500 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -translate-y-16 translate-x-16"></div>
            <CardHeader className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Building2 className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">For Businesses & Dealers</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Product Supply (Panels, Inverters, Batteries)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>EPC (Engineering, Procurement, Construction) Services</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Partner With Us (Dealer/Franchise Opportunities)</span>
                </div>
              </div>
              <Button variant="secondary" className="w-full mt-6" size="lg">
                <Handshake className="w-5 h-5 mr-2" />
                Explore Business Solutions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
