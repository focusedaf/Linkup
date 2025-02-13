 
import { useEffect } from "react"
import '../App.css'
const About = () => {
  useEffect(()=>{
    document.body.style.overflow = "hidden";
    return()=>{
      document.body.style.overflow = "auto";
    }
  },[])
  return (
    <div className="bg-blue-200">
       
    </div>
  )
}

export default About
