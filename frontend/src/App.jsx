import React from 'react'
import Login from './components/Login'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
// import Signup from './components/Signup'
export const backendUrl=import.meta.env.VITE_BACKEND_URL
function App() {
   

  return (
    <div >
      <Header/>
      <Login/>
      <Footer/>
      {/* <Signup/> */}
    
    </div>
  )
}

export default App
