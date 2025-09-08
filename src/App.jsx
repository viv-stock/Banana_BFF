import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Nav'
import About from './components/About'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-[#1F1147] text-zinc-100">
      <>
        <Navbar />
        <About />
        <Card />
      </>
    </div>
  )
}

export default App;
