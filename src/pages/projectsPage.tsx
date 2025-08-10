
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import imgae1 from "@/assets/hero-construction.jpg"
import imgae2 from "@/assets/apartment-complex.jpg"
import imgae3 from "@/assets/bridge-construction.jpg"
import imgae4 from "@/assets/construction-team.jpg"
import imgae5 from "@/assets/kitchen-renovation.jpg"
import imgae6 from "@/assets/luxury-estate.jpg"

import imgae9 from "@/assets/road-construction.jpg"


import { Search, Filter, Star, Calendar, DollarSign } from "lucide-react"



export default function ProjectsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")

    const projects = [
        {
            id: 1,
            title: "Downtown Office Complex",
            category: "Commercial",
            description: "A modern 15-story office building with sustainable design features and smart building technology.",
            image: imgae1,
            status: "Completed",
            price: "$2.5M",
            duration: "18 months",
            completedDate: "2023",
            rating: 5,
        },
        {
            id: 2,
            title: "Luxury Residential Estate",
            category: "Residential",
            description: "Premium residential development with 50 luxury homes and world-class amenities.",
            image: imgae2,
            status: "In Progress",
            price: "$5.2M",
            duration: "24 months",
            completedDate: "2024",
            rating: 5,
        },
        {
            id: 3,
            title: "Modern Kitchen Renovation",
            category: "Renovation",
            description: "Complete kitchen transformation with high-end appliances and contemporary design.",
            image: imgae3,
            status: "Completed",
            price: "$85K",
            duration: "3 months",
            completedDate: "2023",
            rating: 5,
        },
        {
            id: 4,
            title: "City Bridge Infrastructure",
            category: "Infrastructure",
            description: "Complete renovation of historic city bridge with modern safety features and enhanced capacity.",
            image: imgae4,
            status: "Completed",
            price: "$1.8M",
            duration: "12 months",
            completedDate: "2022",
            rating: 5,
        },
        {
            id: 5,
            title: "Industrial Warehouse Complex",
            category: "Commercial",
            description: "Large-scale warehouse facility with automated systems and sustainable energy solutions.",
            image: imgae5,
            status: "Completed",
            price: "$3.2M",
            duration: "15 months",
            completedDate: "2023",
            rating: 5,
        },
        {
            id: 6,
            title: "Apartment Complex Development",
            category: "Residential",
            description: "Modern apartment complex with 120 units and community amenities.",
            image: imgae6,
            status: "In Progress",
            price: "$4.5M",
            duration: "20 months",
            completedDate: "2024",
            rating: 5,
        },
        {
            id: 7,
            title: "Highway Construction Project",
            category: "Infrastructure",
            description: "New highway construction with advanced traffic management systems.",
            image: imgae9,
            status: "Completed",
            price: "$8.5M",
            duration: "30 months",
            completedDate: "2023",
            rating: 5,
        },
    ]

    const categories = ["All", "Commercial", "Residential", "Renovation", "Infrastructure"]

    const filteredProjects = projects.filter((project) => {
        const matchesSearch =
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen bg-gray-100">

            <div className="pt-24 pb-20">
                <div className="container mx-auto px-4">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Our Projects</Badge>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Construction Projects Portfolio</h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore our comprehensive portfolio of construction projects across various categories and industries.
                        </p>
                    </div>

                    {/* Search and Filter Section */}
                    <div className="mb-12  p-6 rounded-xl bg-white">
                        <div className="flex flex-col md:flex-row gap-4 items-center">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input
                                    placeholder="Search projects..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <Filter className="h-5 w-5 text-gray-400" />
                                <div className="flex gap-2">
                                    {categories.map((category) => (
                                        <Button
                                            key={category}
                                            variant={selectedCategory === category ? "default" : "outline"}
                                            size="sm"
                                            onClick={() => setSelectedCategory(category)}
                                            className={selectedCategory === category ? "bg-orange-600 hover:bg-orange-700" : ""}
                                        >
                                            {category}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <Card
                                key={project.id}
                                className="group shadow-none border-none overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up p-0"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500 m-0"
                                    />

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
                                            {[...Array(project.rating)].map((_, i) => (
                                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                        {project.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-600 leading-relaxed mb-4">
                                        {project.description}
                                    </CardDescription>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <div className="flex items-center space-x-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>Duration: {project.duration}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <DollarSign className="h-4 w-4" />
                                                <span>{project.price}</span>
                                            </div>
                                        </div>
                                        <div className="flex pb-5 items-center justify-between text-sm text-gray-500">
                                            <span>Completed: {project.completedDate}</span>
                                            <span>#{project.id.toString().padStart(3, "0")}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
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
