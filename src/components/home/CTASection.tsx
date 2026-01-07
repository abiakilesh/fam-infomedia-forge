import { Link } from "react-router-dom";
import { Briefcase, GraduationCap, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ctaCards = [
  {
    icon: GraduationCap,
    title: "Start Learning Today",
    description: "Enroll in our digital marketing courses and kickstart your career.",
    link: "/plans",
    linkText: "View Plans",
    variant: "default" as const,
  },
  {
    icon: Briefcase,
    title: "Join Our Team",
    description: "We're hiring! Explore career opportunities at Fam Infomedia.",
    link: "/career",
    linkText: "View Openings",
    variant: "outline" as const,
  },
  {
    icon: HeartHandshake,
    title: "Work With Us",
    description: "Looking for digital marketing services? Let's discuss your project.",
    link: "/speak-us-now",
    linkText: "Get in Touch",
    variant: "outline" as const,
  },
];

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-teal-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you want to learn, join our team, or grow your business — we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {ctaCards.map((card, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <card.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
                <Button asChild variant={card.variant} className="mt-2">
                  <Link to={card.link}>{card.linkText}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
