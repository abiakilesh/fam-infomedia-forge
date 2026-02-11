import Layout from "@/components/layout/Layout";
import { Linkedin, Twitter, Instagram } from "lucide-react";

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
};

const teamsData = [
  {
    name: "Team A - Digital Strategy",
    headName: "Priya",
    headPhoto: head1Photo,
    members: [
      { name: "Prasana", photo: prasanaPhoto },
      { name: "Vignesh", photo: vigneshPhoto },
      { name: "Dhileepkumar", photo: dhileepkumarPhoto },
      { name: "Jessy", photo: jessyPhoto },
      { name: "Karthika", photo: karthikaPhoto },
    ],
  },
  {
    name: "Team B - Content & SEO",
    headName: "Divya",
    headPhoto: head2Photo,
    members: [
      { name: "Santhosh", photo: santhoshPhoto },
      { name: "Karthiga", photo: karthigaPhoto },
      { name: "Keerthana", photo: keerthanaPhoto },
      { name: "Lebina", photo: lebinaPhoto },
      { name: "Priya", photo: priyaPhoto },
    ],
  },
  {
    name: "Team C - Design",
    headName: "Keerthana",
    headPhoto: head3Photo,
    members: [
      { name: "Akilesh", photo: akileshPhoto },
      { name: "Bharath", photo: bharathPhoto },
      { name: "Gayathri", photo: gayathriPhoto },
      { name: "Hari", photo: hariPhoto },
      { name: "Sharnitha", photo: sharnithaPhoto },
      { name: "Vaishu", photo: vaishuPhoto },
      { name: "Dharshan", photo: dharshanPhoto },
      { name: "Gokul", photo: gokulPhoto },
      { name: "Hema", photo: hemaPhoto },
      { name: "Kishore", photo: kishorePhoto },
      { name: "Manoj", photo: manojPhoto },
    ],
  },
  {
    name: "Team D - Social Media",
    headName: "Karthik",
    headPhoto: teamlead1Photo,
    members: [
      { name: "Subhiksha", photo: subhikshaPhoto },
      { name: "Santhiya", photo: santhiyaPhoto },
    ],
  },
  {
    name: "Team E - Development",
    headName: "Santhiya",
    headPhoto: teamlead2Photo,
    members: [
      { name: "Naveen", photo: naveenPhoto },
      { name: "Kathir", photo: kathirPhoto },
    ],
  },
  {
    name: "Team F - Operations",
    headName: "",
    headPhoto: "",
    members: [
      { name: "Kavitha", photo: memberF1Photo },
      { name: "Ranjith", photo: memberF2Photo },
      { name: "Arun", photo: memberF3Photo },
      { name: "Divya", photo: memberF4Photo },
      { name: "Vijay", photo: memberF5Photo },
      { name: "Kiran", photo: memberF6Photo },
      { name: "Surya", photo: memberF7Photo },
    ],
  },
];

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
            <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:border-primary">
              <img src={manager.photo} alt={manager.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <h3 className="text-2xl font-bold text-white">{manager.name}</h3>
            <p className="text-primary font-semibold text-lg mb-4">{manager.role}</p>
            <div className="flex justify-center gap-4">
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
        <div className="container mx-auto px-4 space-y-20 max-w-6xl">
          {teamsData.map((team, idx) => (
            <div key={idx} className="space-y-8">
              {/* Team Head - slide down effect + large image + zoom on hover */}
              <div className="text-center animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                {team.headPhoto && (
                  <div className="group w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl cursor-pointer transition-all duration-500 hover:shadow-primary/30 hover:shadow-2xl">
                    <img
                      src={team.headPhoto}
                      alt={team.headName}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                    />
                  </div>
                )}
                <h2 className="text-2xl font-bold text-white">{team.name}</h2>
                {team.headName && (
                  <p className="text-primary text-sm font-medium mt-1">Team Head: {team.headName}</p>
                )}
              </div>

              {/* Team Members - fade in visible + medium image + zoom on hover */}
              <div className="flex flex-wrap justify-center gap-8">
                {team.members.map((member, mIdx) => (
                  <div
                    key={mIdx}
                    className="text-center w-32 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${(idx * 100) + (mIdx * 120) + 200}ms` }}
                  >
                    <div className="group w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden border-2 border-gray-700 shadow-lg cursor-pointer transition-all duration-500 hover:border-primary hover:shadow-primary/20 hover:shadow-xl">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                      />
                    </div>
                    <p className="text-sm text-gray-300 font-medium">{member.name}</p>
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
