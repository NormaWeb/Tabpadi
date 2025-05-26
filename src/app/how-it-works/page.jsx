import Navbar from "@/components/Navbar"
import HowItWorksSection from "@/components/HowItWorks"
import Footer from "@/components/Footer"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="py-16">
        <HowItWorksSection />
      </div>
      <Footer />
    </main>
  )
}
