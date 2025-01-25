import React from 'react'
import Login from './components/Login'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Layout from './components/Layout'
// import Signup from './components/Signup'
export const backendUrl=import.meta.env.VITE_BACKEND_URL
function App() {
   

  return (
    <div >
      <Navbar/>
      
      <Layout/>
      <Footer/>
      {/* <Signup/> */}
    
    </div>
  )
}

export default App
