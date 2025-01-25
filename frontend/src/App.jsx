
import Login from './components/Login'
import './App.css'
export const backendUrl=import.meta.env.VITE_BACKEND_URL
function App() {
 

  return (
    <div className='sm:w-full h-full'>
      <Login/>
     <div className='bg-white  text-blue-500'> Hello </div>
    </div>
  )
}

export default App
