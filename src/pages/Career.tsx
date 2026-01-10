import Layout from "@/components/layout/Layout";
import { Briefcase, Code, Palette, MapPin, Clock, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const EMAIL_ADDRESS = "info@faminfomedia.com";

const jobOpenings = [
  {
    category: "Digital Marketing",
    icon: Briefcase,
    jobs: [
      {
        title: "SEO Specialist",
        type: "Full-time",
        location: "Coimbatore",
        description: "Drive organic growth through strategic SEO initiatives. Analyze website performance, implement on-page and off-page optimization, and track keyword rankings.",
        responsibilities: [
          "Conduct keyword research and competitor analysis",
          "Optimize website content and structure for search engines",
          "Build quality backlinks and manage link profiles",
          "Monitor and report on SEO performance metrics",
        ],
        requirements: [
          "1-2 years of SEO experience",
          "Familiarity with SEO tools (Ahrefs, SEMrush, etc.)",
          "Understanding of Google Analytics",
          "Strong analytical skills",
        ],
      },
      {
        title: "Social Media Manager",
        type: "Full-time",
        location: "Coimbatore",
        description: "Create engaging content and manage social media presence across multiple platforms. Build community engagement and grow audience reach.",
        responsibilities: [
          "Develop and execute social media content calendars",
          "Manage multiple client social media accounts",
          "Engage with followers and build community",
          "Analyze social media metrics and create reports",
        ],
        requirements: [
          "Experience with major social platforms",
          "Strong copywriting skills",
          "Knowledge of social media analytics",
          "Creative mindset with attention to trends",
        ],
      },
      {
        title: "Content Marketing Executive",
        type: "Full-time",
        location: "Coimbatore",
        description: "Create compelling content that attracts and engages our target audience. Develop content strategies that support business goals.",
        responsibilities: [
          "Write blog posts, articles, and marketing copy",
          "Develop content strategies for clients",
          "Coordinate with design team for visual content",
          "Manage content publishing schedules",
        ],
        requirements: [
          "Excellent writing and editing skills",
          "Understanding of content marketing principles",
          "Basic knowledge of SEO",
          "Portfolio of published content preferred",
        ],
      },
    ],
  },
  {
    category: "Web Development",
    icon: Code,
    jobs: [
      {
        title: "Frontend Developer",
        type: "Full-time",
        location: "Coimbatore",
        description: "Build responsive, user-friendly websites and web applications. Work closely with designers to implement pixel-perfect interfaces.",
        responsibilities: [
          "Develop responsive web pages using HTML, CSS, JavaScript",
          "Implement designs from Figma/Adobe XD",
          "Optimize websites for performance and accessibility",
          "Collaborate with backend developers on integrations",
        ],
        requirements: [
          "Proficiency in HTML, CSS, JavaScript",
          "Experience with React or Vue.js preferred",
          "Understanding of responsive design principles",
          "Eye for design and attention to detail",
        ],
      },
      {
        title: "Full-stack Developer",
        type: "Full-time",
        location: "Coimbatore",
        description: "Handle end-to-end web development from database to user interface. Build scalable applications that serve our clients' needs.",
        responsibilities: [
          "Design and develop full-stack web applications",
          "Create and maintain APIs and databases",
          "Implement security best practices",
          "Deploy and maintain applications on cloud platforms",
        ],
        requirements: [
          "Experience with frontend and backend technologies",
          "Knowledge of Node.js, Python, or PHP",
          "Database management skills (MySQL, MongoDB)",
          "Understanding of cloud services (AWS, GCP)",
        ],
      },
    ],
  },
  {
    category: "Design",
    icon: Palette,
    jobs: [
      {
        title: "Graphic Designer",
        type: "Full-time",
        location: "Coimbatore",
        description: "Create stunning visual content for digital marketing campaigns, social media, and brand materials.",
        responsibilities: [
          "Design graphics for social media and digital ads",
          "Create marketing materials and presentations",
          "Develop brand guidelines and visual assets",
          "Collaborate with marketing team on campaign visuals",
        ],
        requirements: [
          "Proficiency in Adobe Creative Suite",
          "Strong portfolio showcasing digital design work",
          "Understanding of design principles and typography",
          "Ability to work on multiple projects simultaneously",
        ],
      },
      {
        title: "UI/UX Designer",
        type: "Full-time",
        location: "Coimbatore",
        description: "Design intuitive user interfaces and experiences for websites and applications that delight users.",
        responsibilities: [
          "Create wireframes, prototypes, and high-fidelity designs",
          "Conduct user research and usability testing",
          "Develop and maintain design systems",
          "Collaborate with developers on implementation",
        ],
        requirements: [
          "Experience with Figma, Sketch, or Adobe XD",
          "Understanding of UX principles and user-centered design",
          "Strong portfolio of UI/UX projects",
          "Basic knowledge of HTML/CSS is a plus",
        ],
      },
    ],
  },
];

const Career = () => {
  const handleApply = (jobTitle: string) => {
    const subject = `Application for ${jobTitle} position at Fam Infomedia`;
    const body = `Hello,\n\nI am interested in the ${jobTitle} position at Fam Infomedia.\n\nPlease find my resume attached.\n\nThank you.`;
    const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Join Our Team
            </h1>
            <p className="text-lg text-black/70 leading-relaxed">
              Be part of a growing team of 30+ professionals. We're looking for 
              passionate individuals who want to make an impact in digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="text-primary-foreground">
              <Users className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Collaborative Culture</h3>
              <p className="text-sm text-primary-foreground/70">
                Work alongside talented colleagues in a supportive environment.
              </p>
            </div>
            <div className="text-primary-foreground">
              <Clock className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-sm text-primary-foreground/70">
                Flexible schedules and a healthy approach to productivity.
              </p>
            </div>
            <div className="text-primary-foreground">
              <MapPin className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Great Location</h3>
              <p className="text-sm text-primary-foreground/70">
                Modern office in Coimbatore with excellent connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground">
              Find your perfect role and start your journey with Fam Infomedia.
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {jobOpenings.map((category) => (
              <div key={category.category}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                </div>

                {/* Jobs in Category */}
                <div className="space-y-4">
                  {category.jobs.map((job, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="bg-muted/50 pb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <span>{job.type}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {job.location}
                              </span>
                            </div>
                          </div>
                          <Button onClick={() => handleApply(job.title)}>
                            Apply Now
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-muted-foreground mb-4">{job.description}</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-foreground mb-2">Responsibilities</h5>
                            <ul className="space-y-1">
                              {job.responsibilities.map((item, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-foreground mb-2">Requirements</h5>
                            <ul className="space-y-1">
                              {job.requirements.map((item, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-muted-foreground mb-6">
            We're always looking for talented individuals. Send us your resume and 
            we'll keep you in mind for future opportunities.
          </p>
          <Button 
            variant="outline" 
            onClick={() => handleApply("general application")}
          >
            Send General Application
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
