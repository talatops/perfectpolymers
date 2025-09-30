import { Link } from "react-router-dom";
import { ArrowRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  productCount?: number;
}

const CategoryCard = ({ title, description, href, icon, productCount }: CategoryCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-card-border card-hover p-6 h-full">
      <div className="flex flex-col h-full">
        {/* Icon */}
        <div className="mb-4">
          <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
            {icon || <Package className="h-6 w-6 text-brand-primary" />}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-card-title text-card-foreground mb-3 group-hover:text-brand-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
          {productCount && (
            <p className="text-xs text-muted-foreground mb-4">
              {productCount} products available
            </p>
          )}
        </div>

        {/* CTA */}
        {/* Removed CTA button, arrow, and link as per user request */}
      </div>
    </Card>
  );
};

export default CategoryCard;