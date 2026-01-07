import Layout from "@/components/layout/Layout";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Practical Learning",
    description: "We believe in hands-on training that prepares you for real-world challenges.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from industry professionals with years of practical experience.",
  },
  {
    icon: Award,
    title: "Quality Education",
    description: "Our curriculum is constantly updated to match industry standards.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "We're committed to helping you achieve your professional goals.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Fam Infomedia
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a passionate team dedicated to transforming careers through 
              quality digital marketing education.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded over two years ago, Fam Infomedia began with a simple mission: 
                  make quality digital marketing education accessible to everyone. What 
                  started as a small training initiative has grown into a trusted 
                  institution serving over 300 clients.
                </p>
                <p>
                  Today, our team of 30+ professionals works together to deliver 
                  comprehensive courses that combine theory with practical application. 
                  Our dedicated 5-member digital marketing team and specialized design 
                  professional ensure every student receives expert guidance.
                </p>
                <p>
                  We take pride in our hands-on approach to learning. Every course 
                  includes real projects, live campaigns, and personalized mentorship 
                  to prepare you for success in the digital world.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-background rounded-xl">
                  <div className="text-4xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-background rounded-xl">
                  <div className="text-4xl font-bold text-primary">300+</div>
                  <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-background rounded-xl">
                  <div className="text-4xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground mt-1">Team Members</div>
                </div>
                <div className="text-center p-4 bg-background rounded-xl">
                  <div className="text-4xl font-bold text-primary">21</div>
                  <div className="text-sm text-muted-foreground mt-1">Course Modules</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What We Stand For</h2>
            <p className="text-muted-foreground">
              Our values guide everything we do, from curriculum design to student support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Specialized Teams</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Our 5-member digital marketing team brings diverse expertise in SEO, social media, 
            content strategy, and paid advertising. Combined with our dedicated design 
            professional, we deliver a complete learning experience that covers all aspects 
            of digital marketing.
          </p>
          <div className="inline-flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-muted-foreground">5 Digital Marketing Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal"></div>
              <span className="text-muted-foreground">1 Design Specialist</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
