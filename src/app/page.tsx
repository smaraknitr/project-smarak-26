import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import MissionAnimation from "../components/MissionAnimation";
import GallerySection from "../components/GallerySection";
import Slider from "@/components/slider";
export default function Home() {
    return (
        <div className="bg-[#f4e8d5]">
            <Navbar />
            <Hero />
            <About />
            <MissionAnimation />
            <Slider />
            <GallerySection />
            <Footer />
        </div>
    );
}
