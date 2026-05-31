import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./index.css"
import App from "./App.tsx"
import PortfolioPage from "./pages/Portfolio.tsx"

// Apply theme before first render to avoid flash
const stored = localStorage.getItem("portfolio-theme")
if (stored === "light") {
  document.documentElement.classList.remove("dark")
} else {
  document.documentElement.classList.add("dark")
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
