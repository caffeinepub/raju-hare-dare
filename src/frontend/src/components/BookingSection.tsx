import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useActor } from "../hooks/useActor";

const SERVICES = [
  "Basic Haircut",
  "Beard Trim/Style",
  "Clean Shave",
  "Head Massage",
  "Hair Colour/Dye",
  "Face Cleanup/Facial",
  "Hair Spa",
];

type FormState = {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
};

export function BookingSection() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);
  const [bookingId, setBookingId] = useState<bigint | null>(null);
  const [error, setError] = useState("");

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.phone ||
      !form.service ||
      !form.date ||
      !form.time
    ) {
      setError("Please fill in all fields.");
      return;
    }
    if (!actor) {
      setError("Connection not ready. Please try again.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const id = await actor.bookAppointment(
        form.name,
        form.phone,
        form.service,
        form.date,
        form.time,
      );
      setBookingId(id);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 input-luxury text-base focus:ring-0 focus:outline-none";
  const labelClass = "block text-xs tracking-widest uppercase mb-2";

  return (
    <section
      id="booking"
      className="section-scroll py-24 md:py-32"
      style={{ background: "var(--cream-alt)" }}
    >
      <div className="max-w-2xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p
            className="text-sm tracking-[0.35em] uppercase mb-4 fade-in-up"
            style={{ color: "var(--gold)" }}
          >
            Reserve Your Chair
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold mb-6 fade-in-up delay-100"
            style={{ color: "var(--dark)" }}
          >
            Book an Appointment
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

        {bookingId !== null ? (
          <div
            className="text-center py-16 px-8 fade-in"
            style={{
              border: "1px solid oklch(62% 0.14 85 / 0.3)",
              background: "oklch(100% 0 0)",
            }}
            data-ocid="booking.success_state"
          >
            <CheckCircle
              size={56}
              className="mx-auto mb-6"
              style={{ color: "var(--gold)" }}
            />
            <h3
              className="font-display text-3xl font-bold mb-3"
              style={{ color: "var(--dark)" }}
            >
              Appointment Confirmed!
            </h3>
            <p className="mb-4" style={{ color: "var(--smoke)" }}>
              Your booking has been successfully placed.
            </p>
            <div
              className="inline-block px-6 py-3 mt-2"
              style={{
                border: "1px solid oklch(62% 0.14 85 / 0.4)",
                background: "oklch(96% 0.012 85)",
              }}
            >
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "var(--gold-dim)" }}
              >
                Booking ID
              </span>
              <div className="font-display text-2xl font-bold gold-gradient-text mt-1">
                #{bookingId.toString()}
              </div>
            </div>
            <p className="mt-6 text-sm" style={{ color: "var(--smoke)" }}>
              We look forward to seeing you at Raju Hare Dare!
            </p>
            <button
              type="button"
              className="btn-gold mt-8"
              onClick={() => {
                setBookingId(null);
                setForm({
                  name: "",
                  phone: "",
                  service: "",
                  date: "",
                  time: "",
                });
              }}
            >
              <span>Book Another</span>
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="fade-in-up delay-300 space-y-6"
            style={{
              border: "1px solid oklch(62% 0.14 85 / 0.25)",
              padding: "40px",
              background: "oklch(100% 0 0)",
              boxShadow: "0 4px 24px oklch(0% 0 0 / 0.06)",
            }}
          >
            <div>
              <label
                htmlFor="booking-name"
                className={labelClass}
                style={{ color: "var(--gold-dim)" }}
              >
                Full Name
              </label>
              <input
                id="booking-name"
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange("name")}
                className={inputClass}
                data-ocid="booking.input"
                required
              />
            </div>
            <div>
              <label
                htmlFor="booking-phone"
                className={labelClass}
                style={{ color: "var(--gold-dim)" }}
              >
                Phone Number
              </label>
              <input
                id="booking-phone"
                type="tel"
                placeholder="Your phone number"
                value={form.phone}
                onChange={handleChange("phone")}
                className={inputClass}
                data-ocid="booking.phone_input"
                required
              />
            </div>
            <div>
              <label
                htmlFor="booking-service"
                className={labelClass}
                style={{ color: "var(--gold-dim)" }}
              >
                Service
              </label>
              <select
                id="booking-service"
                value={form.service}
                onChange={handleChange("service")}
                className={inputClass}
                data-ocid="booking.select"
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="booking-date"
                  className={labelClass}
                  style={{ color: "var(--gold-dim)" }}
                >
                  Date
                </label>
                <input
                  id="booking-date"
                  type="date"
                  value={form.date}
                  onChange={handleChange("date")}
                  className={inputClass}
                  data-ocid="booking.date_input"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="booking-time"
                  className={labelClass}
                  style={{ color: "var(--gold-dim)" }}
                >
                  Time
                </label>
                <input
                  id="booking-time"
                  type="time"
                  value={form.time}
                  onChange={handleChange("time")}
                  className={inputClass}
                  data-ocid="booking.time_input"
                  required
                />
              </div>
            </div>

            {error && (
              <p className="text-sm" style={{ color: "oklch(45% 0.2 27)" }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              className="btn-gold w-full"
              disabled={loading}
              data-ocid="booking.submit_button"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 size={16} className="animate-spin" />
                  <span data-ocid="booking.loading_state">Confirming...</span>
                </span>
              ) : (
                <span>Confirm Booking</span>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
