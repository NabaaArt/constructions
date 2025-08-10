
import Footer from "../components/main/Footer"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/main/Header"

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    return (
        <>
            <Header
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <main className="w-screen">
                <Outlet context={{ setActiveSection }} />
            </main>
            <Footer />

        </>
    )
}
