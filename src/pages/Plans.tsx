import Layout from "@/components/layout/Layout";
import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const WHATSAPP_NUMBER = "919655519922";

const plans = [
  {
    name: "Starter",
    price: "5,000",
    description: "Perfect for beginners exploring digital marketing",
    target: "Beginner",
    features: [
      "Introduction to Digital Marketing",
      "Social Media Basics",
      "Content Writing Fundamentals",
      "5 Modules",
      "1 Week Duration",
      "Certificate of Completion",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Essential",
    price: "12,000",
    description: "Core skills for aspiring digital marketers",
    target: "Beginner to Intermediate",
    features: [
      "Complete Social Media Marketing",
      "SEO Fundamentals",
      "Content Strategy",
      "Email Marketing Basics",
      "10 Modules",
      "2 Weeks Duration",
      "Certificate of Completion",
      "Live Q&A Sessions",
      "Email & Chat Support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "25,000",
    description: "Comprehensive training for serious learners",
    target: "Intermediate",
    features: [
      "All Essential Features",
      "Advanced SEO & SEM",
      "Google Ads Certification Prep",
      "Facebook & Instagram Ads",
      "Analytics & Reporting",
      "15 Modules",
      "3 Weeks Duration",
      "1:1 Mentorship Sessions",
      "Real Project Experience",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Master",
    price: "35,000",
    description: "Master all aspects of digital marketing",
    target: "Intermediate to Advanced",
    features: [
      "All Professional Features",
      "Advanced Paid Advertising",
      "Marketing Automation",
      "Conversion Rate Optimization",
      "Influencer Marketing",
      "E-commerce Marketing",
      "21 Modules",
      "1 Month Duration",
      "Personal Career Guidance",
      "Job Placement Assistance",
      "Lifetime Community Access",
    ],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "50,000",
    description: "Complete training with extended support for teams",
    target: "Advanced / Corporate",
    features: [
      "All Master Features",
      "Custom Training Modules",
      "Team Training (up to 5)",
      "Agency Operations Training",
      "Client Management Skills",
      "Extended Internship Opportunity",
      "Priority Job Placement",
      "1-Year Support Access",
      "Exclusive Industry Network",
      "Custom Certification",
    ],
    popular: false,
  },
];

const Plans = () => {
  const handleBookNow = (planName: string) => {
    const message = `Hello! I'm interested in the ${planName} plan. Please share more details.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Choose Your Plan
            </h1>
            <p className="text-lg text-black/70 leading-relaxed">
              Flexible pricing options designed to match your learning goals. 
              All plans include hands-on training and expert mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-primary-foreground text-sm font-medium">
            <span>✓ 80+ Hours of Content</span>
            <span>✓ Blended Offline & Online Mode</span>
            <span>✓ End-to-End Training</span>
            <span>✓ Hands-on Learning</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative flex flex-col bg-white ${
                  plan.popular ? "border-primary shadow-lg scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="text-xs text-black/60 uppercase tracking-wide mb-2">
                    {plan.target}
                  </div>
                  <h3 className="text-xl font-bold text-black">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-black">₹{plan.price}</span>
                  </div>
                  <p className="text-sm text-black/70 mt-2">{plan.description}</p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-black/70">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => handleBookNow(plan.name)}
                    className={`w-full mt-6 ${plan.popular ? "" : "bg-primary/90"}`}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-black mb-4">
              Not sure which plan is right for you?
            </h3>
            <p className="text-black/70 mb-6">
              Book a free consultation call and our team will help you choose the 
              perfect plan based on your goals and experience level.
            </p>
            <Button 
              variant="outline" 
              onClick={() => handleBookNow("consultation")}
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Plans;
