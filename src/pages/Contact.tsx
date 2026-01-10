import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WHATSAPP_NUMBER = "919655519922";

const downloads = [
  { name: "Company Brochure", description: "Overview of our services and courses", file: "#" },
  { name: "Course Catalog", description: "Complete list of available courses", file: "#" },
  { name: "Pricing Guide", description: "Detailed pricing for all plans", file: "#" },
];

const Contact = () => {
  const handleWhatsApp = () => {
    const message = "Hello! I'd like to get in touch with Fam Infomedia.";
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
              Contact Us
            </h1>
            <p className="text-lg text-black/70 leading-relaxed">
              Have questions? We'd love to hear from you. Reach out through any of 
              the channels below and our team will get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">Get in Touch</h2>
                <p className="text-black/70 mb-8">
                  Whether you're interested in our courses, want to discuss a project, 
                  or have general inquiries, we're here to help. Our team typically 
                  responds within 24 hours on business days.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="bg-white">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-black/60">Phone</div>
                      <a href="tel:+919655519922" className="font-medium text-black hover:text-primary transition-colors">
                        +91 96555 19922
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-black/60">Email</div>
                      <a href="mailto:info@faminfomedia.com" className="font-medium text-black hover:text-primary transition-colors">
                        info@faminfomedia.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-black/60">Address</div>
                      <p className="font-medium text-black">
                        1st Floor, Krishna Ceramix, Bus Stop, opposite Maha Lakshmi Nagar, 
                        Goundampalayam, Tamil Nadu 641664
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5C] text-white py-4 rounded-lg transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-medium">Message us on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-black">Find Us</h2>
              <div className="bg-gray-100 rounded-xl overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0834697532787!2d77.02833611480127!3d11.033657892154166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857b0e10c8a63%3A0x7c0f26c4c6e6e7f9!2sGoundampalayam%2C%20Tamil%20Nadu%20641664!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fam Infomedia Location"
                />
              </div>
              <p className="text-sm text-black/70">
                Located conveniently near the bus stop, our office is easily accessible 
                by public transport. Look for Krishna Ceramix building opposite Maha 
                Lakshmi Nagar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Download Resources
              </h2>
              <p className="text-black/70">
                Get our brochures and guides to learn more about what we offer.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {downloads.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow bg-white">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Download className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-black">{item.name}</h3>
                    <p className="text-sm text-black/70">{item.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={item.file} download>
                        Download PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold text-black mb-4">Office Hours</h3>
          <p className="text-black/70">
            Monday - Saturday: 9:00 AM - 6:00 PM IST<br />
            Sunday: Closed
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
