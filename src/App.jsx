import { Helmet } from 'react-helmet'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Helmet>
        <title>NikhilSambarapu-Portfolio</title>
        <meta name="description" content="Portfolio website showcasing my work and skills" />
      </Helmet>

      <div className="bg-slate-900 text-white">
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
