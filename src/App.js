import { BrowserRouter, Routes, Route } from "react-router-dom";
// Style
import './_App.scss';
// Components
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio/Inicio";
import Productos from "./pages/Productos/Productos";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.js";
import ItemListContainer from "./components/ItemList/ItemListContainer.js";
import Contacto from "./pages/Contacto.js";
import Nosotros from "./pages/Nosotros.js";
import Error404 from "./components/Error404/Error404.js";
import CartContextProvider from "./components/Context/CartContext.js";
import Cart from "./pages/Cart/Cart.js";
import Checkout from "./components/Checkout/Checkout.js";

function App() {
  return (
    <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Inicio />}/>
                {/* Productos */}
                <Route path="/productos" element={<Productos />}/>
                {/* Ver filtrado por categorías */}
                <Route path="/productos/:category" element={<ItemListContainer />}/>
                {/* Ver detalle de cada producto*/}
                <Route path="/productos/:categoryId/:itemId" element={<ItemDetailContainer />}/>

                <Route path="/contacto" element={<Contacto />}/>
                <Route path="/nosotros" element={<Nosotros />}/>
                <Route path="/productos/trampas-magneticas" element="Proximamente..." />

                <Route path="/cart" element={<Cart />}/>
                <Route path="/checkout" element={<Checkout />}/>
            </Route>

            <Route path="/*" element={<Error404 />}/>
          </Routes>
        </BrowserRouter>
        
    </CartContextProvider>

  );

}

export default App;
