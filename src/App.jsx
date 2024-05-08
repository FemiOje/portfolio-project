import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx'

function App() {

  return (
    <div className="App">
      <div className="navbar-and-hero">
        <Navbar />
        <Hero />
      </div>

      <AboutMe />
    </div>
  )
}

export default App
