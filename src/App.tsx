import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage"
import Layout from "./layout/layout"
import ItemsPage from "./pages/itemsPages"
import ProjectsPage from "./pages/projectsPage"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />

      </Route>
    </Routes>
  )
}
