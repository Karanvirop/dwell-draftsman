import { useState, useMemo } from "react";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import { Button } from "@/components/ui/button";
import { Grid, List } from "lucide-react";
import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";

interface Filters {
  search: string;
  type: string;
  status: string;
  location: string;
  minPrice: string;
  maxPrice: string;
  bedrooms: string;
}

const Properties = () => {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    type: "",
    status: "",
    location: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
  });
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Sample properties data (in a real app, this would come from an API)
  const allProperties = [
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
    },
    {
      id: "4",
      title: "Spacious 2BHK in Sector 35",
      price: 8500000,
      location: "Sector 35, Chandigarh",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      area: 1100,
      image: property1,
      status: "sale" as const,
    },
    {
      id: "5",
      title: "Independent House in Panchkula",
      price: 18500000,
      location: "Panchkula, Haryana",
      type: "Independent House",
      bedrooms: 3,
      bathrooms: 3,
      area: 1800,
      image: property2,
      status: "sale" as const,
    },
    {
      id: "6",
      title: "Commercial Plot in Zirakpur",
      price: 45000000,
      location: "Zirakpur, Punjab",
      type: "Plot",
      bedrooms: 0,
      bathrooms: 0,
      area: 5000,
      image: property3,
      status: "sale" as const,
    },
    {
      id: "7",
      title: "Furnished 1BHK Apartment",
      price: 25000,
      location: "Sector 22, Chandigarh",
      type: "Apartment",
      bedrooms: 1,
      bathrooms: 1,
      area: 650,
      image: property1,
      status: "rent" as const,
    },
    {
      id: "8",
      title: "Luxury 4BHK Penthouse",
      price: 55000000,
      location: "Mohali, Punjab",
      type: "Apartment",
      bedrooms: 4,
      bathrooms: 4,
      area: 3200,
      image: property2,
      status: "sale" as const,
      featured: true,
    },
  ];

  // Filter properties based on current filters
  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch = 
          property.title.toLowerCase().includes(searchLower) ||
          property.location.toLowerCase().includes(searchLower) ||
          property.type.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Type filter
      if (filters.type && property.type !== filters.type) {
        return false;
      }

      // Status filter
      if (filters.status && property.status !== filters.status) {
        return false;
      }

      // Location filter
      if (filters.location && !property.location.includes(filters.location)) {
        return false;
      }

      // Bedrooms filter
      if (filters.bedrooms) {
        const bedroomCount = parseInt(filters.bedrooms);
        if (bedroomCount === 4 && property.bedrooms < 4) {
          return false;
        } else if (bedroomCount !== 4 && property.bedrooms !== bedroomCount) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Properties in Chandigarh
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover {filteredProperties.length} properties that match your preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <SearchFilters onFiltersChange={setFilters} />
          </div>

          {/* Properties Grid */}
          <div className="lg:col-span-3">
            {/* View Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                Showing {filteredProperties.length} properties
              </div>
            </div>

            {/* Properties List */}
            {filteredProperties.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === "grid" 
                  ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                  : "grid-cols-1"
              }`}>
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters to see more results
                </p>
                <Button onClick={() => setFilters({
                  search: "",
                  type: "",
                  status: "",
                  location: "",
                  minPrice: "",
                  maxPrice: "",
                  bedrooms: "",
                })}>
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;