
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { Building2, HardHat, Hammer, Truck, ArrowRight, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function CategoriesPage() {
  const categories = [
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Large-scale commercial buildings, offices, and retail spaces with modern design and functionality.",
      image: "/images/office-building.jpg",
      projects: 45,
      services: [
        "Office Buildings",
        "Shopping Centers",
        "Warehouses",
        "Hotels & Hospitality",
        "Retail Spaces",
        "Industrial Facilities",
      ],
      priceRange: "$500K - $10M+",
      duration: "6-36 months",
    },
    {
      icon: HardHat,
      title: "Residential Construction",
      description:
        "Custom homes and residential developments built with quality craftsmanship and attention to detail.",
      image: "/images/luxury-estate.jpg",
      projects: 78,
      services: ["Custom Homes", "Luxury Estates", "Apartments", "Condominiums", "Townhouses", "Senior Living"],
      priceRange: "$200K - $5M+",
      duration: "3-18 months",
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our expert renovation and remodeling services.",
      image: "/images/kitchen-renovation.jpg",
      projects: 156,
      services: [
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Home Extensions",
        "Interior Design",
        "Basement Finishing",
        "Whole Home Renovation",
      ],
      priceRange: "$25K - $500K",
      duration: "1-8 months",
    },
    {
      icon: Truck,
      title: "Infrastructure",
      description: "Essential infrastructure projects including roads, bridges, and utility systems.",
      image: "/images/bridge-construction.jpg",
      projects: 32,
      services: [
        "Road Construction",
        "Bridge Building",
        "Utility Installation",
        "Site Preparation",
        "Drainage Systems",
        "Public Works",
      ],
      priceRange: "$100K - $20M+",
      duration: "2-48 months",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Service Categories</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Construction Service Categories</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of construction services across different categories, each tailored to
              meet specific project requirements and industry standards.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="space-y-12">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-full min-h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6">
                      <div className="p-3 bg-orange-600 rounded-full">
                        <category.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6">
                      <Badge className="bg-white/90 text-gray-900">{category.projects} Projects Completed</Badge>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-3xl font-bold text-gray-900 mb-4">{category.title}</CardTitle>
                      <CardDescription className="text-lg text-gray-600 leading-relaxed">
                        {category.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Price Range</h4>
                          <p className="text-orange-600 font-medium">{category.priceRange}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                          <p className="text-orange-600 font-medium">{category.duration}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Services Included</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {category.services.map((service, serviceIndex) => (
                            <div key={serviceIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Link href="/items">
                          <Button className="bg-orange-600 hover:bg-orange-700 text-white group">
                            View {category.title} Projects
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center bg-white p-12 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              No matter which category your project falls into, our expert team is ready to deliver exceptional results
              that exceed your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/items">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 bg-transparent"
                >
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
