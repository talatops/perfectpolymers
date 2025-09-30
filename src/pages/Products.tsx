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

const staticProducts = [
  {
    name: "Polyethylene (PE)",
    image: "/plastic-raw-1024x673.jpeg",
    description: "Widely used for packaging, films, and containers."
  },
  {
    name: "Polypropylene (PP)",
    image: "/plastic-raw-materail-500x500.webp",
    description: "Versatile plastic for automotive, textiles, and packaging."
  },
  {
    name: "Polyvinyl Chloride (PVC)",
    image: "/plastik1.jpeg",
    description: "Common in pipes, profiles, and construction materials."
  },
  {
    name: "Polystyrene (PS)",
    image: "/unnamed.jpg",
    description: "Used for disposable cutlery, containers, and insulation."
  },
  {
    name: "Polyethylene Terephthalate (PET)",
    image: "/plastic-raw-1024x673.jpeg",
    description: "Bottles, food packaging, and synthetic fibers."
  },
  {
    name: "Acrylonitrile Butadiene Styrene (ABS)",
    image: "/plastic-raw-materail-500x500.webp",
    description: "Durable plastic for automotive and consumer goods."
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container-custom">
          <div className="text-center space-y-4">
            <h1 className="text-hero">Our Products</h1>
            <p className="text-body-large text-white/90 max-w-3xl mx-auto">
              Explore our range of general polymer products. For more details, contact our team.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staticProducts.map((product) => (
            <Card key={product.name} className="p-6 flex flex-col items-center text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-contain mb-4 rounded shadow"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-muted-foreground text-sm">{product.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;