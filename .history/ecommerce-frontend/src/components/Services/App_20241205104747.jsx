import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Header } from '../Header'
import Quantity


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
