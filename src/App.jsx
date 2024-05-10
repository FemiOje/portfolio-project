import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx'
import ProjectList from './components/ProjectList.jsx'
import ContactMe from './components/ContactMe.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <div className="App">
      <div className="navbar-and-hero">
        <Navbar />
        <Hero />
      </div>

      <AboutMe />
      <ProjectList />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
