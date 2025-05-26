import Navbar from "@/components/navbar";
import FeaturesSection from "@/components/Features";
import Footer from "@/components/footer";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="py-16">
        <FeaturesSection />
      </div>
      <Footer />
    </main>
  )
}
