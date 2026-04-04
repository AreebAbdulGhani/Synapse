import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Architecture from './components/Architecture'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="mesh-bg"></div>
      <div className="noise-overlay"></div>
      
      <main>
        <Hero />
        <ProblemSolution />
        <Architecture />
        <Features />
      </main>
      
      <Footer />
    </>
  )
}

export default App
