import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <header>
        <Navbar /> 
      </header>
      <main className="w-full h-[90vh]">
        <Hero /> 
      </main>
      <section className="min-[360px]:mt-[200px] min-[428px]:mt-[50px] mb-12 md:mt-0 w-full h-full">
        <Contact /> 
      </section>

    </>
  )
}

export default App
