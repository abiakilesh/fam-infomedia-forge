import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Team member photos
import prasanaPhoto from "@/assets/team/prasana.png";
import vigneshPhoto from "@/assets/team/vignesh.png";
import dhileepkumarPhoto from "@/assets/team/dhileepkumar.png";
import jessyPhoto from "@/assets/team/jessy.png";
import karthikaPhoto from "@/assets/team/karthika.png";
import santhoshPhoto from "@/assets/team/santhosh.png";
import karthigaPhoto from "@/assets/team/karthiga.png";
import keerthanaPhoto from "@/assets/team/keerthana.png";
import lebinaPhoto from "@/assets/team/lebina.png";
import akileshPhoto from "@/assets/team/akilesh.png";
import bharathPhoto from "@/assets/team/bharath.png";
import gayathriPhoto from "@/assets/team/gayathri.png";
import hariPhoto from "@/assets/team/hari.png";
import sharnithaPhoto from "@/assets/team/sharnitha.png";
import naveenPhoto from "@/assets/team/naveen.png";
import kathirPhoto from "@/assets/team/kathir.png";
import subhikshaPhoto from "@/assets/team/subhiksha.png";
import santhiyaPhoto from "@/assets/team/santhiya.png";
import priyaPhoto from "@/assets/team/priya.png";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

interface Team {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
}

const teamsData: Team[] = [
  {
    id: "team-a",
    name: "Team A - Digital Strategy",
    description: "Our digital strategy team develops comprehensive marketing plans and campaign strategies.",
    members: [
      { id: "a1", name: "Prasana", role: "Strategy Lead", photo: prasanaPhoto, linkedin: "#", twitter: "#", instagram: "#" },
      { id: "a2", name: "Vignesh", role: "Campaign Manager", photo: vigneshPhoto, linkedin: "#", instagram: "#" },
      { id: "a3", name: "Dhileepkumar", role: "Marketing Analyst", photo: dhileepkumarPhoto, linkedin: "#", twitter: "#" },
      { id: "a4", name: "Jessy", role: "Digital Strategist", photo: jessyPhoto, linkedin: "#", instagram: "#" },
      { id: "a5", name: "Karthika", role: "Project Lead", photo: karthikaPhoto, linkedin: "#", twitter: "#" },
    ],
  },
  {
    id: "team-b",
    name: "Team B - Content & SEO",
    description: "Specialists in content creation, SEO optimization, and organic growth strategies.",
    members: [
      { id: "b1", name: "Santhosh", role: "SEO Lead", photo: santhoshPhoto, linkedin: "#", twitter: "#" },
      { id: "b2", name: "Karthiga", role: "Content Writer", photo: karthigaPhoto, linkedin: "#", instagram: "#" },
      { id: "b3", name: "Keerthana", role: "Content Strategist", photo: keerthanaPhoto, linkedin: "#" },
      { id: "b4", name: "Lebina", role: "SEO Specialist", photo: lebinaPhoto, linkedin: "#", twitter: "#" },
      { id: "b5", name: "Priya", role: "Content Manager", photo: priyaPhoto, linkedin: "#", instagram: "#" },
    ],
  },
  {
    id: "team-c",
    name: "Team C - Creative Design",
    description: "Creative designers crafting stunning visuals and brand identities.",
    members: [
      { id: "c1", name: "Akilesh", role: "Creative Lead", photo: akileshPhoto, linkedin: "#", twitter: "#", instagram: "#" },
      { id: "c2", name: "Bharath", role: "Graphic Designer", photo: bharathPhoto, linkedin: "#", instagram: "#" },
      { id: "c3", name: "Gayathri", role: "UI/UX Designer", photo: gayathriPhoto, linkedin: "#", twitter: "#" },
      { id: "c4", name: "Hari", role: "Motion Designer", photo: hariPhoto, linkedin: "#", instagram: "#" },
      { id: "c5", name: "Sharnitha", role: "Brand Designer", photo: sharnithaPhoto, linkedin: "#", twitter: "#" },
    ],
  },
  {
    id: "team-d",
    name: "Team D - Social Media",
    description: "Social media experts managing engagement and community growth.",
    members: [
      { id: "d1", name: "Subhiksha", role: "Social Media Lead", photo: subhikshaPhoto, linkedin: "#", twitter: "#", instagram: "#" },
      { id: "d2", name: "Santhiya", role: "Community Manager", photo: santhiyaPhoto, linkedin: "#", instagram: "#" },
    ],
  },
  {
    id: "team-e",
    name: "Team E - Development",
    description: "Technical experts building digital solutions and web applications.",
    members: [
      { id: "e1", name: "Naveen", role: "Tech Lead", photo: naveenPhoto, linkedin: "#", twitter: "#", instagram: "#" },
      { id: "e2", name: "Kathir", role: "Full Stack Developer", photo: kathirPhoto, linkedin: "#", instagram: "#" },
    ],
  },
];

const Team = () => {
  const [expandedTeam, setExpandedTeam] = useState<string | null>(null);

  const toggleTeam = (teamId: string) => {
    setExpandedTeam(expandedTeam === teamId ? null : teamId);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Team
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A talented group of professionals dedicated to your success. 
              Click on any team to meet the members.
            </p>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-6xl mx-auto">
            {teamsData.map((team) => (
              <div key={team.id} className="space-y-6">
                {/* Team Header */}
                <div 
                  className="cursor-pointer group"
                  onClick={() => toggleTeam(team.id)}
                >
                  <Card className="bg-gray-50 hover:shadow-lg transition-all duration-300 border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-charcoal mb-2">
                        {team.name}
                      </h3>
                      <p className="text-charcoal/70 mb-2">{team.description}</p>
                      <p className="text-sm text-primary font-medium">
                        {expandedTeam === team.id ? "Click to collapse" : "Click to view members →"}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Expanded Members with Zoom Animation */}
                {expandedTeam === team.id && (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {team.members.map((member, index) => (
                      <div 
                        key={member.id} 
                        className="animate-zoom-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <Card className="overflow-hidden bg-white hover:shadow-xl transition-all duration-500 transform hover:scale-105 border-gray-200">
                          <CardContent className="p-0">
                            {/* Member Photo */}
                            <div className="relative overflow-hidden">
                              <img 
                                src={member.photo} 
                                alt={member.name}
                                className="w-full h-56 object-cover object-top transition-transform duration-500 hover:scale-110"
                              />
                            </div>
                            
                            {/* Member Info */}
                            <div className="p-4 space-y-2 text-center">
                              <h4 className="font-semibold text-charcoal text-lg">{member.name}</h4>
                              <p className="text-sm text-charcoal/60">{member.role}</p>
                              
                              {/* Social Links */}
                              <div className="flex justify-center gap-3 pt-2">
                                {member.linkedin && (
                                  <a 
                                    href={member.linkedin} 
                                    className="text-charcoal/50 hover:text-primary transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Linkedin className="h-5 w-5" />
                                  </a>
                                )}
                                {member.twitter && (
                                  <a 
                                    href={member.twitter} 
                                    className="text-charcoal/50 hover:text-primary transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Twitter className="h-5 w-5" />
                                  </a>
                                )}
                                {member.instagram && (
                                  <a 
                                    href={member.instagram} 
                                    className="text-charcoal/50 hover:text-primary transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Instagram className="h-5 w-5" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
