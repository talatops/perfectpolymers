import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Approach", href: "/about/approach" },
    { label: "Categories", href: "/products" },
    { label: "Contact Us", href: "/contact" },
  ];

  const whyChooseUsLinks = [
    { label: "Best Services", href: "/about/why-choose-us#services" },
    { label: "Best Prices", href: "/about/why-choose-us#prices" },
    { label: "Range of Products", href: "/products" },
    { label: "Prompt Supplies", href: "/about/why-choose-us#supplies" },
  ];

  return (
    <footer className="bg-brand-primary text-brand-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center overflow-hidden">
                  <img src="/logo.jpeg" alt="Perfect Polymers Logo" className="w-8 h-8 object-contain bg-white rounded" />
                </div>
                <div>
                  <div className="text-xl font-bold">Perfect Polymers</div>
                  <div className="text-sm text-brand-primary-foreground/80">Global Polymer Sourcing</div>
                </div>
              </div>
              <p className="text-brand-primary-foreground/80 text-sm leading-relaxed">
                Quality based globally well-known polymer products, sourced globally with best services, prices, and prompt supplies.
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-brand-primary-foreground/80 hover:text-brand-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Why Choose Us</h3>
            <ul className="space-y-3">
              {whyChooseUsLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-brand-primary-foreground/80 hover:text-brand-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-brand-accent flex-shrink-0" />
                <div className="text-sm text-brand-primary-foreground/80">
                  <p>Ajman Freezone</p>
                  <p>Ajman, UAE</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-accent flex-shrink-0" />
                <a 
                  href="tel:+971588792355" 
                  className="text-sm text-brand-primary-foreground/80 hover:text-brand-accent transition-colors"
                >
                  +971 58 8792355
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-accent flex-shrink-0" />
                <a 
                  href="mailto:info@perfectpolymers.co" 
                  className="text-sm text-brand-primary-foreground/80 hover:text-brand-accent transition-colors"
                >
                  info@perfectpolymers.co
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-medium">Stay Updated</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button variant="brand-accent" size="icon">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-brand-primary-foreground/60">
              © 2024 Perfect Polymers. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link to="/privacy" className="text-brand-primary-foreground/60 hover:text-brand-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-brand-primary-foreground/60 hover:text-brand-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;