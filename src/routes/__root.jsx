import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Firstsection } from './components/first-main-section'
// import Header from './components/header'
import Index from '.'
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import CartContextProvider from '../utilities/contexts/cartContextProvider';
import Header from './components/header';


export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
     <CartContextProvider>
     {/* <Header/> */}
      <Outlet />
      <TanStackRouterDevtools/>
     </CartContextProvider>
    </React.Fragment>
    
  )
}
