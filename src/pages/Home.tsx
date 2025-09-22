import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users, Award, TrendingUp, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/PropertyCard";
import heroImage from "@/assets/hero-property.jpg";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";

const Home = () => {
  // Sample featured properties
  const featuredProperties = [
    {
      id: "1",
      title: "Luxury 3BHK Apartment in Sector 22",
      price: 12500000,
      location: "Sector 22, Chandigarh",
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 2,
      area: 1450,
      image: property1,
      status: "sale" as const,
      featured: true,
    },
    {
      id: "2", 
      title: "Beautiful Villa with Garden",
      price: 35000000,
      location: "Mohali, Punjab",
      type: "Villa",
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      image: property2,
      status: "sale" as const,
      featured: true,
    },
    {
      id: "3",
      title: "Modern Office Space",
      price: 85000,
      location: "Sector 17, Chandigarh",
      type: "Commercial",
      bedrooms: 0,
      bathrooms: 2,
      area: 1200,
      image: property3,
      status: "rent" as const,
      featured: true,
    },
  ];

  const benefits = [
    {
      icon: MapPin,
      title: "Prime Locations",
      description: "Access to the best properties in Chandigarh and surrounding areas",
    },
    {
      icon: Users,
      title: "Expert Guidance", 
      description: "Professional assistance from experienced real estate consultants",
    },
    {
      icon: Award,
      title: "Trusted Service",
      description: "Years of experience with hundreds of satisfied customers",
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Stay updated with latest market trends and property values",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury property in Chandigarh"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent">
              Dream Home
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-light max-w-2xl mx-auto">
            Discover premium properties in Chandigarh with expert guidance and personalized service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Browse Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/list-property">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                List Your Property
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose PropertyHub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner in finding the perfect property in Chandigarh and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/properties">
              <Button size="lg">
                View All Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto">
            Get started today with our expert team. Whether buying, selling, or renting, 
            we're here to make your real estate journey seamless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Today
              </Button>
            </Link>
            <Link to="/list-property">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Mail className="mr-2 h-5 w-5" />
                List Your Property
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;