import Layout from "@/components/layout/Layout";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

// Manager photo
import gmPhoto from "@/assets/team/gm.png";

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
import vaishuPhoto from "@/assets/team/vaishu.png";
import dharshanPhoto from "@/assets/team/dharshan.png";
import gokulPhoto from "@/assets/team/gokul.png";
import hemaPhoto from "@/assets/team/hema.png";
import kishorePhoto from "@/assets/team/kishore.png";
import manojPhoto from "@/assets/team/manoj.png";

// Team Head photos
import head1Photo from "@/assets/team/head1.png";
import head2Photo from "@/assets/team/head2.png";
import head3Photo from "@/assets/team/head3.png";
import teamlead1Photo from "@/assets/team/teamlead1.png";
import teamlead2Photo from "@/assets/team/teamlead2.png";

// Team F members
import memberF1Photo from "@/assets/team/member-f1.png";
import memberF2Photo from "@/assets/team/member-f2.png";
import memberF3Photo from "@/assets/team/member-f3.png";
import memberF4Photo from "@/assets/team/member-f4.png";
import memberF5Photo from "@/assets/team/member-f5.png";
import memberF6Photo from "@/assets/team/member-f6.png";
import memberF7Photo from "@/assets/team/member-f7.png";

const manager = {
  name: "Prasanth",
  role: "General Manager",
  photo: gmPhoto,
  instagram: "https://www.instagram.com/faminfomedia",
  twitter: "https://twitter.com/faminfomedia",
  linkedin: "https://www.linkedin.com/company/faminfomedia",
  facebook: "https://www.facebook.com/faminfomedia",
};

const teamsData = [
  {
    name: "Team A - Digital Strategy",
    headName: "Priya",
    headRole: "Head - Operations",
    headPhoto: head1Photo,
    members: [
      { name: "Prasana", role: "Strategy Lead", photo: prasanaPhoto },
      { name: "Vignesh", role: "Campaign Manager", photo: vigneshPhoto },
      { name: "Dhileepkumar", role: "Marketing Analyst", photo: dhileepkumarPhoto },
      { name: "Jessy", role: "Digital Strategist", photo: jessyPhoto },
      { name: "Karthika", role: "Project Lead", photo: karthikaPhoto },
    ],
  },
  {
    name: "Team B - Content & SEO",
    headName: "Divya",
    headRole: "Head - Marketing",
    headPhoto: head2Photo,
    members: [
      { name: "Santhosh", role: "SEO Lead", photo: santhoshPhoto },
      { name: "Karthiga", role: "Content Writer", photo: karthigaPhoto },
      { name: "Keerthana", role: "Content Strategist", photo: keerthanaPhoto },
      { name: "Lebina", role: "SEO Specialist", photo: lebinaPhoto },
      { name: "Priya", role: "Content Manager", photo: priyaPhoto },
    ],
  },
  {
    name: "Team C - Design",
    headName: "Keerthana",
    headRole: "Head - HR",
    headPhoto: head3Photo,
    members: [
      { name: "Akilesh", role: "Creative Lead", photo: akileshPhoto },
      { name: "Bharath", role: "Graphic Designer", photo: bharathPhoto },
      { name: "Gayathri", role: "UI/UX Designer", photo: gayathriPhoto },
      { name: "Hari", role: "Motion Designer", photo: hariPhoto },
      { name: "Sharnitha", role: "Brand Designer", photo: sharnithaPhoto },
      { name: "Vaishu", role: "Visual Designer", photo: vaishuPhoto },
      { name: "Dharshan", role: "Graphic Designer", photo: dharshanPhoto },
      { name: "Gokul", role: "UI Designer", photo: gokulPhoto },
      { name: "Hema", role: "Brand Designer", photo: hemaPhoto },
      { name: "Kishore", role: "Creative Designer", photo: kishorePhoto },
      { name: "Manoj", role: "Art Director", photo: manojPhoto },
    ],
  },
  {
    name: "Team D - Social Media",
    headName: "Karthik",
    headRole: "Team Lead - Design",
    headPhoto: teamlead1Photo,
    members: [
      { name: "Subhiksha", role: "Social Media Lead", photo: subhikshaPhoto },
      { name: "Santhiya", role: "Community Manager", photo: santhiyaPhoto },
    ],
  },
  {
    name: "Team E - Development",
    headName: "Santhiya",
    headRole: "Team Lead - Content",
    headPhoto: teamlead2Photo,
    members: [
      { name: "Naveen", role: "Tech Lead", photo: naveenPhoto },
      { name: "Kathir", role: "Full Stack Developer", photo: kathirPhoto },
    ],
  },
  {
    name: "Team F - Operations",
    headName: "",
    headRole: "",
    headPhoto: "",
    members: [
      { name: "Kavitha", role: "Operations Lead", photo: memberF1Photo },
      { name: "Ranjith", role: "Project Coordinator", photo: memberF2Photo },
      { name: "Arun", role: "Client Success Manager", photo: memberF3Photo },
      { name: "Divya", role: "Quality Analyst", photo: memberF4Photo },
      { name: "Vijay", role: "Process Manager", photo: memberF5Photo },
      { name: "Kiran", role: "Operations Executive", photo: memberF6Photo },
      { name: "Surya", role: "Technical Support", photo: memberF7Photo },
    ],
  },
];

const SocialLinks = ({ small = false }: { small?: boolean }) => {
  const size = small ? "w-8 h-8" : "w-10 h-10";
  const iconSize = small ? "h-4 w-4" : "h-5 w-5";
  const bg = "bg-gray-800";
  return (
    <div className="flex justify-center gap-3">
      <a href="https://www.facebook.com/faminfomedia" target="_blank" rel="noopener noreferrer" className={`${size} rounded-full ${bg} flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300`}>
        <Facebook className={iconSize} />
      </a>
      <a href="https://www.instagram.com/faminfomedia" target="_blank" rel="noopener noreferrer" className={`${size} rounded-full ${bg} flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300`}>
        <Instagram className={iconSize} />
      </a>
      <a href="https://twitter.com/faminfomedia" target="_blank" rel="noopener noreferrer" className={`${size} rounded-full ${bg} flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300`}>
        <Twitter className={iconSize} />
      </a>
    </div>
  );
};

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg text-muted-foreground">
            A talented group of professionals dedicated to your success.
          </p>
        </div>
      </section>

      {/* Manager */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="group">
            <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:border-primary group-hover:shadow-2xl">
              <img src={manager.photo} alt={manager.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h3 className="text-2xl font-bold text-white">{manager.name}</h3>
            <p className="text-primary font-semibold text-lg mb-4">{manager.role}</p>
            <div className="flex justify-center gap-4">
              <a href={manager.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={manager.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={manager.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={manager.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 space-y-24 max-w-6xl">
          {teamsData.map((team, idx) => (
            <div key={idx} className="space-y-10">
              {/* Team Head - manager-style round, large, with slide-down + zoom hover */}
              <div className="text-center animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                {team.headPhoto && (
                  <div className="group w-44 h-44 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl cursor-pointer transition-all duration-500 hover:scale-110 hover:border-primary hover:shadow-2xl">
                    <img
                      src={team.headPhoto}
                      alt={team.headName}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                <h2 className="text-2xl font-bold text-white">{team.name}</h2>
                {team.headName && (
                  <>
                    <p className="text-white text-lg font-semibold mt-2">{team.headName}</p>
                    <p className="text-primary text-sm font-medium">{team.headRole}</p>
                  </>
                )}
                {team.headPhoto && <div className="mt-3"><SocialLinks /></div>}
              </div>

              {/* Team Members - square shape, medium, invisible-to-visible, zoom hover */}
              <div className="flex flex-wrap justify-center gap-8">
                {team.members.map((member, mIdx) => (
                  <div
                    key={mIdx}
                    className="text-center w-40 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${(idx * 100) + (mIdx * 120) + 200}ms` }}
                  >
                    <div className="group w-36 h-36 mx-auto mb-3 rounded-xl overflow-hidden border-2 border-gray-700 shadow-lg cursor-pointer transition-all duration-500 hover:border-primary hover:shadow-primary/20 hover:shadow-xl hover:scale-105">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-115"
                        style={{ transform: "scale(1)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      />
                    </div>
                    <p className="text-white font-semibold text-sm">{member.name}</p>
                    <p className="text-primary/80 text-xs mt-0.5">{member.role}</p>
                    <div className="mt-2"><SocialLinks small /></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Team;
