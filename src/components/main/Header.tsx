import { useEffect } from "react"
import { Building2, Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "../ui/button"

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Header({
  isMenuOpen,
  setIsMenuOpen,
  activeSection = "home",
  setActiveSection
}: HeaderProps) {
  const location = useLocation()
  const { pathname } = location

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/") return

      const sections = ["home", "services", "items", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname, setActiveSection])

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const isActive = (section: string) => {
    if (pathname === "/items" && section === "items") return true
    if (pathname === "/categories" && section === "categories") return true
    return activeSection === section
  }

  return (
    <header className=" bg-gray-900  shadow-sm fixed w-full z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-orange-600" />
          <span className="text-2xl  font-bold text-white">
            BuildCraft Pro
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className={`text-sm font-medium transition-colors duration-200 ${isActive("home")
              ? "text-orange-600"
              : "text-gray-600 hover:text-orange-600"
              }`}
          >
            Home
          </button>
          <Button
            variant={'secondary'}
            onClick={() => scrollToSection("services")}
            className={`text-sm font-medium  duration-200 ${isActive("services")
              ? "text-orange-600"
              : "text-gray-300 hover:text-orange-600"
              }`}
          >
            Services
          </Button>
          <Button
            variant={'secondary'}
          >
            <Link
              to="/items"
              className={`text-sm font-medium  duration-200 ${isActive("services")
                ? "text-orange-600"
                : "text-gray-300 hover:text-orange-600"
                }`}
            >
              <div className="text-gray-300">items</div>

            </Link>
          </Button>
          <Button
            variant={'secondary'}
          >
            <Link
              to="/projects"
              className={`text-sm font-medium  duration-200 ${isActive("services")
                ? "text-orange-600"
                : "text-gray-300 hover:text-orange-600"
                }`}
            >
              <div className="text-gray-300">Projects</div>
            </Link>
          </Button>
          <Button
            onClick={() => scrollToSection("about")}
            className={`text-sm font-medium transition-colors duration-200 ${isActive("about")
              ? "text-orange-600"
              : "text-gray-300 hover:text-orange-600"
              }`}
          >
            About
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            className={`text-sm font-medium transition-colors duration-200 ${isActive("contact")
              ? "text-orange-600"
              : "text-gray-300 hover:text-orange-600"
              }`}
          >
            Contact
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4 pt-4 px-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-left text-gray-600 hover:text-orange-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-left text-gray-600 hover:text-orange-600 transition-colors"
            >
              Services
            </button>
            <Link
              to="/items"
              className="text-left text-gray-600 hover:text-orange-600 transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/categories"
              className="text-left text-gray-600 hover:text-orange-600 transition-colors"
            >
              Categories
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-gray-600 hover:text-orange-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-gray-600 hover:text-orange-600 transition-colors"
            >
              Contact
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
