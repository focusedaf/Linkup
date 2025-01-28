import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from './Pages/Home.tsx'
import About from './Pages/About.tsx'
import CallPage from './Pages/CallPage.tsx'
import Login from './Pages/Login.tsx'
import Signup from './Pages/Signup.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/call",
          element: <CallPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
       
    ],
},
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
