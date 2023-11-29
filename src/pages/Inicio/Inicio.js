// Style
import "./_Inicio.scss"
// Photo gallery
import Foto1 from "./assets/carro-kaczur.jpg";
import Foto2 from "./assets/frente-local.jpg";
import Foto3 from "./assets/prod-kaczur.jpeg";
import Foto4 from "./assets/tabla-kaczur.jpeg";
import imanes from "./assets/imanes-varios.png"
import trampas from "./assets/trampas-magnéticas.png"
// Components
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";


const Inicio = () => {
    return (
        <div className="inicio-container">
            <div className='photo-gallery'>
                <img class="foto1" src={Foto1} alt="Carro asador Kaczur" />
                <img class="foto2" src={Foto2} alt="Frente local Kaczur" />
                <img class="foto3" src={Foto3} alt="Parrilla pequeña" />
                <img class="foto4" src={Foto4} alt="Tabla Kaczur" />
            </div>

            <div className="products">
                <div className="products-title">
                    <h3>Nuestros productos</h3>
                    <div className="line"></div>
                </div>
                <div className="products-preview">
                    <Link to="productos/hogar&jardin">
                        <div className="product-card">
                            <img src="https://drive.google.com/uc?id=10Q893JWNsY0BNa3-S4HMmoIdiMckMgGM"/>
                            <p className="category-name">Hogar & Jardín</p>
                        </div>
                    </Link>
                    <Link to="productos/imanes">
                        <div className="product-card">
                            <img src={imanes}/>
                            <p className="category-name">Imanes</p>
                        </div>
                    </Link>
                    <Link to="productos/trampas-magneticas">
                        <div className="product-card">
                            <img src={trampas}/>
                            <p className="category-name">Trampas Magéticas</p>
                        </div>
                    </Link>
                </div>
                <Button text="Ver todo +"/>
            </div>
        </div>
    )
}

export default Inicio;