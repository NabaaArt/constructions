import About from "@/components/main/about"
import FeaturedItems from "@/components/main/FeaturedItems"
import Hero from "@/components/main/Hero"
import Services from "@/components/main/Services"
import { Contact } from "lucide-react"
import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"

type ContextType = { setActiveSection: (section: string) => void }

export default function HomePage() {
  const { setActiveSection } = useOutletContext<ContextType>()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "projects", "about", "contact"]
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
  }, [setActiveSection])

  return (
    <>
      <Hero />
      <Services />
      <FeaturedItems />
      <About />
      <Contact />
    </>
  )
}
