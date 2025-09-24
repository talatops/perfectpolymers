import { Link } from "react-router-dom";
import { Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  code: string;
  name?: string;
  family: string;
  gradeType: "Prime" | "Off Spec" | "Off Grade" | "Recycled";
  description?: string;
  applications?: string[];
  href: string;
  isFeatured?: boolean;
}

const ProductCard = ({ 
  code, 
  name, 
  family, 
  gradeType, 
  description, 
  applications,
  href, 
  isFeatured = false 
}: ProductCardProps) => {
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
    <Card className="group relative overflow-hidden bg-gradient-card border-card-border card-hover h-full">
      {isFeatured && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-brand-accent text-brand-accent-foreground text-xs">
            Featured
          </Badge>
        </div>
      )}

      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="text-card-title text-card-foreground font-bold group-hover:text-brand-primary transition-colors">
                {code}
              </h3>
              {name && (
                <p className="text-sm text-muted-foreground mt-1">{name}</p>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className="text-xs">
              {family}
            </Badge>
            <Badge className={`text-xs border ${getGradeColor(gradeType)}`}>
              {gradeType}
            </Badge>
          </div>
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
            {description}
          </p>
        )}

        {/* Applications */}
        {applications && applications.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-medium text-muted-foreground mb-2">Applications:</h4>
            <div className="flex flex-wrap gap-1">
              {applications.slice(0, 3).map((app, index) => (
                <span 
                  key={index}
                  className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                >
                  {app}
                </span>
              ))}
              {applications.length > 3 && (
                <span className="text-xs text-muted-foreground px-2 py-1">
                  +{applications.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2 pt-4 border-t border-card-border/50 mt-auto">
          <Button variant="brand-outline" size="sm" className="flex-1" asChild>
            <Link to={href}>
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Link>
          </Button>
          <Button variant="ghost" size="sm">
            <FileText className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;