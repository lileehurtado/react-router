import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './assets/views/Home'
import Pokemones from './assets/views/Pokemones'
import PokeDetails from './assets/views/PokeDetails'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:pokemon" element={<PokeDetails />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
