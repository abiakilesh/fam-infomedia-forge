const marqueeItems = [
  "1 Month Intensive",
  "80+ Hours of Content",
  "Weeks Extended Supply",
  "Blended Offline & Online Mode",
  "End-to-End Training",
  "Hands-on Learning",
  "21 Modules",
];

const ScrollingMarquee = () => {
  return (
    <section className="bg-primary py-4 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Duplicate items for seamless loop */}
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={index}
              className="mx-8 text-primary-foreground font-medium text-lg"
            >
              {item}
              <span className="mx-8 text-primary-foreground/50">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingMarquee;
