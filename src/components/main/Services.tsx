
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Hammer, HardHat, Truck, CheckCircle } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Large-scale commercial buildings, offices, and retail spaces with modern design and functionality.",
      items: ["Office Buildings", "Shopping Centers", "Warehouses", "Hotels"],
    },
    {
      icon: HardHat,
      title: "Residential Construction",
      description:
        "Custom homes and residential developments built with quality craftsmanship and attention to detail.",
      items: ["Custom Homes", "Renovations", "Apartments", "Condominiums"],
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our expert renovation and remodeling services.",
      items: ["Kitchen Remodeling", "Bathroom Renovation", "Home Extensions", "Interior Design"],
    },
    {
      icon: Truck,
      title: "Infrastructure",
      description: "Essential infrastructure projects including roads, bridges, and utility systems.",
      items: ["Road Construction", "Bridge Building", "Utility Installation", "Site Preparation"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">Our Services</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Construction Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full range of construction services to meet all your building needs, from residential homes to
            large commercial projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-fit group-hover:bg-orange-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">{service.description}</CardDescription>
                <div className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
