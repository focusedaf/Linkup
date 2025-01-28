import React, { useEffect } from 'react'

const About = () => {
    useEffect(()=>{
        document.body.style.overflow="hidden";
        return()=>{
        document.body.style.overflow="auto";
        } ;
    },[])
  return (

    <div>
      
    </div>
  )
}

export default About
