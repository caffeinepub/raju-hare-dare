import { useEffect } from "react";
import { AboutSection } from "./components/AboutSection";
import { BookingSection } from "./components/BookingSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ServicesSection } from "./components/ServicesSection";

function useScrollAnimation() {
  useEffect(() => {
    const run = () => {
      const elements = document.querySelectorAll(".fade-in-up, .fade-in");
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
      );
      for (const el of elements) {
        observer.observe(el);
      }
      return observer;
    };

    const obs = run();
    const timer = setTimeout(() => obs.disconnect(), 10000);
    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  }, []);
}

export default function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen" style={{ background: "var(--cream)" }}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
