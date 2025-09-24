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
                    <Phone className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground text-sm mb-2">Call us for immediate assistance</p>
                    <a 
                      href="tel:+971559858525"
                      className="text-brand-primary hover:text-brand-accent transition-colors font-medium"
                    >
                      +971 55 985 8525
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
                    <p className="text-muted-foreground text-sm mb-2">Send us a detailed message</p>
                    <a 
                      href="mailto:info@gogreenfze.com"
                      className="text-brand-primary hover:text-brand-accent transition-colors font-medium"
                    >
                      info@gogreenfze.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground text-sm mb-2">Visit our office</p>
                    <address className="text-brand-primary not-italic">
                      Ajman Freezone<br />
                      Ajman, UAE
                    </address>
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
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="+971 XX XXX XXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Topic *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry topic" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {topics.map((topic) => (
                            <SelectItem key={topic} value={topic}>
                              {topic}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please describe your inquiry, requirements, or any questions you have..."
                          className="min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;