import { useState } from 'react'
import { Header } from '../Header'

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