import { BrowserRouter, Routes, Route } from "react-router-dom";
// Style
import './_App.scss';
// Components
import Layout from "./components/Layout";
import Inicio from "./pages/Inicio/Inicio";
import Productos from "./pages/Productos/Productos";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import ItemListContainer from "./components/Items/ItemListContainer";
import Contacto from "./pages/Contacto.js";
import Nosotros from "./pages/Nosotros.js";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

            <Route index element={<Inicio />}/>
            {/* Productos */}
            <Route path="/productos" element={<Productos />}/>
            {/* Ver filtrado por categorías */}
            <Route path="/productos/:category" element={<ItemListContainer />}/>
            {/* Ver detalle de cada producto*/}
            <Route path="/items/:itemId" element={<ItemDetailContainer />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/productos/trampas-magneticas" element="Proximamente..." />

        </Route>

      </Routes>

    </BrowserRouter>
  );

}

export default App;
