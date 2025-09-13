"use client"

import { Sun, Battery, Zap, Home, Building2, Users, Handshake } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const homeownerFeatures = [
  {
    icon: Sun,
    title: "Rooftop Solutions",
    description: "Maximize energy generation with expert rooftop installations."
  },
  {
    icon: Battery,
    title: "Society Solar Plans",
    description: "Customized plans for societies to optimize energy use."
  },
  {
    icon: Zap,
    title: "Subsidy Guidance",
    description: "We help you access government subsidies and incentives easily."
  }
]

const businessFeatures = [
  {
    icon: Sun,
    title: "Product Supply",
    description: "Panels, inverters, and batteries sourced from top manufacturers."
  },
  {
    icon: Battery,
    title: "EPC Services",
    description: "End-to-end engineering and procurement solutions."
  },
  {
    icon: Handshake,
    title: "Dealer Partnerships",
    description: "Grow your business through our franchise and partnership models."
  }
]

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

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-b from-green-50 via-white to-yellow-50 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Sun className="absolute top-10 left-10 w-20 h-20 text-yellow-400 opacity-20 animate-float-slow" />
        <Battery className="absolute bottom-20 right-10 w-16 h-16 text-green-400 opacity-20 animate-float-slow-reverse" />
        <Zap className="absolute top-1/3 right-20 w-14 h-14 text-yellow-500 opacity-15 animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-4xl font-bold mb-12 bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-black">
          Choose Your Solar Journey
        </h2>

        <div className="space-y-12">
          {/* Homeowners Section */}
          <div className="bg-white rounded-xl shadow-lg border border-black overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-black/80 text-white p-6 flex flex-col justify-center items-center space-y-4" style={{
                backgroundImage:
                  "url('https://static.vecteezy.com/system/resources/thumbnails/024/712/158/small/sunset-sky-reflects-solar-panel-sustainable-power-generation-generative-ai-photo.jpg')",
              }}>
                
                <Home className="w-12 h-12" />
                <h3 className="text-xl font-bold">Homeowners & Societies</h3>
              </div>
              <div className="md:w-2/3 p-6 space-y-6">
                {homeownerFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.2 }}
                    className="flex items-start gap-4 p-4 border-l-4 border-green-500 shadow-xl hover:bg-green-50 rounded-md transition-colors duration-300"
                  >
                    <div className="p-2 bg-green-100 rounded-full">
                      <feature.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
                <div className="text-center mt-6">
                  <button className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition-colors duration-300 shadow-md hover:shadow-lg">
                    Explore Homeowner Plans
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Businesses Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl border border-black transition-shadow duration-300">
            <div className="flex flex-col md:flex-row-reverse">
              <div className="md:w-1/3 bg-black/50 text-white p-6 flex flex-col justify-center items-center space-y-4" style={{
                backgroundImage:
                  "url('https://static.vecteezy.com/system/resources/thumbnails/024/712/158/small/sunset-sky-reflects-solar-panel-sustainable-power-generation-generative-ai-photo.jpg')",
              }}>
                <Building2 className="w-12 h-12" />
                <h3 className="text-xl font-bold">Businesses & Dealers</h3>
              </div>
              <div className="md:w-2/3 p-6 space-y-6">
                {businessFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.2 }}
                    className="flex items-start gap-4 p-4 border-l-4 shadow-xl border-yellow-500 hover:bg-yellow-50 rounded-md transition-colors duration-300"
                  >
                    <div className="p-2 bg-yellow-100 rounded-full">
                      <feature.icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
                <div className="text-center mt-6">
                  <button className="px-6 py-3 bg-green-700 text-white font-bold rounded-md hover:bg-green-800 transition-colors duration-300 shadow-md hover:shadow-lg">
                    Explore Business Solutions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-float-slow-reverse {
          animation: float-slow 12s ease-in-out infinite reverse;
        }
      `}</style>
    </section>
  )
}
