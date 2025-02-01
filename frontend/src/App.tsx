import {Route,Routes} from 'react-router-dom'
import './App.css'
import { Home } from 'lucide-react'
import CallPage from './Pages/CallPage'
import  Login  from './Pages/Login'
import Signup from './Pages/Signup'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer";

function App() { 
  
  return (
    <div className="w-full">
      <Navbar />
      <Footer/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/call" element={<CallPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App
 