import Hero from "../components/Hero";
import About from "../components/About";
import MissionAnimation from "../components/MissionAnimation";
import GallerySection from "../components/GallerySection";
import Slider from "@/components/slider";
import Events from "@/components/Events";
export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Hero />
            <About />
            <Events />
            <MissionAnimation />
            <Slider />
            <GallerySection />
        </div>
    );
}
