import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Square, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  status: "sale" | "rent";
  featured?: boolean;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} L`;
    } else {
      return `₹${price.toLocaleString()}`;
    }
  };

  return (
    <div className="bg-gradient-card rounded-xl shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge 
            variant={property.status === "sale" ? "default" : "secondary"}
            className="bg-primary/90 text-primary-foreground"
          >
            For {property.status === "sale" ? "Sale" : "Rent"}
          </Badge>
          {property.featured && (
            <Badge className="bg-accent text-accent-foreground">
              Featured
            </Badge>
          )}
        </div>
        <div className="absolute bottom-3 right-3">
          <div className="bg-card/95 px-3 py-1 rounded-lg">
            <span className="text-sm font-medium text-card-foreground">
              {property.type}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <div className="mb-3">
          <span className="text-2xl font-bold text-primary">
            {formatPrice(property.price)}
          </span>
          {property.status === "rent" && (
            <span className="text-muted-foreground ml-1">/month</span>
          )}
        </div>

        {/* Title & Location */}
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-foreground mb-1 line-clamp-1">
            {property.title}
          </h3>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="text-sm line-clamp-1">{property.location}</span>
          </div>
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{property.bedrooms} Bed</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{property.area} sq ft</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link to={`/property/${property.id}`} className="flex-1">
            <Button className="w-full" size="sm">
              View Details
            </Button>
          </Link>
          <Button variant="outline" size="sm" className="px-3">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="px-3">
            <Mail className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;