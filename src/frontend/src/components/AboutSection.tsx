import { Scissors } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-scroll py-24 md:py-32"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        {/* Icon */}
        <div
          className="inline-flex items-center justify-center w-16 h-16 mb-8 fade-in-up"
          style={{ border: "1px solid oklch(62% 0.14 85 / 0.4)" }}
        >
          <Scissors
            size={28}
            style={{ color: "var(--gold)" }}
            className="rotate-45"
          />
        </div>

        {/* Label */}
        <p
          className="text-sm tracking-[0.35em] uppercase mb-4 fade-in-up delay-100"
          style={{ color: "var(--gold)" }}
        >
          Our Story
        </p>

        {/* Heading */}
        <h2
          className="font-display text-4xl md:text-6xl font-bold mb-8 fade-in-up delay-200"
          style={{ color: "var(--dark)" }}
        >
          About Us
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center mb-10 fade-in delay-300">
          <div
            className="h-px w-24"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--gold), transparent)",
            }}
          />
        </div>

        {/* Text */}
        <p
          className="text-lg md:text-xl leading-relaxed fade-in-up delay-400"
          style={{ color: "oklch(38% 0 0)" }}
        >
          Welcome to{" "}
          <span style={{ color: "var(--gold)" }}>Raju Hare Dare</span> — your
          premier destination for luxury grooming in{" "}
          <span style={{ color: "var(--dark)" }} className="font-semibold">
            H.P / Amb Andhora, India
          </span>
          . We combine traditional barbering techniques with modern styling to
          deliver an unmatched grooming experience. Our skilled professionals
          are dedicated to precision, style, and complete customer satisfaction.
          Every visit is crafted to make you look and feel your best.
        </p>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-8 mt-16 pt-16 fade-in-up delay-500"
          style={{ borderTop: "1px solid oklch(62% 0.14 85 / 0.2)" }}
        >
          {[
            { num: "15+", label: "Years of Excellence" },
            { num: "5000+", label: "Happy Clients" },
            { num: "7", label: "Expert Services" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold gold-gradient-text">
                {stat.num}
              </div>
              <div
                className="text-sm tracking-wider uppercase mt-2"
                style={{ color: "var(--smoke)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
