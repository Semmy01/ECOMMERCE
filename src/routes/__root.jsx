import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Firstsection } from './components/first-main-section'
// import Header from './components/header'


export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <Firstsection/>
      {/* <BestSelllersProductSection/> */}
      <Outlet />
    </React.Fragment>
  )
}
