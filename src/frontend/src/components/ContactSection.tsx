import { Clock, Mail, MapPin, Phone } from "lucide-react";

function hoverGold(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.color = "var(--gold)";
}
function hoverSmoke(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.color = "var(--smoke)";
}

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-scroll py-24 md:py-32"
      style={{ background: "var(--cream)" }}
      data-ocid="contact.section"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.35em] uppercase mb-4 fade-in-up"
            style={{ color: "var(--gold)" }}
          >
            Find Us
          </p>
          <h2
            className="font-display text-4xl md:text-6xl font-bold mb-6 fade-in-up delay-100"
            style={{ color: "var(--dark)" }}
          >
            Contact Us
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8 fade-in-up delay-300">
            {[
              {
                Icon: MapPin,
                title: "Address",
                content: "H.P / Amb Andhora, India",
                href: undefined as string | undefined,
              },
              {
                Icon: Phone,
                title: "Phone",
                content: "+91 7876746538",
                href: "tel:7876746538" as string | undefined,
              },
              {
                Icon: Mail,
                title: "Email",
                content: "h0447614@gmail.com",
                href: "mailto:h0447614@gmail.com" as string | undefined,
              },
              {
                Icon: Clock,
                title: "Hours",
                content:
                  "Mon \u2013 Sat: 9:00 AM \u2013 8:00 PM\nSunday: 10:00 AM \u2013 6:00 PM",
                href: undefined as string | undefined,
              },
            ].map(({ Icon, title, content, href }) => (
              <div key={title} className="flex items-start gap-5">
                <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center mt-1"
                  style={{
                    border: "1px solid oklch(62% 0.14 85 / 0.35)",
                    background: "oklch(96% 0.012 85)",
                  }}
                >
                  <Icon size={20} style={{ color: "var(--gold)" }} />
                </div>
                <div>
                  <h3
                    className="font-display text-lg font-semibold mb-1"
                    style={{ color: "var(--dark)" }}
                  >
                    {title}
                  </h3>
                  {href ? (
                    <a
                      href={href}
                      className="transition-colors"
                      style={{ color: "var(--smoke)" }}
                      onMouseEnter={hoverGold}
                      onMouseLeave={hoverSmoke}
                    >
                      {content}
                    </a>
                  ) : (
                    content.split("\n").map((line) => (
                      <p key={line} style={{ color: "var(--smoke)" }}>
                        {line}
                      </p>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div
            className="fade-in-up delay-400 overflow-hidden"
            style={{
              border: "1px solid oklch(62% 0.14 85 / 0.25)",
              height: "380px",
              boxShadow: "0 4px 20px oklch(0% 0 0 / 0.06)",
            }}
          >
            <iframe
              title="Raju Hare Dare Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.8!2d76.4!3d31.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b581c3c3c3c3c%3A0x0!2sAmb%2C+Himachal+Pradesh%2C+India!5e0!3m2!1sen!2sin!4v1701000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-ocid="contact.map_marker"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
