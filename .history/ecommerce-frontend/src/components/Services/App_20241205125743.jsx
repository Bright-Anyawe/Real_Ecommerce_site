import { useState } from 'react'
import { Outlet } from "react-router-dom";
import { Header } from '../Header'
import { QuantityContext } from '../Context/ContextProvider';
import { GeneralContext } from '../Context/ContextProvider';


function App() {
    const [cartProductCount, setCartProductCount] = useState(0);
    const [storageProduct, setStorageProduct] = useState()
    const [fetchedData, setFetchedData] = useState();
    const [loginData, setLoginData] = useState();
    const [registerUser, set] = useState();

  return (
    <>
      <div className="rootLayout">
        <GeneralContext.Provider value={{ storageProduct, setStorageProduct }}>
          <QuantityContext.Provider
            value={{ cartProductCount, setCartProductCount }}
          >
            <Header />
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
