import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
  groupPhoto: string;
  members: TeamMember[];
}

const teamsData: Team[] = [
  {
    id: "team-a",
    name: "Team A - Digital Strategy",
    description: "Our digital strategy team develops comprehensive marketing plans and campaign strategies.",
    groupPhoto: "[TEAM A GROUP PHOTO]",
    members: [
      { id: "a1", name: "Team Member 1", role: "Strategy Lead", photo: "[EMPLOYEE PHOTO]", linkedin: "#", twitter: "#", instagram: "#" },
      { id: "a2", name: "Team Member 2", role: "Campaign Manager", photo: "[EMPLOYEE PHOTO]", linkedin: "#", instagram: "#" },
      { id: "a3", name: "Team Member 3", role: "Marketing Analyst", photo: "[EMPLOYEE PHOTO]", linkedin: "#", twitter: "#" },
    ],
  },
  {
    id: "team-b",
    name: "Team B - Content & SEO",
    description: "Specialists in content creation, SEO optimization, and organic growth strategies.",
    groupPhoto: "[TEAM B GROUP PHOTO]",
    members: [
      { id: "b1", name: "Team Member 1", role: "SEO Lead", photo: "[EMPLOYEE PHOTO]", linkedin: "#", twitter: "#" },
      { id: "b2", name: "Team Member 2", role: "Content Writer", photo: "[EMPLOYEE PHOTO]", linkedin: "#", instagram: "#" },
      { id: "b3", name: "Team Member 3", role: "Content Strategist", photo: "[EMPLOYEE PHOTO]", linkedin: "#" },
      { id: "b4", name: "Team Member 4", role: "SEO Specialist", photo: "[EMPLOYEE PHOTO]", linkedin: "#", twitter: "#" },
    ],
  },
  {
    id: "team-c",
    name: "Team C - Social Media",
    description: "Managing social media presence and community engagement across all platforms.",
    groupPhoto: "[TEAM C GROUP PHOTO]",
    members: [
      { id: "c1", name: "Team Member 1", role: "Social Media Manager", photo: "[EMPLOYEE PHOTO]", linkedin: "#", instagram: "#" },
      { id: "c2", name: "Team Member 2", role: "Community Manager", photo: "[EMPLOYEE PHOTO]", instagram: "#", twitter: "#" },
      { id: "c3", name: "Team Member 3", role: "Content Creator", photo: "[EMPLOYEE PHOTO]", linkedin: "#", instagram: "#" },
    ],
  },
  {
    id: "team-d",
    name: "Team D - Paid Advertising",
    description: "Experts in Google Ads, Facebook Ads, and other paid marketing channels.",
    groupPhoto: "[TEAM D GROUP PHOTO]",
    members: [
      { id: "d1", name: "Team Member 1", role: "Ads Manager", photo: "[EMPLOYEE PHOTO]", linkedin: "#" },
      { id: "d2", name: "Team Member 2", role: "PPC Specialist", photo: "[EMPLOYEE PHOTO]", linkedin: "#", twitter: "#" },
      { id: "d3", name: "Team Member 3", role: "Performance Analyst", photo: "[EMPLOYEE PHOTO]", linkedin: "#" },
    ],
  },
  {
    id: "team-e",
    name: "Team E - Design & Creative",
    description: "Creating visual content, graphics, and brand materials for all campaigns.",
    groupPhoto: "[TEAM E GROUP PHOTO]",
    members: [
      { id: "e1", name: "Team Member 1", role: "Design Lead", photo: "[EMPLOYEE PHOTO]", linkedin: "#", instagram: "#" },
      { id: "e2", name: "Team Member 2", role: "Graphic Designer", photo: "[EMPLOYEE PHOTO]", instagram: "#" },
    ],
  },
  {
    id: "team-f",
    name: "Team F - Training & Support",
    description: "Dedicated to student success, training delivery, and ongoing support.",
    groupPhoto: "[TEAM F GROUP PHOTO]",
    members: [
      { id: "f1", name: "Team Member 1", role: "Training Lead", photo: "[EMPLOYEE PHOTO]", linkedin: "#" },
      { id: "f2", name: "Team Member 2", role: "Course Instructor", photo: "[EMPLOYEE PHOTO]", linkedin: "#", twitter: "#" },
      { id: "f3", name: "Team Member 3", role: "Student Support", photo: "[EMPLOYEE PHOTO]", linkedin: "#" },
      { id: "f4", name: "Team Member 4", role: "Program Coordinator", photo: "[EMPLOYEE PHOTO]", linkedin: "#", instagram: "#" },
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
              A talented group of 30+ professionals dedicated to your success. 
              Click on any team to meet the members.
            </p>
          </div>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-5xl mx-auto">
            {teamsData.map((team) => (
              <div key={team.id} className="space-y-4">
                {/* Team Card */}
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => toggleTeam(team.id)}
                >
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3 gap-0">
                      {/* Group Photo */}
                      <div className="bg-muted h-48 md:h-auto flex items-center justify-center text-muted-foreground text-sm">
                        {team.groupPhoto}
                      </div>
                      
                      {/* Team Info */}
                      <div className="md:col-span-2 p-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {team.name}
                        </h3>
                        <p className="text-muted-foreground mb-4">{team.description}</p>
                        <p className="text-sm text-primary font-medium">
                          {expandedTeam === team.id ? "Click to collapse" : "Click to view members"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Expanded Members */}
                {expandedTeam === team.id && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-zoom-in">
                    {team.members.map((member) => (
                      <Card key={member.id} className="overflow-hidden">
                        <CardContent className="p-0">
                          {/* Member Photo */}
                          <div className="bg-muted h-32 flex items-center justify-center text-muted-foreground text-xs">
                            {member.photo}
                          </div>
                          
                          {/* Member Info */}
                          <div className="p-4 space-y-2">
                            <h4 className="font-medium text-foreground text-sm">{member.name}</h4>
                            <p className="text-xs text-muted-foreground">{member.role}</p>
                            
                            {/* Social Links */}
                            <div className="flex gap-2 pt-2">
                              {member.linkedin && (
                                <a 
                                  href={member.linkedin} 
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Linkedin className="h-4 w-4" />
                                </a>
                              )}
                              {member.twitter && (
                                <a 
                                  href={member.twitter} 
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Twitter className="h-4 w-4" />
                                </a>
                              )}
                              {member.instagram && (
                                <a 
                                  href={member.instagram} 
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Instagram className="h-4 w-4" />
                                </a>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
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
