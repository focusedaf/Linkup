import { useEffect } from "react";

 
const Login = () => {
  useEffect(()=>{
      document.body.style.overflow = "hidden";

      return ()=>{
        document.body.style.overflow="auto"
      }
  },[])
  return (
    <div>
     Hello login
    </div>
  );
};

export default Login;
