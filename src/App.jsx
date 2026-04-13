// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />         {/* Always visible */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* <Footer />         Always visible */}
    </BrowserRouter>
  )
}

export default App