import Navbar from "@/components/ui/Navbar";
import ScrollToHash from "@/components/ui/ScrollToHash";
import Hero from "@/components/sections/Hero";
import Scope from "@/components/sections/Scope";
import Deliverables from "@/components/sections/Deliverables";
import Services from "@/components/sections/Services";
import BeforeAfterGallery from "@/components/sections/BeforeAfterGallery";
import SocialMediaImpact from "@/components/sections/SocialMediaImpact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[var(--color-bng-red)] selection:text-white">
      <Navbar />
      <ScrollToHash />
      <Hero />

      <BeforeAfterGallery />

      <SocialMediaImpact />

      <Scope />

      <Deliverables />

      <Services />
    </main>
  );
}
