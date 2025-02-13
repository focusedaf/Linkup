import {
  Footer,
  Navbar,
  Calling,
  // Button,Card,Landing,SplashScreen as SplashScreenComponent,
} from "../Components/index";
// import { useEffect , useState } from "react";


const Home = () => {
  // const [loading,setLoading] = useState(true)
  // useEffect(()=>{
  //   const timer = setTimeout(() => {
  //     setLoading(false); // Hide splash screen after the timer
  //   }, 2000); // Example: 2 seconds splash duration

  //   return () => clearTimeout(timer); // Cleanup timer

  // })
  return (
    <div className="w-screen min-h-screen absolute top-0 left-0 bg-[radial-gradient(500px_circle_at_bottom,_var(--tw-gradient-stops))] from-gradient via-mid to-background">
      {/* {loading ? (
        <SplashScreenComponent
          onAnimationEnd={function (): void {
            throw new Error("Function not implemented.");
          }}
        /> // Show SplashScreen while loading is true
      ) : (
        <>
          <Navbar />
          <Landing />
          <Footer />
        </>
      )} */}
      <>
        <Navbar />
        {/* <Card/>
        <Button /> */}
        <Calling />
        <Footer />
      </>
    </div>
  );
}
export default Home;
