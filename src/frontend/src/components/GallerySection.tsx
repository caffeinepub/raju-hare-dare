const galleryItems = [
  {
    src: "/assets/generated/gallery-haircut.dim_800x600.jpg",
    caption: "Precision Haircuts",
    ocid: "gallery.item.1",
  },
  {
    src: "/assets/generated/gallery-beard.dim_800x600.jpg",
    caption: "Beard Styling",
    ocid: "gallery.item.2",
  },
  {
    src: "/assets/generated/gallery-shave.dim_800x600.jpg",
    caption: "Classic Shave",
    ocid: "gallery.item.3",
  },
  {
    src: "/assets/generated/gallery-interior.dim_800x600.jpg",
    caption: "Our Space",
    ocid: "gallery.item.4",
  },
];

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="section-scroll py-24 md:py-32"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-[0.35em] uppercase mb-4 fade-in-up"
            style={{ color: "var(--gold)" }}
          >
            Our Craft
          </p>
          <h2
            className="font-display text-4xl md:text-6xl font-bold mb-6 fade-in-up delay-100"
            style={{ color: "var(--dark)" }}
          >
            Our Work
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

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={item.ocid}
              className={`gallery-item aspect-[4/3] fade-in-up delay-${Math.min((i + 1) * 100, 400)}`}
              data-ocid={item.ocid}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div>
                  <div
                    className="h-px w-8 mb-3"
                    style={{ background: "var(--gold)" }}
                  />
                  <p className="font-display text-xl font-semibold text-white">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
