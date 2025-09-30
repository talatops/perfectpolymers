import { Link } from "react-router-dom";
import { CheckCircle, Award, Globe, Users, Target, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-brand-primary" />,
      title: "Quality Excellence",
      description: "We source only the highest quality materials from certified global manufacturers, ensuring consistent performance and reliability."
    },
    {
      icon: <Globe className="h-8 w-8 text-brand-primary" />,
      title: "Global Network",
      description: "Our extensive worldwide network enables us to provide competitive pricing and reliable supply chains across multiple continents."
    },
    {
      icon: <Users className="h-8 w-8 text-brand-primary" />,
      title: "Expert Team",
      description: "Our experienced professionals provide technical expertise and personalized service to help you find the perfect material solutions."
    },
    {
      icon: <Leaf className="h-8 w-8 text-brand-primary" />,
      title: "Sustainability",
      description: "We're committed to promoting sustainable practices and offering eco-friendly recycled materials for environmentally conscious businesses."
    }
  ];

  const achievements = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Products Available" },
    { number: "50+", label: "Global Partners" },
    { number: "1000+", label: "Satisfied Customers" }
  ];

  const whyChooseUs = [
    {
      title: "Best Services",
      description: "Professional customer service with technical expertise and reliable support throughout your sourcing journey.",
      benefits: ["24/7 customer support", "Technical consultation", "Personalized service", "After-sales support"]
    },
    {
      title: "Best Prices",
      description: "Competitive pricing through global sourcing networks and volume purchasing advantages.",
      benefits: ["Volume discounts", "Competitive rates", "Transparent pricing", "No hidden fees"]
    },
    {
      title: "Range of Products",
      description: "Extensive catalog of polymers, chemicals, and agro products from trusted global manufacturers.",
      benefits: ["500+ product variants", "Multiple grade options", "Custom solutions", "New products regularly"]
    },
    {
      title: "Prompt Supplies",
      description: "Efficient logistics and supply chain management ensuring timely delivery to your destination.",
      benefits: ["Fast delivery", "Global shipping", "Reliable logistics", "Real-time tracking"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container-custom">
          <div className="text-center space-y-4">
            <h1 className="text-hero">About Perfect Polymers</h1>
            <p className="text-body-large text-white/90 max-w-3xl mx-auto">
              Leading global polymer sourcing company committed to delivering quality materials, 
              competitive pricing, and exceptional service to businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-section text-foreground mb-6">Our Mission</h2>
                <p className="text-body text-muted-foreground leading-relaxed mb-6">
                  To be the leading global polymer sourcing partner, connecting manufacturers with 
                  high-quality materials while promoting sustainable practices and fostering long-term 
                  business relationships built on trust, reliability, and excellence.
                </p>
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-brand-primary flex-shrink-0" />
                  <span className="text-brand-primary font-medium">
                    Quality • Reliability • Sustainability
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-section text-foreground mb-6">Our Vision</h2>
                <p className="text-body text-muted-foreground leading-relaxed">
                  To create a more sustainable future for the polymer industry by facilitating 
                  access to quality materials, promoting recycling initiatives, and supporting 
                  businesses in making environmentally responsible choices without compromising 
                  on performance or cost-effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-background-muted section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section text-foreground mb-4">Our Core Values</h2>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our relationships 
              with customers, partners, and the communities we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center card-hover h-full">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-card-title font-semibold mb-4 text-brand-primary">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-section text-foreground mb-6">Our Approach</h2>
                <p className="text-body text-muted-foreground leading-relaxed mb-8">
                  We believe in building lasting partnerships through transparency, expertise, and 
                  unwavering commitment to quality. Our approach combines global reach with 
                  personalized service to deliver exceptional value to every client.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Strategic Sourcing</h4>
                    <p className="text-muted-foreground text-sm">
                      We maintain strategic relationships with leading manufacturers worldwide to ensure 
                      consistent supply and competitive pricing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Quality Assurance</h4>
                    <p className="text-muted-foreground text-sm">
                      Rigorous quality control processes ensure every product meets or exceeds 
                      international standards and customer expectations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Customer-Centric Service</h4>
                    <p className="text-muted-foreground text-sm">
                      Our dedicated team provides personalized attention, technical support, and 
                      flexible solutions tailored to your specific requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 text-center bg-gradient-card">
                  <div className="text-3xl lg:text-4xl font-bold text-brand-primary mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background-muted section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section text-foreground mb-4">Why Choose Perfect Polymers</h2>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              Discover the advantages that make us the preferred partner for businesses 
              seeking reliable polymer sourcing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-8 h-full">
                <h3 className="text-card-title font-semibold mb-4 text-brand-primary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="space-y-2">
                  {item.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Stand */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-section text-foreground mb-4">Our Stand on Sustainability</h2>
            <p className="text-body text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Perfect Polymers, we recognize the critical importance of environmental responsibility 
              in the polymer industry. We're committed to promoting sustainable practices and 
              supporting the circular economy through innovative solutions and responsible sourcing.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <Leaf className="h-12 w-12 text-brand-accent mx-auto mb-4" />
              <h3 className="text-card-title font-semibold mb-4">Recycled Materials</h3>
              <p className="text-muted-foreground text-sm">
                We actively promote and supply high-quality recycled polymer materials, 
                helping customers reduce their environmental footprint.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Globe className="h-12 w-12 text-brand-accent mx-auto mb-4" />
              <h3 className="text-card-title font-semibold mb-4">Sustainable Sourcing</h3>
              <p className="text-muted-foreground text-sm">
                We partner with manufacturers who share our commitment to environmental 
                responsibility and sustainable production practices.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <Target className="h-12 w-12 text-brand-accent mx-auto mb-4" />
              <h3 className="text-card-title font-semibold mb-4">Future Goals</h3>
              <p className="text-muted-foreground text-sm">
                We're working towards carbon-neutral operations and expanding our portfolio 
                of bio-based and sustainable material options.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-8">
              Ready to partner with a company that shares your values and delivers results?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="brand" size="lg" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="brand-outline" size="lg" asChild>
                <Link to="/products">
                  Explore Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;