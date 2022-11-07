import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Location from './components/Location'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Location />
    </div>
  )
}

export default App
