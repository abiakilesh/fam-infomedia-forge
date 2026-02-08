import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";

// Import existing client logos
import yamahaSakthi from "@/assets/clients/yamaha-sakthi.jpg";
import nandhiBuilders from "@/assets/clients/nandhi-builders.jpg";
import crescent from "@/assets/clients/crescent.jpg";
import sulurCarDecors from "@/assets/clients/sulur-car-decors.jpg";
import yamahaShanmuga from "@/assets/clients/yamaha-shanmuga.jpg";
import bestMotors from "@/assets/clients/best-motors.jpg";
import bachflower from "@/assets/clients/bachflower.jpg";
import dpCarz from "@/assets/clients/dp-carz.jpg";
import sanifm from "@/assets/clients/sanifm.jpg";
import skSilage from "@/assets/clients/sk-silage.jpg";
import kokkarakko from "@/assets/clients/kokkarakko.jpg";
import littleStarr from "@/assets/clients/little-starr.jpg";
import drEdu from "@/assets/clients/dr-edu.jpg";
import nila from "@/assets/clients/nila.jpg";
import heliios from "@/assets/clients/heliios.jpg";
import karthickBattery from "@/assets/clients/karthick-battery.jpg";
import vjInterior from "@/assets/clients/vj-interior.jpg";
import blessingPromoters from "@/assets/clients/blessing-promoters.jpg";
import kodaiElliott from "@/assets/clients/kodai-elliott.jpg";
import naturals from "@/assets/clients/naturals.jpg";
import rkOutfit from "@/assets/clients/rk-outfit.jpg";
import subiCycleWorld from "@/assets/clients/subi-cycle-world.jpg";
import grandPicklers from "@/assets/clients/grand-picklers.jpg";
import smp from "@/assets/clients/smp.jpg";
import layasCakes from "@/assets/clients/layas-cakes.jpg";
import chinnaVeedu from "@/assets/clients/chinna-veedu.jpg";
import ganeshConstruction from "@/assets/clients/ganesh-construction.jpg";

// Existing imported logos
const importedClients = [
  { id: 1, name: "Sri Sakthi Motors - Yamaha", logo: yamahaSakthi },
  { id: 2, name: "Nandhi Builders & Material Suppliers", logo: nandhiBuilders },
  { id: 3, name: "Crescent Construction", logo: crescent },
  { id: 4, name: "SPA Sulur Car Decors", logo: sulurCarDecors },
  { id: 5, name: "Sri Shanmuga Motors - Yamaha", logo: yamahaShanmuga },
  { id: 6, name: "Best Motors - Yamaha", logo: bestMotors },
  { id: 7, name: "Bachflower Karpaga Anandhi", logo: bachflower },
  { id: 8, name: "DP Carz Studio", logo: dpCarz },
  { id: 9, name: "SAN Institute of Facility Management", logo: sanifm },
  { id: 10, name: "SK Silage Cattle Feed Manufacturing", logo: skSilage },
  { id: 11, name: "The Kokkarakko Restaurant", logo: kokkarakko },
  { id: 12, name: "Little Starr International School", logo: littleStarr },
  { id: 13, name: "DR Edu Services", logo: drEdu },
  { id: 14, name: "Nila Mobile & Laptop Service", logo: nila },
  { id: 15, name: "Heliios", logo: heliios },
  { id: 16, name: "Karthick Battery Center", logo: karthickBattery },
  { id: 17, name: "VJ Interior & Decors", logo: vjInterior },
  { id: 18, name: "Blessing Promoters", logo: blessingPromoters },
  { id: 19, name: "Kodai Elliott", logo: kodaiElliott },
  { id: 20, name: "Naturals Salon", logo: naturals },
  { id: 21, name: "RK Outfit", logo: rkOutfit },
  { id: 22, name: "Subi Cycle World", logo: subiCycleWorld },
  { id: 23, name: "Grand Picklers", logo: grandPicklers },
  { id: 24, name: "SMP - Grown By Nature", logo: smp },
  { id: 25, name: "Laya's Cakes & Candles", logo: layasCakes },
  { id: 26, name: "Chinna Veedu Restaurant", logo: chinnaVeedu },
  { id: 27, name: "Ganesh Construction & Interiors", logo: ganeshConstruction },
];

// PDF logos (from public directory)
const pdfClients = [
  { id: 28, name: "Yole World", logo: "/clients/logos/yole-world.jpg" },
  { id: 29, name: "Agrovatoar", logo: "/clients/logos/agrovatoar.jpg" },
  { id: 30, name: "Grazzio Turf A Lot", logo: "/clients/logos/grazzio-turf.jpg" },
  { id: 31, name: "CRAN", logo: "/clients/logos/cran.jpg" },
  { id: 32, name: "Regency Annex - The Green Munnar", logo: "/clients/logos/regency-annex.jpg" },
  { id: 33, name: "Grown By Nature", logo: "/clients/logos/grown-by-nature.jpg" },
  { id: 34, name: "Indofresh", logo: "/clients/logos/indofresh.jpg" },
  { id: 35, name: "Coastal Restaurant", logo: "/clients/logos/coastal-restaurant.jpg" },
  { id: 36, name: "Ganesh Construction & Interiors", logo: "/clients/logos/ganesh-construction-2.jpg" },
  { id: 37, name: "Joui Bhawon Restaurant", logo: "/clients/logos/joui-bhawon.jpg" },
  { id: 38, name: "Laya's Cakes & Candles", logo: "/clients/logos/layas-cakes-2.jpg" },
  { id: 39, name: "Duroguard Steel Door", logo: "/clients/logos/duroguard.jpg" },
  { id: 40, name: "Evergreen Windows & Doors", logo: "/clients/logos/evergreen-windows.jpg" },
  { id: 41, name: "Infotech", logo: "/clients/logos/infotech.jpg" },
  { id: 42, name: "F5 Cafe Refreshment Zone", logo: "/clients/logos/f5-cafe.jpg" },
  { id: 43, name: "Jesran Enterprises", logo: "/clients/logos/jesran-enterprises.jpg" },
  { id: 44, name: "Robov BNI", logo: "/clients/logos/robov-bni.jpg" },
  { id: 45, name: "Mother's Magic Masala", logo: "/clients/logos/mothers-magic-masala.jpg" },
  { id: 46, name: "Arena", logo: "/clients/logos/arena.jpg" },
  { id: 47, name: "Restaurant", logo: "/clients/logos/restaurant-20.jpg" },
  { id: 48, name: "Car Decors & Detailing Studio Erode", logo: "/clients/logos/car-decors-erode.jpg" },
  { id: 49, name: "Anytime Friends Track", logo: "/clients/logos/anytime-friends-track.jpg" },
  { id: 50, name: "Bambi Crafts", logo: "/clients/logos/bambi-crafts.jpg" },
  { id: 51, name: "Erode Car Garage", logo: "/clients/logos/erode-car-garage.jpg" },
  { id: 52, name: "NAND Housing Properties", logo: "/clients/logos/nand-housing.jpg" },
  { id: 53, name: "Royaltec Paints", logo: "/clients/logos/royaltec-paints.jpg" },
  { id: 54, name: "Niranjana Call Taxi", logo: "/clients/logos/niranjana-call-taxi.jpg" },
  { id: 55, name: "CCSI", logo: "/clients/logos/ccsi.jpg" },
  { id: 56, name: "Momomites", logo: "/clients/logos/momomites.jpg" },
  { id: 57, name: "Cofia - Simply Coconut", logo: "/clients/logos/cofia-coconut.jpg" },
  { id: 58, name: "Vellanovogue", logo: "/clients/logos/vellanovogue.jpg" },
  { id: 59, name: "Valam Housing", logo: "/clients/logos/valam-housing.jpg" },
  { id: 60, name: "T.S. Power System Solar", logo: "/clients/logos/ts-power-system.jpg" },
  { id: 61, name: "CTALI", logo: "/clients/logos/ctali.jpg" },
  { id: 62, name: "Naturals Salon", logo: "/clients/logos/naturals-salon.jpg" },
  { id: 63, name: "The Kokkarakko Restaurant", logo: "/clients/logos/kokkarakko-2.jpg" },
  { id: 64, name: "KKTOU ANI", logo: "/clients/logos/kktou-ani.jpg" },
  { id: 65, name: "Tiles Feel", logo: "/clients/logos/tiles-feel.jpg" },
  { id: 66, name: "Dayana Beauty Care", logo: "/clients/logos/dayana-beauty.jpg" },
  { id: 67, name: "CAVD NIIS", logo: "/clients/logos/cavd-niis.jpg" },
  { id: 68, name: "Car Decors Erode", logo: "/clients/logos/car-decors-erode-2.jpg" },
  { id: 69, name: "Mehandi Artist", logo: "/clients/logos/mehandi-artist.jpg" },
  { id: 70, name: "Vivasayi Tours & Travels", logo: "/clients/logos/vivasayi-tours.jpg" },
  { id: 71, name: "RK Outfit", logo: "/clients/logos/rk-outfit-2.jpg" },
  { id: 72, name: "SR Healthy Choice", logo: "/clients/logos/sr-healthy-choice.jpg" },
  { id: 73, name: "Alpha Car Wash", logo: "/clients/logos/alpha-car-wash.jpg" },
  { id: 74, name: "Best Motors Yamaha", logo: "/clients/logos/best-motors-yamaha.jpg" },
  { id: 75, name: "Emerge Infra", logo: "/clients/logos/emerge-infra.jpg" },
  { id: 76, name: "Green Store", logo: "/clients/logos/green-store.jpg" },
  { id: 77, name: "Jeni Builders", logo: "/clients/logos/jeni-builders.jpg" },
];

const allClients = [...importedClients, ...pdfClients];

const Clients = () => {
  const [visibleClients, setVisibleClients] = useState<number[]>([]);

  useEffect(() => {
    allClients.forEach((_, index) => {
      setTimeout(() => {
        setVisibleClients((prev) => [...prev, index]);
      }, index * 50);
    });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Clients
            </h1>
            <p className="text-lg text-black/70 leading-relaxed">
              We're proud to have worked with over 300 businesses across diverse industries. 
              Here are some of the companies that trust Fam Infomedia.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-primary-foreground">300+</div>
              <div className="text-sm text-primary-foreground/70 mt-1">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground">2+</div>
              <div className="text-sm text-primary-foreground/70 mt-1">Years of Trust</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-foreground">95%</div>
              <div className="text-sm text-primary-foreground/70 mt-1">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-black/70">
              From startups to established enterprises, businesses choose Fam Infomedia 
              for our expertise, reliability, and results-driven approach.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {allClients.map((client, index) => (
              <div
                key={client.id}
                className={`bg-gray-50 rounded-xl p-4 flex items-center justify-center h-32 hover:shadow-lg transition-all cursor-pointer group ${
                  visibleClients.includes(index) ? "animate-umbrella" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-24 max-w-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              What Our Clients Say
            </h2>
            <p className="text-black/70">
              Real feedback from businesses we've helped grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { initials: "YS", name: "Yamaha Sri Sakthi Motors", industry: "Automotive Dealer", quote: "Fam Infomedia transformed our digital presence completely. Their SEO strategies helped us rank on the first page of Google within 3 months. Highly recommended!" },
              { initials: "NB", name: "Nandhi Builders", industry: "Construction & Real Estate", quote: "The team at Fam Infomedia is incredibly professional and dedicated. They redesigned our website and managed our social media, resulting in a 200% increase in leads." },
              { initials: "KR", name: "The Kokkarakko", industry: "Restaurant & Hospitality", quote: "We've been working with Fam Infomedia for over a year now. Their consistent efforts in digital marketing have helped us build a strong online presence in our local market." },
              { initials: "LS", name: "Little Starr School", industry: "Education", quote: "Excellent service! The Fam Infomedia team understood our brand vision perfectly and delivered a stunning website that truly represents our business values." },
              { initials: "DP", name: "DP Carz Studio", industry: "Automotive Services", quote: "From Google Ads to social media management, Fam Infomedia handles everything professionally. Our ROI has improved significantly since we started working with them." },
              { initials: "CR", name: "Crescent Construction", industry: "Construction", quote: "The training programs at Fam Infomedia are top-notch. Their comprehensive digital marketing course helped us build an in-house marketing team with real skills." },
            ].map((review, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 space-y-6 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-black/80 italic leading-relaxed">"{review.quote}"</p>
                <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-black">{review.name}</div>
                    <div className="text-sm text-black/60">{review.industry}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-black/60 mb-8 max-w-xl mx-auto">
            Whether you're looking to learn digital marketing or grow your business, 
            we're here to help you succeed.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
