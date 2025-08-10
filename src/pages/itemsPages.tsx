import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Star, Calendar } from "lucide-react"
import imgae5 from "@/assets/kitchen-renovation.jpg"
import imgae6 from "@/assets/luxury-estate.jpg"
import imgae7 from "@/assets/office-building.jpg"
import imgae8 from "@/assets/residential-home.jpg"
import imgae9 from "@/assets/road-construction.jpg"

export default function ItemsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const constructionItems = [
    {
      id: 1,
      title: "Concrete Mix",
      category: "Materials",
      description: "High-quality ready-mix concrete for foundations and structures.",
      image: imgae5,
      status: "Available",
      price: "$120 per cubic meter",
      deliveryTime: "2 days",
      rating: 4,
    },
    {
      id: 2,
      title: "Steel Beams",
      category: "Materials",
      description: "Durable steel beams suitable for commercial building frameworks.",
      image: imgae6,
      status: "Out of Stock",
      price: "$1,200 per ton",
      deliveryTime: "1 week",
      rating: 5,
    },
    {
      id: 3,
      title: "Excavator Rental",
      category: "Equipment",
      description: "Heavy-duty excavator available for short or long-term rental.",
      image: imgae7,
      status: "Available",
      price: "$500 per day",
      deliveryTime: "Immediate",
      rating: 5,
    },
    {
      id: 4,
      title: "Safety Helmets",
      category: "Safety Gear",
      description: "Certified safety helmets to protect workers onsite.",
      image: imgae8,
      status: "Available",
      price: "$25 each",
      deliveryTime: "3 days",
      rating: 4,
    },
    {
      id: 5,
      title: "Cement Bags",
      category: "Materials",
      description: "50kg cement bags for general construction use.",
      image: imgae9,
      status: "Available",
      price: "$8 per bag",
      deliveryTime: "2 days",
      rating: 4,
    },
  ]

  const categories = ["All", "Materials", "Equipment", "Safety Gear"]

  const filteredItems = constructionItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Construction Items</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Construction Items Catalog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our selection of construction materials, equipment, and safety gear available for your projects.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-12 bg-white p-6 rounded-xl ">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className=" items-center gap-2">
                <div className="flex gap-2  ">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="group shadow-none  border-none overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up p-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={item.status === "Available" ? "bg-green-500" : "bg-red-500"}>
                      {item.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="bg-white/90 text-gray-900 border-white whitespace-nowrap">
                      {item.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-orange-600 border-orange-600">
                      {item.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </CardDescription>
                  <div className="space-y-2 pb-5 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Delivery Time: {item.deliveryTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: `
        <style>
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
            opacity: 0;
          }
        </style>
      `,
        }}
      />
    </div>
  )
}
