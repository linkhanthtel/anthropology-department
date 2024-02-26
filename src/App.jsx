import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Museum from './pages/museum'
import Library from './pages/library'
import Program from './pages/program'
import Footer from './components/footer'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/about/museum' element={<Museum />} />
          <Route path='/about/library' element={<Library />} />
          <Route path='/program' element={<Program />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
