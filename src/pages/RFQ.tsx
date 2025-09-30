import { Send, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const RFQ = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container-custom">
          <div className="text-center space-y-4">
            <h1 className="text-hero">Request For Quote</h1>
            <p className="text-body-large text-white/90 max-w-3xl mx-auto">
              Get competitive pricing for your polymer requirements. Fill out the form below 
              and our team will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <form action="https://formsubmit.co/info@perfectpolymers.co" method="POST" className="space-y-8">
            {/* Company Information */}
            <Card className="p-8">
              <h2 className="text-card-title font-semibold mb-6 flex items-center gap-2">
                <Package className="h-5 w-5 text-brand-primary" />
                Company Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium">Contact Name *</label>
                  <Input name="name" placeholder="Your full name" required />
                </div>
                <div>
                  <label className="text-sm font-medium">Company Name *</label>
                  <Input name="company" placeholder="Your company name" required />
                </div>
                <div>
                  <label className="text-sm font-medium">Email Address *</label>
                  <Input name="email" type="email" placeholder="your@company.com" required />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone Number *</label>
                  <Input name="phone" placeholder="+971 XX XXX XXXX" required />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-medium">Destination Country/Port *</label>
                  <Input name="destination" placeholder="e.g., Dubai, UAE or Mumbai Port, India" required />
                </div>
              </div>
            </Card>

            {/* Additional Information */}
            <Card className="p-8">
              <h2 className="text-card-title font-semibold mb-6">Additional Information</h2>
              <div>
                <label className="text-sm font-medium">Special Requirements or Notes</label>
                <Textarea
                  name="notes"
                  placeholder="Please include any specific requirements, delivery timeline, incoterms preference, or other details..."
                  className="min-h-24"
                />
              </div>
            </Card>

            {/* Submit */}
            <div className="text-center">
              <Button type="submit" variant="hero" size="xl" className="min-w-48">
                <Send className="h-5 w-5 mr-2" />
                Submit RFQ
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                We'll review your request and respond within 24 hours during business days.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RFQ;