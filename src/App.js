import { BrowserRouter, Routes, Route } from "react-router-dom";
// Style
import './_App.scss';
// Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Layout from "./components/Layout";

import Inicio from "./pages/Inicio/Inicio";
import Productos from "./pages/Productos/Productos";
import Contacto from "./pages/Contacto/Contacto";
import Nosotros from "./pages/Nosotros/Nosotros";
import TyC from "./pages/TyC/TyC";
import Hogar from "./pages/Productos/Hogar";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Inicio />}/>
          <Route path="productos" element={<Productos />}>
            <Route path="productos/hogar&jardin" element={<Hogar />}/>
            <Route path="productos/imanes" element={<Hogar />}/>
            <Route path="productos/trampas-magneticas" element={<Hogar />}/>
          </Route>
          <Route path="contacto" element={<Contacto />}/>
          <Route path="nosotros" element={<Nosotros />}/>
          <Route path="tyc" element={<TyC />}/>

        </Route>

      </Routes>

    </BrowserRouter>
  );

}

export default App;
