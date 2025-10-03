import Navbar from './component/navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from './component/Hero/Hero';

function App() {
  return (
    <>
      <Router>
       <Navbar></Navbar>
       <Hero></Hero>
      </Router>
    </>
  )
}

export default App
