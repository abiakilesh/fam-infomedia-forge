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

const clientLogos = [
  { id: 1, name: "Sri Sakthi Motors - Yamaha", logo: yamahaSakthi },
  { id: 2, name: "Nandhi Builders", logo: nandhiBuilders },
  { id: 3, name: "Crescent Construction", logo: crescent },
  { id: 4, name: "Sulur Car Decors", logo: sulurCarDecors },
  { id: 5, name: "Sri Shanmuga Motors - Yamaha", logo: yamahaShanmuga },
  { id: 6, name: "Best Motors - Yamaha", logo: bestMotors },
  { id: 7, name: "Bachflower Karpaga Anandhi", logo: bachflower },
  { id: 8, name: "DP Carz Studio", logo: dpCarz },
];

const ClientsPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Clients Who Trust Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Over 300 businesses have partnered with us for their digital marketing needs.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {clientLogos.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-lg p-6 flex items-center justify-center h-28 hover:shadow-lg transition-shadow"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-20 max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
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
