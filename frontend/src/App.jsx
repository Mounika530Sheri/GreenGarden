import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Booknow from './components/Booknow'
import Location from './components/Location'
import MainNavbar from './components/MainNavbar'
import AvailabilityChecker from './components/AvailabilityChecker'
import Contact from './components/Contact'
import Packages from './components/Packages'
import Axios from 'axios'
import Facilities from './components/Facilities'




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavbar />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/facilities", element: <Facilities/> },
      {path:"/avalibility",element:<AvailabilityChecker/>},
      {path:"/addEvent",element:<Booknow/>},
      {path:"/location",element:<Location/>},
      {path:"/contact",element:<Contact/>},
      {path:"/packages",element:<Packages/>}

    ]
  }
])

function App() {
   return (<RouterProvider router={router} />)

}

export default App
