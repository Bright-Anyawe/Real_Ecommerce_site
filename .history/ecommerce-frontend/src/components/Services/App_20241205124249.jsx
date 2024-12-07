import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Header } from '../Header'
import { QuantityContext } from '../Context/ContextProvider';
import { GeneralContext } from '../Context/ContextProvider';


function App() {
    const [cartProductCount, setCartProductCount] = useState(0);

  return (
    <>
      <div className="rootLayout">
        <GeneralContext.Provider>

        <QuantityContext.Provider value={{cartProductCount, setCartProductCount}} >
          <Header/>
          <main>
            <Outlet />
          </main>
        </QuantityContext.Provider>
        </GeneralContext.Provider>
      </div>
    </>
  );
}

export default App
