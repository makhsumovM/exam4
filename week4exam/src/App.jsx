import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './pages/home'
import About from './pages/about'
import Services from './pages/services'
import Gallery from './pages/gallery'
import Contact from './pages/contact'
import Strory from './pages/strory'
import Careers from './pages/careers'
import News from './pages/news'
import Villas from './components/cards/villas'
import VillasById from './pages/villasById'

const App = () => {
const router = createBrowserRouter([{
  path: "/",
  element: <Layout/>,
  children:[{
    index: true,
    element: <Home/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path:"services",
    element:<Services/>,
  },
  {
    path:"gallery",
    element:<Gallery/>,
  },
  {
    path:"contact",
    element:<Contact/>,
  },
  {
    path:"story",
    element:<Strory/>
  },
  {
    path:"careers",
    element:<Careers/>
  },
  {
    path: "news",
    element:<News/>
  },
  {
    path:"/:id",
    element:<VillasById/>
  },

  {
    path: "*",
    element: <div>Page not found</div>,
  }
  
  


]

}])

  return (
    <div className='dark:bg-[black] bg-[white]'><RouterProvider router={router}/></div>
  )
}

export default App