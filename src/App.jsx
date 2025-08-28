import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Pokedex from "./Pages/Pokedex.jsx"
import Play from "./Pages/Play.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pokedex" element={<Pokedex />}/>
        <Route path="/play" element={<Play />}/>
      </Routes>
    </Router>
  )
}

export default App
