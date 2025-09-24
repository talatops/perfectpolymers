import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FileText, Download, Share2, Package, Info, CheckCircle, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ui/ProductCard";
import { allProducts } from "@/data/mockData";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the product by ID
  const product = allProducts.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-semibold mb-2">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Button variant="brand" asChild>
            <Link to="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter(p => p.family === product.family && p.id !== product.id)
    .slice(0, 3);

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "Prime":
        return "bg-success/10 text-success border-success/20";
      case "Off Spec":
      case "Off Grade":
        return "bg-warning/10 text-warning border-warning/20";
      case "Recycled":
        return "bg-info/10 text-info border-info/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-background-muted py-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-brand-primary transition-colors">Products</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.code}</span>
          </nav>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" className="mb-4" asChild>
            <Link to="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-display text-foreground mb-4">{product.code}</h1>
              {product.name && (
                <p className="text-body-large text-muted-foreground mb-4">{product.name}</p>
              )}
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-sm">
                  {product.family}
                </Badge>
                <Badge className={`text-sm border ${getGradeColor(product.grade_type)}`}>
                  {product.grade_type}
                </Badge>
                {product.is_featured && (
                  <Badge className="bg-brand-accent text-brand-accent-foreground">
                    Featured
                  </Badge>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="brand-outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="brand" size="lg" asChild>
                <Link to="/rfq">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="availability">Availability</TabsTrigger>
                <TabsTrigger value="downloads">Downloads</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-card-title font-semibold mb-4 flex items-center gap-2">
                    <Info className="h-5 w-5 text-brand-primary" />
                    Product Overview
                  </h2>
                  <p className="text-body text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>
                  
                  {product.applications.length > 0 && (
                    <div>
                      <h3 className="font-medium mb-3">Key Applications</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {product.applications.map((app, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                            <span className="text-sm">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </TabsContent>

              <TabsContent value="technical" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-card-title font-semibold mb-4">Technical Specifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.properties).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-card-border/50">
                        <span className="font-medium capitalize">{key.replace('_', ' ')}</span>
                        <span className="text-muted-foreground">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-background-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Technical specifications may vary slightly depending on production batch. 
                      Please contact us for detailed technical data sheets and certificates of analysis.
                    </p>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="availability" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-card-title font-semibold mb-4 flex items-center gap-2">
                    <Truck className="h-5 w-5 text-brand-primary" />
                    Availability & Packaging
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-background-muted rounded-lg">
                        <div className="text-2xl font-bold text-brand-primary mb-2">In Stock</div>
                        <div className="text-sm text-muted-foreground">Available for immediate delivery</div>
                      </div>
                      <div className="text-center p-4 bg-background-muted rounded-lg">
                        <div className="text-2xl font-bold text-brand-primary mb-2">25 MT</div>
                        <div className="text-sm text-muted-foreground">Minimum order quantity</div>
                      </div>
                      <div className="text-center p-4 bg-background-muted rounded-lg">
                        <div className="text-2xl font-bold text-brand-primary mb-2">25kg Bags</div>
                        <div className="text-sm text-muted-foreground">Standard packaging</div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-brand-primary/5 rounded-lg">
                      <h3 className="font-medium mb-2">Available Packaging Options</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 25kg PE bags on pallets</li>
                        <li>• 1000kg jumbo bags</li>
                        <li>• Bulk container options available</li>
                        <li>• Custom packaging upon request</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="downloads" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-card-title font-semibold mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-brand-primary" />
                    Downloads
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="brand-outline" className="h-auto p-4 justify-start">
                      <div className="flex items-center gap-3">
                        <Download className="h-6 w-6" />
                        <div className="text-left">
                          <div className="font-medium">Technical Data Sheet</div>
                          <div className="text-xs text-muted-foreground">PDF • 125 KB</div>
                        </div>
                      </div>
                    </Button>
                    
                    <Button variant="brand-outline" className="h-auto p-4 justify-start">
                      <div className="flex items-center gap-3">
                        <Download className="h-6 w-6" />
                        <div className="text-left">
                          <div className="font-medium">Safety Data Sheet</div>
                          <div className="text-xs text-muted-foreground">PDF • 89 KB</div>
                        </div>
                      </div>
                    </Button>
                    
                    <Button variant="brand-outline" className="h-auto p-4 justify-start">
                      <div className="flex items-center gap-3">
                        <Download className="h-6 w-6" />
                        <div className="text-left">
                          <div className="font-medium">Certificate of Analysis</div>
                          <div className="text-xs text-muted-foreground">PDF • 67 KB</div>
                        </div>
                      </div>
                    </Button>
                    
                    <Button variant="brand-outline" className="h-auto p-4 justify-start">
                      <div className="flex items-center gap-3">
                        <Download className="h-6 w-6" />
                        <div className="text-left">
                          <div className="font-medium">Processing Guide</div>
                          <div className="text-xs text-muted-foreground">PDF • 234 KB</div>
                        </div>
                      </div>
                    </Button>
                  </div>
                  
                  <div className="mt-6 p-4 bg-background-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Need additional documentation? <Link to="/contact" className="text-brand-primary hover:text-brand-accent">Contact our team</Link> for custom reports or specific certifications.
                    </p>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-card-title font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="brand" className="w-full" size="lg" asChild>
                  <Link to="/rfq">Request Quote</Link>
                </Button>
                <Button variant="brand-outline" className="w-full" asChild>
                  <Link to="/contact">Ask Questions</Link>
                </Button>
                <Button variant="ghost" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Download Datasheet
                </Button>
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="p-6">
              <h3 className="text-card-title font-semibold mb-4">Need Help?</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-medium mb-1">Technical Support</div>
                  <div className="text-muted-foreground">Get expert advice on product applications</div>
                </div>
                <div>
                  <div className="font-medium mb-1">Pricing & Availability</div>
                  <div className="text-muted-foreground">Real-time pricing and stock updates</div>
                </div>
                <div>
                  <div className="font-medium mb-1">Custom Solutions</div>
                  <div className="text-muted-foreground">Modified grades and special requirements</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-section text-foreground mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  code={relatedProduct.code}
                  name={relatedProduct.name}
                  family={relatedProduct.family}
                  gradeType={relatedProduct.grade_type}
                  description={relatedProduct.short_description || relatedProduct.description}
                  applications={relatedProduct.applications}
                  href={`/product/${relatedProduct.id}`}
                  isFeatured={relatedProduct.is_featured}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;