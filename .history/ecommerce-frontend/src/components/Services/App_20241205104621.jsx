import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Header } from '../Header'
import create

export const QuantityContext = createContext("");


function App() {

  return (
    <>
    <div className='rootLayout'>
      <Header></Header>
   <main>
    <Outlet/>
   </main>
    </div>
    </>
  )
}

export default App
