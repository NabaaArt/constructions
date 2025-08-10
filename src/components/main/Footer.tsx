
import { Building2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold">BuildCraft Pro</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building excellence since 1998. Your trusted partner for all construction needs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-gray-400">
              <div>Commercial Construction</div>
              <div>Residential Construction</div>
              <div>Renovation & Remodeling</div>
              <div>Infrastructure</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-gray-400">
              <div>About Us</div>
              <div>Our Projects</div>
              <div>Careers</div>
              <div>Safety</div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div>+1 (555) 123-4567</div>
              <div>info@buildcraftpro.com</div>
              <div>123 Construction Ave</div>
              <div>Builder City, BC 12345</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BuildCraft Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
