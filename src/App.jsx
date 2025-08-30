import { Routes, Route } from "react-router-dom"
import Menu from "./Menu/Menu.jsx"
import Footer from "./Footer/Footer.jsx"
import Home from "./Pages/Home/Home.jsx"
import Pokedex from "./Pages/Pokedex/Pokedex.jsx"
import Play from "./Pages/Play/Play.jsx"

function App() {
  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/play" element={<Play />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
