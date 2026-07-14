import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ScrollCanvas from '@/components/ScrollCanvas';
import PerformanceSection from '@/components/PerformanceSection';
import DisplaySection from '@/components/DisplaySection';
import CameraSection from '@/components/CameraSection';
import CoolingSection from '@/components/CoolingSection';
import BatterySection from '@/components/BatterySection';
import SpecsSection from '@/components/SpecsSection';
import FooterCTA from '@/components/FooterCTA';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Core Experience: Canvas + Overlays */}
        <ScrollCanvas />

        <PerformanceSection />
        <DisplaySection />
        <CameraSection />
        <CoolingSection />
        <BatterySection />
        <SpecsSection />
      </main>
      <FooterCTA />
      
      <ScrollProgress />
    </>
  );
}
