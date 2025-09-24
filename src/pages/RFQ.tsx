import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Plus, Minus, Send, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { allProducts } from "@/data/mockData";

const rfqSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  company: z.string().trim().min(2, "Company name is required").max(100, "Company name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(8, "Please enter a valid phone number").max(20, "Phone number must be less than 20 characters"),
  destination: z.string().trim().min(2, "Destination is required").max(100, "Destination must be less than 100 characters"),
  notes: z.string().max(1000, "Notes must be less than 1000 characters").optional(),
});

interface RFQItem {
  id: string;
  productCode: string;
  gradeType: string;
  quantity: string;
  unit: string;
}

const RFQ = () => {
  const { toast } = useToast();
  const [items, setItems] = useState<RFQItem[]>([
    { id: "1", productCode: "", gradeType: "", quantity: "", unit: "MT" }
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof rfqSchema>>({
    resolver: zodResolver(rfqSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      destination: "",
      notes: "",
    },
  });

  const gradeTypes = ["Prime", "Off Spec", "Off Grade", "Recycled"];
  const units = ["MT", "KG", "Tons", "Pounds"];
  const productCodes = [...new Set(allProducts.map(p => p.code))].sort();

  const addItem = () => {
    const newId = Math.max(...items.map(item => parseInt(item.id)), 0) + 1;
    setItems([...items, { 
      id: newId.toString(), 
      productCode: "", 
      gradeType: "", 
      quantity: "", 
      unit: "MT" 
    }]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof RFQItem, value: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const onSubmit = async (values: z.infer<typeof rfqSchema>) => {
    // Validate that at least one item has required fields
    const validItems = items.filter(item => item.productCode && item.quantity);
    if (validItems.length === 0) {
      toast({
        title: "Missing Information",
        description: "Please add at least one product with quantity.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would normally send the data to Supabase
      // For now, we'll simulate the request
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create RFQ object
      const rfqData = {
        ...values,
        items: validItems,
        created_at: new Date().toISOString(),
        status: "new"
      };

      console.log("RFQ Data:", rfqData);

      toast({
        title: "RFQ Submitted Successfully!",
        description: "We'll review your request and get back to you within 24 hours.",
      });

      // Reset form
      form.reset();
      setItems([{ id: "1", productCode: "", gradeType: "", quantity: "", unit: "MT" }]);

    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an error submitting your RFQ. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Company Information */}
              <Card className="p-8">
                <h2 className="text-card-title font-semibold mb-6 flex items-center gap-2">
                  <Package className="h-5 w-5 text-brand-primary" />
                  Company Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
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
                        <FormLabel>Company Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company name" {...field} />
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
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="+971 XX XXX XXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="destination"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Destination Country/Port *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Dubai, UAE or Mumbai Port, India" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </Card>

              {/* Product Requirements */}
              <Card className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-card-title font-semibold flex items-center gap-2">
                    <Package className="h-5 w-5 text-brand-primary" />
                    Product Requirements
                  </h2>
                  <Button type="button" variant="brand-outline" size="sm" onClick={addItem}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Item
                  </Button>
                </div>

                <div className="space-y-4">
                  {items.map((item, index) => (
                    <Card key={item.id} className="p-4 bg-background-muted">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline">Item {index + 1}</Badge>
                        {items.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Product Code</label>
                          <Select 
                            value={item.productCode}
                            onValueChange={(value) => updateItem(item.id, "productCode", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select product..." />
                            </SelectTrigger>
                            <SelectContent>
                              {productCodes.map((code) => (
                                <SelectItem key={code} value={code}>
                                  {code}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Grade Type</label>
                          <Select 
                            value={item.gradeType}
                            onValueChange={(value) => updateItem(item.id, "gradeType", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select grade..." />
                            </SelectTrigger>
                            <SelectContent>
                              {gradeTypes.map((grade) => (
                                <SelectItem key={grade} value={grade}>
                                  {grade}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Quantity</label>
                          <Input
                            type="number"
                            placeholder="100"
                            value={item.quantity}
                            onChange={(e) => updateItem(item.id, "quantity", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Unit</label>
                          <Select 
                            value={item.unit}
                            onValueChange={(value) => updateItem(item.id, "unit", value)}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {units.map((unit) => (
                                <SelectItem key={unit} value={unit}>
                                  {unit}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>

              {/* Additional Information */}
              <Card className="p-8">
                <h2 className="text-card-title font-semibold mb-6">Additional Information</h2>
                
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Requirements or Notes</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please include any specific requirements, delivery timeline, incoterms preference, or other details..."
                          className="min-h-24"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Card>

              {/* Submit */}
              <div className="text-center">
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  disabled={isSubmitting}
                  className="min-w-48"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Submit RFQ
                    </>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll review your request and respond within 24 hours during business days.
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RFQ;