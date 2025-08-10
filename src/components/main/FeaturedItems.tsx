
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star } from "lucide-react"
import { Link } from "react-router-dom"

export default function FeaturedItems() {
  const featuredProjects = [
    {
      id: 1,
      title: "Downtown Office Complex",
      category: "Commercial",
      description: "A modern 15-story office building with sustainable design features and smart building technology.",
      image: "/images/office-building.jpg",
      status: "Completed",
      price: "$2.5M",
      duration: "18 months",
    },
    {
      id: 2,
      title: "Luxury Residential Estate",
      category: "Residential",
      description: "Premium residential development with 50 luxury homes and world-class amenities.",
      image: "/images/luxury-estate.jpg",
      status: "In Progress",
      price: "$5.2M",
      duration: "24 months",
    },
    {
      id: 3,
      title: "Modern Kitchen Renovation",
      category: "Renovation",
      description: "Complete kitchen transformation with high-end appliances and contemporary design.",
      image: "/images/kitchen-renovation.jpg",
      status: "Completed",
      price: "$85K",
      duration: "3 months",
    },
  ]

  return (
    <section id="items" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Featured Projects</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Latest Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover some of our most successful projects that showcase our expertise and commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={project.status === "Completed" ? "bg-green-500" : "bg-blue-500"}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="bg-white/90 text-gray-900 border-white">
                    {project.price}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    {project.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed mb-4">{project.description}</CardDescription>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Duration: {project.duration}</span>
                  <span>#{project.id.toString().padStart(3, "0")}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/items">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg group">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
