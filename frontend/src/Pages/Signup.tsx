import { useEffect } from "react"


const Signup = () => {
    useEffect(() => {
        
        document.body.style.overflow = "hidden";
    
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);
  return (
    <div>
      signup
    </div>
  )
}

export default Signup