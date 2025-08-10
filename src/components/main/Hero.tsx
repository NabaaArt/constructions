
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award } from "lucide-react"
import { Link } from "react-router-dom"
 import image1 from "@/assets/construction-team.jpg"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="pt-20 w-full min-h-screen flex items-center bg-gradient-to-br from-orange-100 to-orange-400">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">25+ Years of Excellence</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Building Your
                <span className="text-orange-600 block">Dreams Into Reality</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From concept to completion, we deliver exceptional construction services with unmatched quality, safety,
                and innovation. Your vision, our expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg"
                onClick={() => scrollToSection("contact")}
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/items">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg bg-transparent w-full"
                >
                  View Projects
                </Button>
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <img
              src={image1}
              alt="Construction Site"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-orange-600" />
                <div>
                  <div className="font-semibold text-gray-900">Award Winning</div>
                  <div className="text-sm text-gray-600">Construction Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
