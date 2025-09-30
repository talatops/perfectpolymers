import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(8, "Please enter a valid phone number").max(20, "Phone number must be less than 20 characters").optional().or(z.literal("")),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional().or(z.literal("")),
  topic: z.string().min(1, "Please select a topic"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      topic: "",
      message: "",
    },
  });

  const topics = [
    "General Inquiry",
    "Product Information",
    "Pricing Request", 
    "Technical Support",
    "Partnership Opportunities",
    "Bulk Orders",
    "Quality Concerns",
    "Other"
  ];

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    try {
      // Here you would normally send the data to Supabase
      // For now, we'll simulate the request
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log("Contact Form Data:", values);

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container-custom">
          <div className="text-center space-y-4">
            <h1 className="text-hero">Contact Us</h1>
            <p className="text-body-large text-white/90 max-w-3xl mx-auto">
              Get in touch with our team for any inquiries about our products, services, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-section text-foreground mb-6">Get In Touch</h2>
              <p className="text-body text-muted-foreground leading-relaxed mb-8">
                We're here to help you find the perfect polymer solutions for your business. 
                Our experienced team is ready to assist with product information, pricing, 
                and technical support.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Global Headquarters</h3>
                    <p className="text-muted-foreground text-sm mb-2">Perfect Polymers FZC</p>
                    <address className="text-brand-primary not-italic">
                      SPC Free Zone<br />
                      Sharjah, United Arab Emirates
                    </address>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground text-sm mb-2">Call or WhatsApp us</p>
                    <a 
                      href="https://wa.me/971588792355"
                      className="text-brand-primary hover:text-brand-accent transition-colors font-medium"
                    >
                      +971 58 8792355 <span className="text-xs text-muted-foreground">(UAE)</span>
                    </a>
                    <br />
                    <a 
                      href="https://wa.me/66640089799"
                      className="text-brand-primary hover:text-brand-accent transition-colors font-medium"
                    >
                      +66 4008 9799 <span className="text-xs text-muted-foreground">(Thailand)</span>
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm mb-2">General Inquiries</p>
                    <a 
                      href="mailto:info@perfectpolymers.co"
                      className="text-brand-primary hover:text-brand-accent transition-colors font-medium"
                    >
                      info@perfectpolymers.co
                    </a>
                    <p className="text-muted-foreground text-sm mt-4 mb-2">Sales</p>
                    <a 
                      href="mailto:sales@perfectpolymers.co"
                      className="text-brand-primary hover:text-brand-accent transition-colors font-medium"
                    >
                      sales@perfectpolymers.co
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Business Hours */}
            <Card className="p-6 bg-gradient-card">
              <h3 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-brand-primary" />
                Business Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
                <div className="pt-2 border-t border-card-border/50">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Globe className="h-4 w-4" />
                    <span>GMT +4 (UAE Time)</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-card-title font-semibold mb-6">Send us a Message</h2>
            <form action="https://formsubmit.co/info@perfectpolymers.co" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name *</label>
                  <Input name="name" type="text" placeholder="Your full name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <Input name="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Phone (Optional)</label>
                  <Input name="phone" type="text" placeholder="+971 XX XXX XXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Company (Optional)</label>
                  <Input name="company" type="text" placeholder="Your company name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Topic *</label>
                <select name="topic" required className="w-full border rounded px-3 py-2">
                  <option value="">Select inquiry topic</option>
                  <option>General Inquiry</option>
                  <option>Product Information</option>
                  <option>Pricing Request</option>
                  <option>Technical Support</option>
                  <option>Partnership Opportunities</option>
                  <option>Bulk Orders</option>
                  <option>Quality Concerns</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message *</label>
                <Textarea name="message" placeholder="Please describe your inquiry, requirements, or any questions you have..." className="min-h-32" required />
              </div>
              <button type="submit" className="w-full btn btn-hero flex items-center justify-center gap-2">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;