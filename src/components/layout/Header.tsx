import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Products",
      href: "/products",
      dropdown: [
        { label: "Polymers", href: "/products/polymers" },
        { label: "Chemicals", href: "/products/chemicals" },
        { label: "Recycled Materials", href: "/products/recycled" },
        { label: "Off Spec/Off Grade", href: "/products/off-spec" },
      ],
    },
    {
      label: "Who We Are",
      href: "/about",
      dropdown: [
        { label: "About Us", href: "/about" },
        { label: "Mission & Vision", href: "/about/mission" },
        { label: "Our Approach", href: "/about/approach" },
        { label: "Our Stand", href: "/about/stand" },
        { label: "Why Choose Us", href: "/about/why-choose-us" },
      ],
    },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-card-border">
      {/* Top utility bar */}
      <div className="bg-brand-primary text-brand-primary-foreground py-2">
        <div className="container-custom">
          {/* Mobile: compact action buttons */}
          <div className="sm:hidden grid grid-cols-3 gap-2">
            <a
              href="https://wa.me/971588792355"
              className="bg-white/10 hover:bg-white/20 transition-colors rounded-md px-3 py-2 text-xs flex items-center justify-center gap-1"
            >
              <Phone className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="mailto:info@perfectpolymers.co"
              className="bg-white/10 hover:bg-white/20 transition-colors rounded-md px-3 py-2 text-xs flex items-center justify-center gap-1"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
            <Button variant="brand-accent" size="sm" asChild className="justify-center">
              <Link to="/rfq">RFQ</Link>
            </Button>
          </div>
          {/* Desktop: detailed contact bar */}
          <div className="hidden sm:flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
            <div className="flex items-center gap-6">
              <a href="https://wa.me/971588792355" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
                <Phone className="h-4 w-4" />
                WhatsApp: +971 58 8792355
              </a>
              <a href="mailto:info@perfectpolymers.co" className="flex items-center gap-2 hover:text-brand-accent transition-colors">
                <Mail className="h-4 w-4" />
                info@perfectpolymers.co
              </a>
            </div>
            <Button variant="brand-accent" size="sm" asChild>
              <Link to="/rfq">Request For Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.jpeg" alt="Perfect Polymers Logo" className="w-20 h-20 rounded-lg object-contain bg-white" />
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-brand-primary">Perfect Polymers</div>
              <div className="text-xs text-muted-foreground">Global Polymer Sourcing</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-1 text-foreground hover:text-brand-primary transition-colors font-medium",
                    item.dropdown && "cursor-pointer"
                  )}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-card-border rounded-lg shadow-lg py-2">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-brand-primary transition-colors"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg" asChild>
              <Link to="/rfq">Request For Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 border-t border-card-border pt-6">
            <div className="space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block text-foreground hover:text-brand-primary transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          className="block text-sm text-muted-foreground hover:text-brand-primary transition-colors py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button variant="hero" className="w-full" asChild>
                  <Link to="/rfq">Request For Quote</Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;