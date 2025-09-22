import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Bed, Bath, Square, Phone, Mail, Share2, Heart, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";

const PropertyDetail = () => {
  const { id } = useParams();

  // Sample property data (in a real app, this would be fetched based on the ID)
  const property = {
    id: "1",
    title: "Luxury 3BHK Apartment in Sector 22",
    price: 12500000,
    location: "Sector 22, Chandigarh",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: 1450,
    images: [property1, property2, property3],
    status: "sale" as "sale" | "rent",
    featured: true,
    description: "This stunning 3BHK apartment offers modern living at its finest. Located in the prestigious Sector 22 of Chandigarh, this property features spacious rooms, contemporary fixtures, and premium finishes throughout. Perfect for families looking for comfort and convenience in the heart of the city.",
    amenities: [
      "Covered Parking",
      "24/7 Security", 
      "Swimming Pool",
      "Gymnasium",
      "Children's Play Area",
      "Landscaped Gardens",
      "Power Backup",
      "Lift",
      "Club House",
      "Intercom Facility"
    ],
    features: [
      { label: "Built-up Area", value: "1,450 sq ft" },
      { label: "Carpet Area", value: "1,200 sq ft" },
      { label: "Floor", value: "5th of 12 floors" },
      { label: "Facing", value: "East" },
      { label: "Furnished Status", value: "Semi-furnished" },
      { label: "Age of Property", value: "2 years" },
      { label: "Total Floors", value: "12" },
      { label: "Overlooking", value: "Garden" }
    ],
    agent: {
      name: "Rajesh Kumar",
      phone: "+91 98765 43210",
      email: "rajesh@propertyhub.com",
      experience: "8 years"
    },
    postedDate: "2024-01-15"
  };

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} L`;
    } else {
      return `₹${price.toLocaleString()}`;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/properties">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Properties
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-card rounded-xl overflow-hidden shadow-card">
              <div className="aspect-video relative">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
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
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="sm" variant="secondary" className="bg-card/90">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-card/90">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {property.images.length > 1 && (
                <div className="p-4 grid grid-cols-3 gap-2">
                  {property.images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-video rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`Property view ${index + 2}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="bg-card rounded-xl p-6 shadow-card">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                  {property.title}
                </h1>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{property.location}</span>
                </div>
                <div className="text-3xl font-bold text-primary">
                  {formatPrice(property.price)}
                  {property.status === "rent" && (
                    <span className="text-lg text-muted-foreground font-normal">/month</span>
                  )}
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Bed className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-lg font-semibold">{property.bedrooms}</div>
                  <div className="text-sm text-muted-foreground">Bedrooms</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Bath className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-lg font-semibold">{property.bathrooms}</div>
                  <div className="text-sm text-muted-foreground">Bathrooms</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Square className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-lg font-semibold">{property.area}</div>
                  <div className="text-sm text-muted-foreground">sq ft</div>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-lg font-semibold">{property.type}</div>
                  <div className="text-sm text-muted-foreground">Type</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Property Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-border last:border-b-0">
                      <span className="text-muted-foreground">{feature.label}</span>
                      <span className="font-medium">{feature.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Agent */}
            <div className="bg-card rounded-xl p-6 shadow-card mb-6 sticky top-8">
              <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">{property.agent.name}</div>
                  <div className="text-sm text-muted-foreground">{property.agent.experience} experience</div>
                </div>
              </div>

              <Separator className="mb-4" />

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{property.agent.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{property.agent.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Posted on {formatDate(property.postedDate)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Button className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Agent
                </Button>
                <Button variant="outline" className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>

              <div className="mt-4 p-3 bg-muted/50 rounded-lg text-center">
                <div className="text-sm text-muted-foreground">Interested in this property?</div>
                <Link to="/contact">
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Schedule a viewing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;