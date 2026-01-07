import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Phone, MessageCircle, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "919655519922";

const timeSlots = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
];

const SpeakUsNow = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    topic: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.preferredDate || !formData.preferredTime) {
      toast({
        title: "Please fill all required fields",
        description: "Name, phone, date, and time are required.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send this to a backend
    toast({
      title: "Call Request Submitted!",
      description: "We'll call you at your preferred time. Thank you!",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      preferredDate: "",
      preferredTime: "",
      topic: "",
    });
  };

  const handleWhatsApp = () => {
    const message = "Hello! I'd like to speak with someone at Fam Infomedia.";
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Talk
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choose how you'd like to connect with us. Schedule a callback at your 
              convenience or message us instantly on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Options Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Book a Call Form */}
            <Card className="h-fit">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Book an Expected Call</h2>
                <p className="text-muted-foreground mt-2">
                  Fill in your details and we'll call you at your preferred time.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date *</Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        min={today}
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time *</Label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        required
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic">What would you like to discuss? (Optional)</Label>
                    <Input
                      id="topic"
                      name="topic"
                      placeholder="e.g., Course inquiry, Career opportunity"
                      value={formData.topic}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Request Callback
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* WhatsApp Option */}
            <div className="space-y-8">
              <Card className="h-fit">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-[#25D366]" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Message Us Now</h2>
                  <p className="text-muted-foreground mt-2">
                    Need an immediate response? Chat with us on WhatsApp.
                  </p>
                </CardHeader>
                <CardContent>
                  <button
                    onClick={handleWhatsApp}
                    className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5C] text-white py-4 rounded-lg transition-colors text-lg font-medium"
                  >
                    <MessageCircle className="h-6 w-6" />
                    Open WhatsApp
                  </button>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    +91 96555 19922
                  </p>
                </CardContent>
              </Card>

              {/* Info Card */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Response Time</h4>
                      <p className="text-sm text-muted-foreground">
                        WhatsApp: Usually within 30 minutes during business hours<br />
                        Callback: We'll call at your scheduled time
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground">Business Hours</h4>
                      <p className="text-sm text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">What to Expect</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    We'll confirm your callback within 2 hours of submission.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    Our team member will call you at the scheduled time.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">3.</span>
                    Discuss your goals and get personalized recommendations.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">4.</span>
                    No pressure - just helpful information to guide your decision.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SpeakUsNow;
