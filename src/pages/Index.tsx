import { Link } from "react-router-dom";
import { ArrowRight, Package, Users, Globe, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/CategoryCard";
import ProductCard from "@/components/ui/ProductCard";
import { categories, featuredProducts, usps } from "@/data/mockData";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-hero leading-tight">
                  Global Polymer <span className="text-brand-accent">Sourcing</span>
                </h1>
                <p className="text-body-large text-white/90 max-w-xl">
                  Quality based globally well-known polymer products, sourced globally with best services, competitive prices, and prompt supplies.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="brand-accent" size="xl" asChild>
                  <Link to="/rfq">
                    Request For Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="brand-outline" size="xl" className="border-white text-white hover:bg-white hover:text-brand-primary" asChild>
                  <Link to="/products">View Products</Link>
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-center">
              <div className="w-96 h-96 relative">
                <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-8 bg-white/5 rounded-full animate-pulse delay-75"></div>
                <div className="absolute inset-16 bg-brand-accent/30 rounded-full flex items-center justify-center">
                  <Package className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="bg-background-muted section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-primary/20 transition-colors">
                  <span className="text-2xl">{usp.icon}</span>
                </div>
                <h3 className="text-card-title font-semibold mb-3 text-brand-primary">
                  {usp.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section text-foreground mb-4">
              Product Categories
            </h2>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of polymer products, chemicals, and sustainable materials 
              sourced from trusted global manufacturers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.name}
                description={category.description}
                href={`/products/${category.slug}`}
                productCount={Math.floor(Math.random() * 50) + 20}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="brand" size="lg" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-section text-foreground">
                  Perfect Polymers at <span className="text-brand-accent">Polymer Industry</span>
                </h2>
                <p className="text-body text-muted-foreground leading-relaxed">
                  With extensive experience in global polymer sourcing, we connect manufacturers with 
                  high-quality materials while promoting sustainable practices and environmental responsibility 
                  in the polymer industry.
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Our commitment to quality, competitive pricing, and prompt delivery has made us a 
                  trusted partner for businesses worldwide seeking reliable polymer solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-sm font-medium">Global Network</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-sm font-medium">Quality Assured</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-sm font-medium">Competitive Pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
              </div>
              
              <Button variant="brand" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-brand-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Products Available</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-brand-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Global Partners</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-brand-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Customer Support</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-brand-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h2 className="text-section">
              Whether you’re scaling production or looking for a reliable long-term partner, Perfect Polymers is here to help you succeed.
            </h2>
            <p className="text-body-large text-white/90">
              Get in touch today and let’s start building something stronger together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="brand-accent" size="xl" asChild>
                <Link to="/rfq">
                  Request For Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="brand-outline" size="xl" className="border-white text-white hover:bg-white hover:text-brand-primary" asChild>
                <Link to="/contact">
                  Contact Our Team
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Quick Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Expert Team Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Global Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
