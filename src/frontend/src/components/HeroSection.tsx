import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-barbershop.dim_1600x900.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to top, oklch(10% 0 0), transparent)",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="text-sm tracking-[0.35em] uppercase mb-6 fade-in delay-100"
          style={{ color: "var(--gold)" }}
        >
          ✦ &nbsp; Premium Grooming &nbsp; ✦
        </p>

        <h1
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 fade-in-up delay-200 leading-none"
          style={{
            background:
              "linear-gradient(135deg, oklch(82% 0.16 85), oklch(60% 0.10 85), oklch(82% 0.16 85))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Raju Hare Dare
        </h1>

        <div className="flex items-center justify-center gap-4 mb-8 fade-in delay-300">
          <div
            className="h-px w-16"
            style={{ background: "var(--gold-dim)" }}
          />
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--gold-dim)" }}
          >
            Est. 2010
          </span>
          <div
            className="h-px w-16"
            style={{ background: "var(--gold-dim)" }}
          />
        </div>

        <p className="text-lg md:text-2xl text-ivory/80 tracking-wide mb-12 font-light fade-in-up delay-400">
          Luxury Grooming Experience for Modern Men
        </p>

        <div className="fade-in-up delay-500">
          <button
            type="button"
            onClick={scrollToBooking}
            className="btn-gold"
            data-ocid="hero.primary_button"
          >
            <span>Book Appointment</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 fade-in delay-600 animate-bounce">
        <ChevronDown size={24} style={{ color: "var(--gold-dim)" }} />
      </div>
    </section>
  );
}
