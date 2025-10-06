import Navbar from './component/navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from './component/Hero/Hero';
import Section from './component/section/Section';
import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './app.module.css';


function App() {
   
  const [topAlbums,setTopAlbums]=useState({});
  const [NewAlbums,setNewAlbums]=useState({});
  useEffect(()=>{
    async function getData()
    {
      const response1=await axios.get('https://qtify-backend.labs.crio.do/albums/top');
      setTopAlbums(()=>response1.data);
      const response2=await axios.get('https://qtify-backend.labs.crio.do/albums/new');
      setNewAlbums(()=>response2.data);
    }
    getData();
  },[]);
 
  return (
    <>
      <Router>
       <Navbar></Navbar>
       <Hero></Hero>
       <div className={style.main}>
          <Section heading="Top Albums" data={topAlbums}></Section>
          <Section heading="New Albums" data={NewAlbums}></Section>
       </div>
      </Router>
    </>
  )
}

export default App
