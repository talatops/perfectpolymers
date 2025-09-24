import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/CategoryCard";
import ProductCard from "@/components/ui/ProductCard";
import { categories, subcategories, allProducts } from "@/data/mockData";

const Categories = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory?: string }>();
  
  // Find the main category
  const mainCategory = categories.find(cat => cat.slug === category);
  
  // Find subcategory if specified
  const currentSubcategory = subcategory 
    ? subcategories.find(sub => sub.slug === subcategory && sub.parent_id === mainCategory?.id)
    : null;

  // Get relevant subcategories
  const relevantSubcategories = mainCategory 
    ? subcategories.filter(sub => sub.parent_id === mainCategory.id && sub.is_active)
    : [];

  // Filter products based on category/subcategory
  const filteredProducts = allProducts.filter(product => {
    if (currentSubcategory) {
      // If we're in a subcategory, filter by specific criteria
      // This is a simple implementation - in real app, you'd have product-category relationships
      return product.family.toLowerCase().includes(currentSubcategory.name.toLowerCase().split(' ')[0]) ||
             product.code.toLowerCase().includes(currentSubcategory.slug);
    } else if (mainCategory) {
      // Filter by main category
      switch (mainCategory.slug) {
        case 'polymers':
          return ['PP', 'HDPE', 'LDPE', 'LLDPE', 'PVC', 'PS', 'PET', 'ABS', 'PC'].some(family => 
            product.family.includes(family)
          );
        case 'chemicals':
          return product.family.toLowerCase().includes('chemical');
        case 'agro':
          return product.family.toLowerCase().includes('agro');
        case 'recycled':
          return product.grade_type === 'Recycled';
        default:
          return true;
      }
    }
    return true;
  }).filter(p => p.is_active);

  if (!mainCategory) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-semibold mb-2">Category Not Found</h1>
          <p className="text-muted-foreground mb-6">The category you're looking for doesn't exist.</p>
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

  const displayCategory = currentSubcategory || mainCategory;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: mainCategory.name, href: `/products/${mainCategory.slug}` },
  ];
  
  if (currentSubcategory) {
    breadcrumbItems.push({ 
      label: currentSubcategory.name, 
      href: `/products/${mainCategory.slug}/${currentSubcategory.slug}` 
    });
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-background-muted py-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            {breadcrumbItems.map((item, index) => (
              <span key={item.href} className="flex items-center gap-2">
                {index > 0 && <span>/</span>}
                {index === breadcrumbItems.length - 1 ? (
                  <span className="text-foreground font-medium">{item.label}</span>
                ) : (
                  <Link to={item.href} className="hover:text-brand-primary transition-colors">
                    {item.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container-custom">
          <div className="text-center space-y-4">
            <h1 className="text-hero">{displayCategory.name}</h1>
            <p className="text-body-large text-white/90 max-w-3xl mx-auto">
              {displayCategory.description}
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link to={currentSubcategory ? `/products/${mainCategory.slug}` : "/products"}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              {currentSubcategory ? `Back to ${mainCategory.name}` : "Back to Products"}
            </Link>
          </Button>
        </div>

        {/* Subcategories (only show if we're in main category view) */}
        {!currentSubcategory && relevantSubcategories.length > 0 && (
          <section className="mb-16">
            <h2 className="text-section text-foreground mb-8">
              {mainCategory.name} Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relevantSubcategories.map((sub) => (
                <CategoryCard
                  key={sub.id}
                  title={sub.name}
                  description={sub.description}
                  href={`/products/${mainCategory.slug}/${sub.slug}`}
                  productCount={Math.floor(Math.random() * 30) + 10}
                />
              ))}
            </div>
          </section>
        )}

        {/* Products */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-section text-foreground">
                {currentSubcategory ? `${currentSubcategory.name} Products` : `${mainCategory.name} Products`}
              </h2>
              <p className="text-muted-foreground mt-2">
                {filteredProducts.length} products available
              </p>
            </div>
            <Button variant="brand-outline" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  code={product.code}
                  name={product.name}
                  family={product.family}
                  gradeType={product.grade_type}
                  description={product.short_description || product.description}
                  applications={product.applications}
                  href={`/product/${product.id}`}
                  isFeatured={product.is_featured}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Products Found</h3>
              <p className="text-muted-foreground mb-6">
                We don't have any products in this category yet, but our catalog is constantly expanding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="brand" asChild>
                  <Link to="/contact">Contact Us for Inquiries</Link>
                </Button>
                <Button variant="brand-outline" asChild>
                  <Link to="/products">Browse All Products</Link>
                </Button>
              </div>
            </div>
          )}
        </section>

        {/* Additional Information */}
        {currentSubcategory && (
          <section className="mt-16 bg-gradient-card p-8 rounded-2xl">
            <h3 className="text-card-title font-semibold mb-4">
              About {currentSubcategory.name}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">Key Properties</h4>
                <ul className="space-y-1">
                  {currentSubcategory.slug.includes('polyethylene') && (
                    <>
                      <li>• Semi-rigid material</li>
                      <li>• Sinks in water</li>
                      <li>• Excellent moisture resistance</li>
                      <li>• Low gas permeability</li>
                    </>
                  )}
                  {currentSubcategory.slug.includes('polypropylene') && (
                    <>
                      <li>• Semi-rigid with low gloss</li>
                      <li>• Heat and chemical resistant</li>
                      <li>• Grease and oil resistant</li>
                      <li>• Good moisture barrier</li>
                    </>
                  )}
                  {currentSubcategory.slug.includes('pvc') && (
                    <>
                      <li>• Semi-rigid, glossy finish</li>
                      <li>• Sinks in water</li>
                      <li>• Good chemical resistance</li>
                      <li>• Flame retardant properties</li>
                    </>
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Common Applications</h4>
                <p className="leading-relaxed">
                  These materials are widely used in packaging, automotive parts, 
                  construction materials, consumer goods, and industrial applications 
                  where specific performance characteristics are required.
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Categories;