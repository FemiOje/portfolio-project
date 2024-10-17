import './App.css';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

function App() {

  return (
    <div className="App">
      <Header />
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className='text-4xl font-bold'>Hi! I&apos;m Jinius 👋</h2>
          <br />
          <p className='text-xl'>Rest of page coming soon.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
