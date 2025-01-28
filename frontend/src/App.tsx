import './App.css'
import {  Chatbox as ChatboxComponent } from './Components/index'
import {SplashScreen as SplashScreenComponent} from './Components/index'

function App() { 
  return (
    < >
      
      <SplashScreenComponent onAnimationEnd={function (): void {
        throw new Error('Function not implemented.')
      } }/>
    </>
  )
}

export default App
