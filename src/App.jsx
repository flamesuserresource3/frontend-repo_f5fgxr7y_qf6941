import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MainSections from './components/MainSections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1A1D1A]">
      <Header />
      <Hero />
      <MainSections />
      <Footer />
    </div>
  )
}

export default App
