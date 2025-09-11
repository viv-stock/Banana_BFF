import { useState } from 'react'
import './App.css'
import Navbar from './components/Nav'
import About from './components/About'
import Bots from './components/Bots'
import Service from './components/Service'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-[#1F1147] text-zinc-100">
      <>
        <Navbar />
        <About />
        <Bots />
        <Service />
        <Contact />
      </>
    </div>
  )
}

export default App;
