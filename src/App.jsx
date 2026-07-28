import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Home from './pages/Home/Home'
import Specialist from './pages/Specialist/Specialist'
import Solutions from './pages/Solutions/Solutions'
import Blog from './pages/Blog/Blog'
import BlogPost from './pages/BlogPost/BlogPost'
import Contact from './pages/Contact/Contact'
import Legal from './pages/Legal/Legal'
import './styles/global.css'

import ScrollToTop from './components/utils/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/especialista" element={<Specialist />} />
            <Route path="/solucoes" element={<Solutions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/privacidade" element={<Legal />} />
            <Route path="/termos" element={<Legal />} />
            {/* Rotas futuras serão adicionadas aqui */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
