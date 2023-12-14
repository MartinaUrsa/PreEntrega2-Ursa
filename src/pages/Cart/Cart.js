import CartItemCard from "../../components/CartItemCard/CartItemCard";
import { CartContext } from "../../components/Context/CartContext";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useContext } from 'react'

import "./_Cart.scss";
import { Link, useNavigate } from "react-router-dom";


const Cart = () => {

    const navigate = useNavigate();

    const { carrito, precioTotal, emptyCart } = useContext(CartContext);

    const handleEmptyCart = () => {
        emptyCart();
    }

    return (
        <div className="cart-container">
            <div className="cart-header">
                <div className="cart-title">
                    <MdOutlineShoppingBag />
                    <p>Mi Carrito</p>
                </div>
                <button className="vaciar-carrito" onClick={handleEmptyCart}>Vaciar carrito</button>
            </div>

            { carrito.length === 0 ? (<div><p>Parece que no hay nada en el carrito aún.</p><button className="volver" onClick={() => navigate(-1)}>Volver</button></div>) : (
                <div>
                    <CartItemCard />
                    <div className="checkout-btns">
                        <div className="cart-total">Total carrito: ${precioTotal()}</div>
                        <Link to="/cart/checkout"><button className="checkout">Ir a pagar</button></Link>
                        
                    </div>
                </div>
            ) }
        </div>
    )
}

export default Cart