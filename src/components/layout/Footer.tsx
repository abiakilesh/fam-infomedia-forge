import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <span className="font-display font-semibold text-lg">Fam Infomedia</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Empowering careers through comprehensive digital marketing education. 
              Join 300+ successful clients who trust us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/plans" className="hover:text-primary transition-colors">Our Plans</Link></li>
              <li><Link to="/team" className="hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/career" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/clients" className="hover:text-primary transition-colors">Our Clients</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/speak-us-now" className="hover:text-primary transition-colors">Book a Call</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+91 96555 19922</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@faminfomedia.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70">
                  1st Floor, Krishna Ceramix, Bus Stop, opposite Maha Lakshmi Nagar, 
                  Goundampalayam, Tamil Nadu 641664
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Fam Infomedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
