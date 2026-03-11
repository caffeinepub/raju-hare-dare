import {
  Droplets,
  Leaf,
  Palette,
  Scissors,
  Sparkles,
  Star,
  Wind,
} from "lucide-react";

const services = [
  {
    icon: Scissors,
    name: "Basic Haircut",
    price: "₹80 – ₹150",
    desc: "Precision cuts tailored to your style",
  },
  {
    icon: Star,
    name: "Beard Trim/Style",
    price: "₹50 – ₹100",
    desc: "Expert beard shaping and grooming",
  },
  {
    icon: Sparkles,
    name: "Clean Shave",
    price: "₹50 – ₹80",
    desc: "Classic hot towel straight razor shave",
  },
  {
    icon: Wind,
    name: "Head Massage",
    price: "₹50 – ₹100",
    desc: "Relaxing therapeutic scalp treatment",
  },
  {
    icon: Palette,
    name: "Hair Colour/Dye",
    price: "₹150 – ₹300",
    desc: "Professional coloring and highlights",
  },
  {
    icon: Leaf,
    name: "Face Cleanup/Facial",
    price: "₹200 – ₹500",
    desc: "Deep cleansing and rejuvenating facial",
  },
  {
    icon: Droplets,
    name: "Hair Spa",
    price: "₹300 – ₹600",
    desc: "Nourishing premium hair spa treatment",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-scroll py-24 md:py-32"
      style={{ background: "var(--cream-alt)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.35em] uppercase mb-4 fade-in-up"
            style={{ color: "var(--gold)" }}
          >
            What We Offer
          </p>
          <h2
            className="font-display text-4xl md:text-6xl font-bold mb-6 fade-in-up delay-100"
            style={{ color: "var(--dark)" }}
          >
            Our Services
          </h2>
          <div className="flex items-center justify-center fade-in delay-200">
            <div
              className="h-px w-24"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--gold), transparent)",
              }}
            />
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const ocid = `services.item.${i + 1}` as const;
            return (
              <div
                key={service.name}
                className={`service-card p-6 flex items-center gap-5 fade-in-up delay-${Math.min((i + 1) * 100, 600)}`}
                data-ocid={ocid}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                  style={{
                    border: "1px solid oklch(62% 0.14 85 / 0.35)",
                    background: "oklch(96% 0.012 85)",
                  }}
                >
                  <Icon size={20} style={{ color: "var(--gold)" }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className="font-display text-lg font-semibold"
                      style={{ color: "var(--dark)" }}
                    >
                      {service.name}
                    </h3>
                    <span
                      className="text-base font-bold tracking-wide flex-shrink-0"
                      style={{ color: "var(--gold)" }}
                    >
                      {service.price}
                    </span>
                  </div>
                  <p className="text-sm mt-1" style={{ color: "var(--smoke)" }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
