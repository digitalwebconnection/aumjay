"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building2, Users, Handshake, Sun } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function TwoPathsSection() {
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

  // Motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, delay }
    })
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-green-50 via-white to-yellow-50 overflow-hidden"
    >
      {/* Section Heading */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
              Choose Your Solar Journey
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Whether you're a homeowner or business, we provide tailored solar
              solutions for a greener, brighter future.
            </p>
          </motion.div>
        </div>

        {/* Two Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Homeowners & Societies */}
          <motion.div
            custom={0.2}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -8 }}
          >
            <Card className="relative overflow-hidden shadow-lg hover:shadow-2xl rounded-2xl transition-all duration-500 border border-green-200">
              {/* Solar Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-100/40 to-yellow-100/40 opacity-70" />
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Home className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-green-900">
                    For Homeowners & Societies
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="space-y-3">
                  {["Rooftop Solutions", "Society Solar Plans", "Government Subsidy Guidance"].map(
                    (item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + i * 0.2 }}
                        className="flex items-center gap-3"
                      >
                        <Sun className="w-4 h-4 text-green-600" />
                        <span>{item}</span>
                      </motion.div>
                    )
                  )}
                </div>
                <Button
                  className="w-full mt-6 text-black font-bold relative overflow-hidden group bg-yellow-400"
                  size="lg"
                >
                  <span className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Users className="w-5 h-5 mr-2" />
                  Explore Homeowner Plans
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Businesses & Dealers */}
          <motion.div
            custom={0.4}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -8 }}
          >
            <Card className="relative overflow-hidden shadow-lg hover:shadow-2xl rounded-2xl transition-all duration-500 border border-yellow-200">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/40 to-green-100/40 opacity-70" />
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-yellow-100 rounded-full">
                    <Building2 className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-2xl text-yellow-900">
                    For Businesses & Dealers
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="space-y-3">
                  {[
                    "Product Supply (Panels, Inverters, Batteries)",
                    "EPC (Engineering, Procurement, Construction)",
                    "Partner With Us (Dealer/Franchise Opportunities)"
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.2 }}
                      className="flex items-center gap-3"
                    >
                      <Sun className="w-4 h-4 text-yellow-600" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
                <Button
                  className="w-full text-black font-bold mt-6 relative overflow-hidden group bg-green-700"
                  size="lg"
                >
                  <span className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Handshake className="w-5 h-5 mr-2" />
                  Explore Business Solutions
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
