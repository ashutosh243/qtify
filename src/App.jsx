import Navbar from './component/navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from './component/Hero/Hero';
import Section from './component/section/Section';

function App() {
  return (
    <>
      <Router>
       <Navbar></Navbar>
       <Hero></Hero>
       {/* <Section></Section> */}
      </Router>
    </>
  )
}

export default App
