import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {Header} from './components/header'
import Firstsection from './components/first-main-section'
import BestSelllersProductSection from './components/best-sellers'
// import Outlets from './components/outlets'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Firstsection/>
    <BestSelllersProductSection/>
  </StrictMode>
)
