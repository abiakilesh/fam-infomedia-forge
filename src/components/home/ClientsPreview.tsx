import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Placeholder client logos - replace with actual logos
const clientLogos = Array(8).fill(null).map((_, i) => ({
  id: i + 1,
  name: `Client ${i + 1}`,
}));

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
              className="bg-card border border-border rounded-lg p-8 flex items-center justify-center h-24 hover:shadow-md transition-shadow"
            >
              <div className="text-muted-foreground text-sm font-medium">
                [CLIENT LOGO {client.id}]
              </div>
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
