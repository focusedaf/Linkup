import { useEffect } from 'react'

const About = () => {
    useEffect(()=>{
        document.body.style.overflow="hidden";
        return()=>{
        document.body.style.overflow="auto";
        } ;
    },[])
  return (
  <>
    <div className='text-white'>
        hello
    </div>
    </>
  )
}

export default About
