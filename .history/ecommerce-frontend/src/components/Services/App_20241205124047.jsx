import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Header } from '../Header'
import { QuantityContext } from '../Context/ContextProvider';
imort 


function App() {
    const [cartProductCount, setCartProductCount] = useState(0);

  return (
    <>
      <div className="rootLayout">
        <QuantityContext.Provider value={{cartProductCount, setCartProductCount}} >
          <Header/>
          <main>
            <Outlet />
          </main>
        </QuantityContext.Provider>
      </div>
    </>
  );
}

export default App
