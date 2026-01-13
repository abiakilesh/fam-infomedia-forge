import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
import naturals from "@/assets/clients/naturals.jpg";
import grandPicklers from "@/assets/clients/grand-picklers.jpg";
import layasCakes from "@/assets/clients/layas-cakes.jpg";
import chinnaVeedu from "@/assets/clients/chinna-veedu.jpg";

const clientLogos = [
  { id: 1, name: "Sri Sakthi Motors - Yamaha", logo: yamahaSakthi },
  { id: 2, name: "Nandhi Builders", logo: nandhiBuilders },
  { id: 3, name: "Crescent Construction", logo: crescent },
  { id: 4, name: "Sulur Car Decors", logo: sulurCarDecors },
  { id: 5, name: "Sri Shanmuga Motors - Yamaha", logo: yamahaShanmuga },
  { id: 6, name: "Best Motors - Yamaha", logo: bestMotors },
  { id: 7, name: "Bachflower Karpaga Anandhi", logo: bachflower },
  { id: 8, name: "DP Carz Studio", logo: dpCarz },
  { id: 9, name: "SAN Institute of Facility Management", logo: sanifm },
  { id: 10, name: "SK Silage", logo: skSilage },
  { id: 11, name: "The Kokkarakko", logo: kokkarakko },
  { id: 12, name: "Little Starr School", logo: littleStarr },
  { id: 13, name: "Naturals Salon", logo: naturals },
  { id: 14, name: "Grand Picklers", logo: grandPicklers },
  { id: 15, name: "Laya's Cakes", logo: layasCakes },
  { id: 16, name: "Chinna Veedu", logo: chinnaVeedu },
];

const ClientsPreview = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Clients Who Trust Us
          </h2>
          <p className="text-black/70 text-lg">
            Over 300 businesses have partnered with us for their digital marketing needs.
          </p>
        </div>

        {/* Scrolling Client Logos */}
        <div className="relative mb-12">
          {/* First row - scrolls left */}
          <div className="flex animate-marquee whitespace-nowrap mb-6">
            {[...clientLogos.slice(0, 8), ...clientLogos.slice(0, 8)].map((client, index) => (
              <div
                key={`row1-${index}`}
                className="inline-flex mx-3 bg-gray-50 rounded-xl p-4 items-center justify-center h-24 w-36 flex-shrink-0 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Second row - scrolls right */}
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...clientLogos.slice(8, 16), ...clientLogos.slice(8, 16)].map((client, index) => (
              <div
                key={`row2-${index}`}
                className="inline-flex mx-3 bg-gray-50 rounded-xl p-4 items-center justify-center h-24 w-36 flex-shrink-0 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
            <Link to="/clients">
              View All Clients
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClientsPreview;
