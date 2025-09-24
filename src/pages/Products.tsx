import { useState, useMemo } from "react";
import { Search, Filter, Grid, List, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import ProductCard from "@/components/ui/ProductCard";
import { allProducts, categories, subcategories } from "@/data/mockData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedFamilies, setSelectedFamilies] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const grades = ["Prime", "Off Spec", "Off Grade", "Recycled"];
  const families = [...new Set(allProducts.map(p => p.family))].sort();

  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      const matchesSearch = product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (product.name?.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          product.family.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesGrade = selectedGrades.length === 0 || selectedGrades.includes(product.grade_type);
      const matchesFamily = selectedFamilies.length === 0 || selectedFamilies.includes(product.family);
      
      return matchesSearch && matchesGrade && matchesFamily && product.is_active;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.code.localeCompare(b.code);
        case "family":
          return a.family.localeCompare(b.family);
        case "grade":
          return a.grade_type.localeCompare(b.grade_type);
        case "newest":
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedGrades, selectedFamilies, sortBy]);

  const handleGradeToggle = (grade: string) => {
    setSelectedGrades(prev => 
      prev.includes(grade) 
        ? prev.filter(g => g !== grade)
        : [...prev, grade]
    );
  };

  const handleFamilyToggle = (family: string) => {
    setSelectedFamilies(prev => 
      prev.includes(family) 
        ? prev.filter(f => f !== family)
        : [...prev, family]
    );
  };

  const clearFilters = () => {
    setSelectedGrades([]);
    setSelectedFamilies([]);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container-custom">
          <div className="text-center space-y-4">
            <h1 className="text-hero">Our Products</h1>
            <p className="text-body-large text-white/90 max-w-3xl mx-auto">
              Discover our comprehensive catalog of high-quality polymers, chemicals, and sustainable materials 
              from trusted global manufacturers.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card className="p-6 sticky top-24">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-card-title font-semibold">Filters</h3>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear All
                  </Button>
                </div>

                {/* Search */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search Products</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by code or family..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Grade Type Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Grade Type</label>
                  <div className="space-y-2">
                    {grades.map((grade) => (
                      <div key={grade} className="flex items-center space-x-2">
                        <Checkbox
                          id={`grade-${grade}`}
                          checked={selectedGrades.includes(grade)}
                          onCheckedChange={() => handleGradeToggle(grade)}
                        />
                        <label
                          htmlFor={`grade-${grade}`}
                          className="text-sm cursor-pointer"
                        >
                          {grade}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Polymer Family Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Polymer Family</label>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {families.map((family) => (
                      <div key={family} className="flex items-center space-x-2">
                        <Checkbox
                          id={`family-${family}`}
                          checked={selectedFamilies.includes(family)}
                          onCheckedChange={() => handleFamilyToggle(family)}
                        />
                        <label
                          htmlFor={`family-${family}`}
                          className="text-sm cursor-pointer"
                        >
                          {family}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <div className="text-sm text-muted-foreground">
                  {filteredProducts.length} products found
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                    <SelectItem value="family">Polymer Family</SelectItem>
                    <SelectItem value="grade">Grade Type</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedGrades.length > 0 || selectedFamilies.length > 0) && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {selectedGrades.map((grade) => (
                    <Badge key={grade} variant="secondary" className="cursor-pointer" onClick={() => handleGradeToggle(grade)}>
                      {grade} ✕
                    </Badge>
                  ))}
                  {selectedFamilies.map((family) => (
                    <Badge key={family} variant="secondary" className="cursor-pointer" onClick={() => handleFamilyToggle(family)}>
                      {family} ✕
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className={viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-4"
              }>
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
                <div className="text-muted-foreground mb-4">
                  <Package className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No products found</h3>
                  <p>Try adjusting your search criteria or filters.</p>
                </div>
                <Button variant="brand-outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;