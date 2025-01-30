import { SplashScreen as SplashScreenComponent } from "../Components/index";
import { useEffect , useState } from "react";


const Home = () => {
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoading(false); // Hide splash screen after the timer
    }, 2000); // Example: 2 seconds splash duration

    return () => clearTimeout(timer); // Cleanup timer

  })
  return (
    < >
       {loading ? (
         <SplashScreenComponent onAnimationEnd={function (): void {throw new Error('Function not implemented.') } }/> // Show SplashScreen while loading is true
      ) : (
        <>
          
        </>
      )}
     
    </>
  )
}
export default Home;
