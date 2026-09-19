import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileActionBar from "@/components/layout/MobileActionBar";
import Contact from "@/components/sections/Contact";
import Founder from "@/components/sections/Founder";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

/** Single-page portfolio landing site for Solved Engineering. */
export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Hero />
        <Services />
        <Gallery />
        <Founder />
        <Contact />
      </main>

      <Footer />
      <MobileActionBar />
    </>
  );
}
