import Layout from "@/components/layout/Layout";
import { Users, Target, Award, TrendingUp, Instagram, Twitter, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Import management team photos
import manojPhoto from "@/assets/team/manoj.png";

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

const managementTeam = [
  {
    name: "Manoj Kumar",
    role: "Founder & CEO",
    photo: manojPhoto,
    instagram: "https://www.instagram.com/faminfomedia",
    twitter: "https://twitter.com/faminfomedia",
    linkedin: "https://www.linkedin.com/company/faminfomedia",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              About Fam Infomedia
            </h1>
            <p className="text-lg text-black/70 leading-relaxed">
              We're a passionate team dedicated to transforming careers through 
              quality digital marketing education.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Our Story</h2>
              <div className="space-y-4 text-black/70 leading-relaxed">
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
            <div className="bg-gray-100 rounded-2xl p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-4xl font-bold text-primary">2+</div>
                  <div className="text-sm text-black/60 mt-1">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-4xl font-bold text-primary">300+</div>
                  <div className="text-sm text-black/60 mt-1">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-4xl font-bold text-primary">30+</div>
                  <div className="text-sm text-black/60 mt-1">Team Members</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl">
                  <div className="text-4xl font-bold text-primary">21</div>
                  <div className="text-sm text-black/60 mt-1">Course Modules</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">What We Stand For</h2>
            <p className="text-black/70">
              Our values guide everything we do, from curriculum design to student support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-black">{value.title}</h3>
                  <p className="text-sm text-black/70">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Our Leadership</h2>
            <p className="text-black/70">
              Meet the visionary behind Fam Infomedia's success.
            </p>
          </div>

          <div className="flex justify-center">
            {managementTeam.map((member, index) => (
              <div key={index} className="text-center max-w-xs">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <div className="flex justify-center gap-4">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black/60 hover:bg-primary hover:text-white transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black/60 hover:bg-primary hover:text-white transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-black/60 hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-black mb-6">Our Specialized Teams</h2>
          <p className="text-black/70 mb-8 leading-relaxed">
            Our 5-member digital marketing team brings diverse expertise in SEO, social media, 
            content strategy, and paid advertising. Combined with our dedicated design 
            professional, we deliver a complete learning experience that covers all aspects 
            of digital marketing.
          </p>
          <div className="inline-flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-black/70">5 Digital Marketing Experts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal"></div>
              <span className="text-black/70">1 Design Specialist</span>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Journey */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-black text-center mb-16">
            Our Milestone Journey
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30" />
            
            {/* Milestones */}
            <div className="space-y-12">
              {/* 2022 - Left */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-2">2022</h3>
                    <p className="text-black/70 text-sm">
                      Fam Infomedia was established in Goundampalayam
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white" />
                <div className="w-1/2" />
              </div>

              {/* 2022 - Right */}
              <div className="relative flex items-center">
                <div className="w-1/2" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white" />
                <div className="w-1/2 pl-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-2">2022</h3>
                    <p className="text-black/70 text-sm">
                      Our first cohort of 50 students graduated successfully
                    </p>
                  </div>
                </div>
              </div>

              {/* 2023 - Left */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-2">2023</h3>
                    <p className="text-black/70 text-sm">
                      Team expanded to 20+ specialized marketing professionals
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white" />
                <div className="w-1/2" />
              </div>

              {/* 2023 - Right */}
              <div className="relative flex items-center">
                <div className="w-1/2" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white" />
                <div className="w-1/2 pl-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-2">2023</h3>
                    <p className="text-black/70 text-sm">
                      Reached the milestone of serving 100+ satisfied clients
                    </p>
                  </div>
                </div>
              </div>

              {/* 2024 - Left */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-2">2024</h3>
                    <p className="text-black/70 text-sm">
                      Grown to a team of 30+ members serving 300+ clients
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white" />
                <div className="w-1/2" />
              </div>

              {/* 2024 - Right */}
              <div className="relative flex items-center">
                <div className="w-1/2" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white" />
                <div className="w-1/2 pl-8">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-2">2024</h3>
                    <p className="text-black/70 text-sm">
                      Recognized as a leading <span className="text-primary font-medium">digital education</span> provider in Tamil Nadu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
