import React from 'react'
import './App.css'
import Home from './components/Home/Home'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'


function App() {
  

  return (
    <>
    <Home/>
    <Outlet/>
   
    <Footer/>
   
    
    </>
      
      
  )
}

export default App
