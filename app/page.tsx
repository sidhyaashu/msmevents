import Hero from "@/components/Hero";
import Collaborators from "@/components/Collaborators";
import WaveSection from "@/components/WaveSection";
import About from "@/components/About";
import Cases from "@/components/Cases";
import Services from "@/components/Services";
import TeamSection from "@/components/TeamSection";

import Footer from "@/components/Footer";
import PhotoMarquee from "@/components/PhotoMarquee";
import Quiz from "@/components/Quiz";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      <Hero />
      <WaveSection />
      <PhotoMarquee />
      <About />
      <Quiz />
      <Collaborators />
      <Cases />
      <Services />
      <TeamSection />
      <Contacts />
      <Footer />
    </main>
  );
}
