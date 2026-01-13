import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";

// Import client logos
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

const clientsData = [
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

const Clients = () => {
  const [visibleClients, setVisibleClients] = useState<number[]>([]);

  useEffect(() => {
    // Stagger the animation of clients appearing
    clientsData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleClients((prev) => [...prev, index]);
      }, index * 100);
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-muted-foreground">
              From startups to established enterprises, businesses choose Fam Infomedia 
              for our expertise, reliability, and results-driven approach.
            </p>
          </div>

          {/* Logo Grid with Umbrella Animation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {clientsData.map((client, index) => (
              <div
                key={client.id}
                className={`bg-white rounded-xl p-6 flex items-center justify-center h-44 hover:shadow-lg transition-all cursor-pointer group ${
                  visibleClients.includes(index) ? "animate-umbrella" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-36 max-w-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
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
            {/* Review 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-black/80 italic leading-relaxed">
                "Fam Infomedia transformed our digital presence completely. Their SEO strategies helped us rank on the first page of Google within 3 months. Highly recommended!"
              </p>
              <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  YS
                </div>
                <div>
                  <div className="font-semibold text-black">Yamaha Sri Sakthi Motors</div>
                  <div className="text-sm text-black/60">Automotive Dealer</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-black/80 italic leading-relaxed">
                "The team at Fam Infomedia is incredibly professional and dedicated. They redesigned our website and managed our social media, resulting in a 200% increase in leads."
              </p>
              <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  NB
                </div>
                <div>
                  <div className="font-semibold text-black">Nandhi Builders</div>
                  <div className="text-sm text-black/60">Construction & Real Estate</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-black/80 italic leading-relaxed">
                "We've been working with Fam Infomedia for over a year now. Their consistent efforts in digital marketing have helped us build a strong online presence in our local market."
              </p>
              <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  KR
                </div>
                <div>
                  <div className="font-semibold text-black">The Kokkarakko</div>
                  <div className="text-sm text-black/60">Restaurant & Hospitality</div>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-black/80 italic leading-relaxed">
                "Excellent service! The Fam Infomedia team understood our brand vision perfectly and delivered a stunning website that truly represents our business values."
              </p>
              <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  LS
                </div>
                <div>
                  <div className="font-semibold text-black">Little Starr School</div>
                  <div className="text-sm text-black/60">Education</div>
                </div>
              </div>
            </div>

            {/* Review 5 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-black/80 italic leading-relaxed">
                "From Google Ads to social media management, Fam Infomedia handles everything professionally. Our ROI has improved significantly since we started working with them."
              </p>
              <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  DP
                </div>
                <div>
                  <div className="font-semibold text-black">DP Carz Studio</div>
                  <div className="text-sm text-black/60">Automotive Services</div>
                </div>
              </div>
            </div>

            {/* Review 6 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-black/80 italic leading-relaxed">
                "The training programs at Fam Infomedia are top-notch. Their comprehensive digital marketing course helped us build an in-house marketing team with real skills."
              </p>
              <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  CR
                </div>
                <div>
                  <div className="font-semibold text-black">Crescent Construction</div>
                  <div className="text-sm text-black/60">Construction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Whether you're looking to learn digital marketing or grow your business, 
            we're here to help you succeed.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
