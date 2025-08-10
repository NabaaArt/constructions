
import { Badge } from "@/components/ui/badge"
import { Users, Award } from "lucide-react"
import image2 from "@/assets/hero-construction.jpg"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">About BuildCraft Pro</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Building Excellence Since 1998</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For over 25 years, BuildCraft Pro has been at the forefront of the construction industry, delivering
                exceptional projects that stand the test of time. Our commitment to quality, safety, and innovation has
                made us a trusted partner for clients across residential, commercial, and infrastructure sectors.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every project is an opportunity to exceed expectations and create lasting value for our
                clients and communities. Our team of skilled professionals brings decades of combined experience to
                every project.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-gray-600">Expert Team Members</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Industry Awards</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <img
              src={image2}
              alt="Our Team"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -top-6 -right-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
