import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import Navbar from '@/components/Navbar';
import NavLink from '@/components/NavLink';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';



export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212] mb-0">
            <Navbar/>
            <div class='container mt-24 mx-auto px-12 py-4 mb-0'>
                <HeroSection />
                <Features />
                <HowItWorks />
                <WhyChooseUs />
            </div>
        <Footer />
        </main>
    );
}
