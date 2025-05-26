import Navbar from "@/components/Navbar";
import WhyChooseSection from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="py-16">
        <WhyChooseSection />
      </div>
      <Footer />
    </main>
  )
}
