import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ScrollCanvas from '@/components/ScrollCanvas';

const PerformanceSection = dynamic(() => import('@/components/PerformanceSection'), { ssr: false });
const DisplaySection = dynamic(() => import('@/components/DisplaySection'), { ssr: false });
const CameraSection = dynamic(() => import('@/components/CameraSection'), { ssr: false });
const CoolingSection = dynamic(() => import('@/components/CoolingSection'), { ssr: false });
const BatterySection = dynamic(() => import('@/components/BatterySection'), { ssr: false });
const SpecsSection = dynamic(() => import('@/components/SpecsSection'), { ssr: false });
const FooterCTA = dynamic(() => import('@/components/FooterCTA'), { ssr: false });
const ScrollProgress = dynamic(() => import('@/components/ui/ScrollProgress'), { ssr: false });

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
