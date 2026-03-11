import { Facebook, Instagram, Scissors, Twitter } from "lucide-react";

function hoverGold(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.color = "var(--gold)";
}
function hoverDim(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.color = "oklch(40% 0 0)";
}
function hoverSocialGold(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.color = "var(--gold)";
  e.currentTarget.style.borderColor = "oklch(62% 0.14 85 / 0.7)";
}
function hoverSocialReset(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.color = "oklch(55% 0 0)";
  e.currentTarget.style.borderColor = "oklch(62% 0.14 85 / 0.3)";
}

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`;

  return (
    <footer
      style={{
        background: "oklch(15% 0 0)",
        borderTop: "1px solid oklch(62% 0.14 85 / 0.2)",
      }}
      className="py-16"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors
                size={18}
                style={{ color: "var(--gold)" }}
                className="rotate-45"
              />
              <span className="font-display text-xl font-bold tracking-widest gold-gradient-text uppercase">
                Raju Hare Dare
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "oklch(55% 0 0)" }}
            >
              Premium grooming experience for modern men. Your luxury barber
              shop in H.P / Amb Andhora, India.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-5"
              style={{ color: "var(--gold)" }}
            >
              Contact
            </h4>
            <ul className="space-y-3" style={{ color: "oklch(55% 0 0)" }}>
              <li className="text-sm">H.P / Amb Andhora, India</li>
              <li>
                <a
                  href="tel:7876746538"
                  className="text-sm transition-colors"
                  style={{ color: "oklch(55% 0 0)" }}
                  onMouseEnter={hoverGold}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "oklch(55% 0 0)";
                  }}
                >
                  +91 7876746538
                </a>
              </li>
              <li>
                <a
                  href="mailto:h0447614@gmail.com"
                  className="text-sm transition-colors"
                  style={{ color: "oklch(55% 0 0)" }}
                  onMouseEnter={hoverGold}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "oklch(55% 0 0)";
                  }}
                >
                  h0447614@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase mb-5"
              style={{ color: "var(--gold)" }}
            >
              Follow Us
            </h4>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, label: "Facebook", href: "#" },
                { Icon: Instagram, label: "Instagram", href: "#" },
                { Icon: Twitter, label: "Twitter", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    border: "1px solid oklch(62% 0.14 85 / 0.3)",
                    color: "oklch(55% 0 0)",
                  }}
                  onMouseEnter={hoverSocialGold}
                  onMouseLeave={hoverSocialReset}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid oklch(62% 0.14 85 / 0.1)",
            color: "oklch(40% 0 0)",
          }}
        >
          <span>\u00a9 {year} Raju Hare Dare. All rights reserved.</span>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors"
            style={{ color: "oklch(40% 0 0)" }}
            onMouseEnter={hoverGold}
            onMouseLeave={hoverDim}
          >
            Built with \u2764\ufe0f using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
