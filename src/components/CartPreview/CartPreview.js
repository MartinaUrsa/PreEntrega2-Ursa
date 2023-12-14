import "./_CartPreview.scss";
import TerminarCompra from "../TerminarCompra/TerminarCompra";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
// React Icons
import { MdClose } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import CartItemCard from "../CartItemCard/CartItemCard";


const CartPreview = ({ toggleCartPreview }) => {

    const { precioTotal, emptyCart } = useContext(CartContext);

    const handleEmptyCart = () => {
        emptyCart();
    }

    return (
        <div className="cart-preview-container">
            <div className="cart-icons">
                <div className="cart-title">
                    <MdOutlineShoppingBag />
                    <p>Mi Carrito</p>
                </div>
                <MdClose onClick={toggleCartPreview} className="close-cart-icon"/>
            </div>

            <div className="cart-preview">                
                <div className="cart-content">
                    <CartItemCard />
                </div>
            </div>

            <div className="cart-summary">
                <div className="cart-total">Total carrito: ${precioTotal()}</div>
                <TerminarCompra onClick={toggleCartPreview} className="terminar-compra"/>
                <button className="vaciar-carrito" onClick={handleEmptyCart}>Vaciar carrito</button>
            </div>
        </div>
    )
}

export default CartPreview