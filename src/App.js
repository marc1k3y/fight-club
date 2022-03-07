import "./App.css"
import { routes } from "./routes"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <Routes>
          {routes.map(route =>
            <Route
              key={route.path}
              path={route.path}
              element={route.element} />)}
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
