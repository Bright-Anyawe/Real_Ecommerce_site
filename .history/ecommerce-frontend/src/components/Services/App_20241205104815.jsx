import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Header } from '../Header'
import { QuantityContext } from '../Context/ContextProvider';


function App() {

  return (
    <>
    <div className='rootLayout'>
      <QuantityContext.Provider value='' >
    </div>
    </>
  )
}

export default App
