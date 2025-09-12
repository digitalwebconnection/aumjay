import { HeroSection } from "@/components/hero-section"
import { HighlightsSection } from "@/components/highlights-section"
import { TwoPathsSection } from "@/components/two-paths-section"
import { InteractiveProductShowcase } from "@/components/interactive-product-showcase"
import { ImpactNumbersSection } from "@/components/impact-numbers-section"
import { ValuePropositionSection } from "@/components/value-proposition-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BottomCTASection } from "@/components/bottom-cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HighlightsSection />
      <TwoPathsSection />
      <InteractiveProductShowcase />
      <ImpactNumbersSection />
      <ValuePropositionSection />
      <TestimonialsSection />
      <BottomCTASection />
    </main>
  )
}
