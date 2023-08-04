import { Routes, Route } from 'react-router-dom'
import './App.css'
//import { Navbar } from './component/Navbar'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Experience } from './pages/Experience'
import { Project } from './pages/Project'
import { Navbar } from './component/Navbar'
import { Footer } from './component/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
