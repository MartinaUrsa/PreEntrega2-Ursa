import { Link } from "react-router-dom";
import "./_TerminarCompra.scss";


const TerminarCompra = () => {
    return (
        <Link to="/cart">
            <button className="terminar-compra">Terminar compra</button>
        </Link>
    )
}

export default TerminarCompra;