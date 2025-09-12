"use client"

import { Button } from "@/components/ui/button"
import { Sun, Phone, Mail, Shield, TrendingUp, Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function BottomCTASection() {
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
      className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-muted/30 to-white"
    >
      {/* Background animation blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-bounce-slow" />
      </div>

      <div
        className={`container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Left Content */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center relative">
              <span className="absolute inset-0 bg-primary/20 blur-xl animate-ping rounded-full" />
              <Sun className="w-8 h-8 text-primary relative z-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              AUMJAY – Delivering Waaree Solar,
              <br />
              Locally in Mumbai & Thane
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Ready to start your solar journey? Get a free consultation and
            discover how much you can save on electricity bills.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              <Phone className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">Book Free Survey</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2 hover:bg-secondary hover:text-secondary-foreground relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-secondary/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              <Mail className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">Request Business Proposal</span>
            </Button>
          </div>
        </div>

        {/* Right Side Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: Shield, title: "25-Year Warranty" },
            { icon: TrendingUp, title: "3–4 Year ROI" },
            { icon: Award, title: "Waaree Certified" },
            { icon: Sun, title: "Trusted Local Partner" },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-primary/30 transition-transform hover:-translate-y-2"
              >
                <Icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold">{item.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
