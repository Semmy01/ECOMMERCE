import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {Header} from './components/header'
import {Firstsection} from './routes/components/first-main-section'
// import BestSelllersProductSection from './routes'
// import Outlets from './components/outlets'
import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { RouterProvider } from '@tanstack/react-router'

const router = createRouter({routeTree})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}>
    <Firstsection/>
    {/* <BestSelllersProductSection/> */}
    </RouterProvider>
  </StrictMode>
)
