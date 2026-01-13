import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, MapPinned } from "lucide-react";
import famLogo from "@/assets/fam-logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={famLogo} alt="Fam Infomedia" className="h-12 w-auto" />
            </div>
            <p className="text-sm text-white/70">
              Empowering careers through comprehensive digital marketing education. 
              Join 300+ successful clients who trust us.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://www.facebook.com/faminfomedia" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/faminfomedia" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/faminfomedia" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/faminfomedia" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://g.page/faminfomedia" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary transition-colors">
                <MapPinned className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-white/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/plans" className="text-white/80 hover:text-primary transition-colors">Our Plans</Link></li>
              <li><Link to="/team" className="text-white/80 hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/career" className="text-white/80 hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/clients" className="text-white/80 hover:text-primary transition-colors">Our Clients</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/speak-us-now" className="text-white/80 hover:text-primary transition-colors">Book a Call</Link></li>
              <li><Link to="/terms" className="text-white/80 hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-white" />
                <span className="text-white/80">+91 96555 19922</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-white" />
                <span className="text-white/80">info@faminfomedia.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-white" />
                <span className="text-white/70">
                  1st Floor, Krishna Ceramix, Bus Stop, opposite Maha Lakshmi Nagar, 
                  Goundampalayam, Tamil Nadu 641664
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Fam Infomedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;